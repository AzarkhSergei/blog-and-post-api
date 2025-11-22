import { Request, Response } from "express";
import { HttpStatus } from "../../../core/types/http-statuses";
import { createErrorMessages } from "../../../core/middleware/validations/input-validtion-result.middleware";
import { blogsService } from "../../application/blogs.service";

export async function getBlogHandler(req: Request, res: Response) {
  const id = req.params.id;
  const blog = await blogsService.findById(id);

  if (!blog) {
    return res
      .status(HttpStatus.NotFound)
      .send(createErrorMessages([{ message: "Blog not found", field: "id" }]));
  }
  return res.send(blog);
}
