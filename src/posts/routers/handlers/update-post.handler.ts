import { Request, Response } from "express";
import { HttpStatus } from "../../../core/types/http-statuses";
import { createErrorMessages } from "../../../core/middleware/validations/input-validtion-result.middleware";
import { PostViewModel } from "../../types/post";
import { postsRepository } from "../../repositories/posts.repository";

export function updatePostHandler(
  req: Request<{ id: string }, {}, PostViewModel>,
  res: Response,
) {
  const id = req.params.id;
  const post = postsRepository.findById(id);

  if (!post) {
    return res
      .status(HttpStatus.NotFound)
      .send(createErrorMessages([{ message: "Post not found", field: "id" }]));
  }

  postsRepository.update(id, req.body);
  return res.sendStatus(HttpStatus.NoContent);
}
