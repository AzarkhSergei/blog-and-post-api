import { Request, Response } from "express";
import { blogsRepository } from "../../repositories/blogs.repository";
import { HttpStatus } from "../../../core/types/http-statuses";
import { createErrorMessages } from "../../../core/middleware/validations/input-validtion-result.middleware";

export async function deleteBlogHandler(req: Request, res: Response) {
  const id = req.params.id;
  const blog = await blogsRepository.findById(id);

  if (!blog) {
    return res
      .status(HttpStatus.NotFound)
      .send(createErrorMessages([{ message: "Blog not found", field: "id" }]));
  }

  await blogsRepository.delete(id);
  return res.sendStatus(HttpStatus.NoContent);
}
