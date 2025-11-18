import { Request, Response } from "express";
import { HttpStatus } from "../../../core/types/http-statuses";
import { createErrorMessages } from "../../../core/middleware/validations/input-validtion-result.middleware";
import { postsRepository } from "../../repositories/posts.repository";

export async function deletePostHandler(req: Request, res: Response) {
  const id = req.params.id;
  const post = await postsRepository.findById(id);

  if (!post) {
    return res
      .status(HttpStatus.NotFound)
      .send(createErrorMessages([{ message: "Post not found", field: "id" }]));
  }

  await postsRepository.delete(id);
  return res.sendStatus(HttpStatus.NoContent);
}
