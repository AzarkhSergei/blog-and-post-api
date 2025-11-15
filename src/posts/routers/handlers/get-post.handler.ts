import { Request, Response } from "express";
import { HttpStatus } from "../../../core/types/http-statuses";
import { createErrorMessages } from "../../../core/middleware/validations/input-validtion-result.middleware";
import { postsRepository } from "../../repositories/posts.repository";

export function getPostHandler(req: Request, res: Response) {
  const id = req.params.id;
  const post = postsRepository.findById(id);

  if (!post) {
    return res
      .status(HttpStatus.NotFound)
      .send(createErrorMessages([{ message: "Post not found", field: "id" }]));
  }
  return res.send(post);
}
