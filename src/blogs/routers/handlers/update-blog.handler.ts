import { Request, Response } from "express";
import { blogsRepository } from "../../repositories/blogs.repository";
import { BlogViewModel } from "../../types/blog";
import { HttpStatus } from "../../../core/types/http-statuses";
import { createErrorMessages } from "../../../core/middleware/validations/input-validtion-result.middleware";
import {BlogInputModel} from "../../dto/blog.input-dto";

export async function updateBlogHandler(
  req: Request<{ id: string }, {}, BlogInputModel>,
  res: Response,
) {
  const id = req.params.id;
  const blog = await blogsRepository.findById(id);

  if (!blog) {
    return res
      .status(HttpStatus.NotFound)
      .send(createErrorMessages([{ message: "Blog not found", field: "id" }]));
  }

  await blogsRepository.update(id, req.body);
  return res.sendStatus(HttpStatus.NoContent);
}
