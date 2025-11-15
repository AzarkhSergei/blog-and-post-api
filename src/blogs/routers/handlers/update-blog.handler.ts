import { Request, Response } from "express";
import { blogsRepository } from "../../repositories/blogs.repository";
import { BlogViewModel } from "../../types/blog";
import { HttpStatus } from "../../../core/types/http-statuses";
import { createErrorMessages } from "../../../core/middleware/validations/input-validtion-result.middleware";

export function updateBlogHandler(
  req: Request<{ id: string }, {}, BlogViewModel>,
  res: Response,
) {
  const id = req.params.id;
  const blog = blogsRepository.findById(id);

  if (!blog) {
    return res
      .status(HttpStatus.NotFound)
      .send(createErrorMessages([{ message: "Blog not found", field: "id" }]));
  }

  blogsRepository.update(id, req.body);
  return res.sendStatus(HttpStatus.NoContent);
}
