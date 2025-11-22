import { Request, Response } from "express";
import { HttpStatus } from "../../../core/types/http-statuses";
import { createErrorMessages } from "../../../core/middleware/validations/input-validtion-result.middleware";
import { BlogInputModel } from "../../dto/blog.input-dto";
import { blogsService } from "../../application/blogs.service";

export async function updateBlogHandler(
  req: Request<{ id: string }, {}, BlogInputModel>,
  res: Response,
) {
  const id = req.params.id;
  try {
    await blogsService.update(id, req.body);
    return res.sendStatus(HttpStatus.NoContent);
  } catch (error: any) {
    return res
      .status(HttpStatus.NotFound)
      .send(
        createErrorMessages([{ message: error.message, field: error.field }]),
      );
  }
}
