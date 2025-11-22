import { Request, Response } from "express";
import { HttpStatus } from "../../../core/types/http-statuses";
import { BlogInputModel } from "../../dto/blog.input-dto";
import { blogsService } from "../../application/blogs.service";

export async function createBlogHandler(
  req: Request<{}, {}, BlogInputModel>,
  res: Response,
) {
  const createdBlog = await blogsService.create(req.body);
  return res.status(HttpStatus.Created).send(createdBlog);
}
