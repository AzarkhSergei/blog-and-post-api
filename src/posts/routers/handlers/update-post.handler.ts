import { Request, Response } from "express";
import { HttpStatus } from "../../../core/types/http-statuses";
import { createErrorMessages } from "../../../core/middleware/validations/input-validtion-result.middleware";
import { postsRepository } from "../../repositories/posts.repository";
import {PostInputModel} from "../../dto/post.input-dto";

export async function updatePostHandler(
  req: Request<{ id: string }, {}, PostInputModel>,
  res: Response,
) {
  const id = req.params.id;
  const post = await postsRepository.findById(id);

  if (!post) {
    return res
      .status(HttpStatus.NotFound)
      .send(createErrorMessages([{ message: "Post not found", field: "id" }]));
  }

  await postsRepository.update(id, req.body);
  return res.sendStatus(HttpStatus.NoContent);
}
