import { Request, Response } from "express";
import { blogsRepository } from "../../repositories/blogs.repository";
import { HttpStatus } from "../../../core/types/http-statuses";
import { BlogInputModel } from "../../dto/blog.input-dto";
import { BlogViewModel } from "../../types/blog";

export async function createBlogHandler(
  req: Request<{}, {}, BlogInputModel>,
  res: Response,
) {
  const newBlog: BlogViewModel = {
    id: Date.now().toString(),
    name: req.body.name,
    description: req.body.description,
    websiteUrl: req.body.websiteUrl,
    createdAt: new Date().toISOString(),
    isMembership: false
  };

  await blogsRepository.create(newBlog);
  return res.status(HttpStatus.Created).send(newBlog);
}
