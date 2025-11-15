import { Request, Response } from "express";
import { blogsRepository } from "../../repositories/blogs.repository";
import { HttpStatus } from "../../../core/types/http-statuses";
import { BlogInputModel } from "../../dto/blog.input-dto";
import { BlogViewModel } from "../../types/blog";
import { db } from "../../../db/in-memory.db";

export function createBlogHandler(
  req: Request<{}, {}, BlogInputModel>,
  res: Response,
) {
  const newBlog: BlogViewModel = {
    id: db.blogs.length
      ? (Number(db.blogs[db.blogs.length - 1].id) + 1).toString()
      : "1",
    name: req.body.name,
    description: req.body.description,
    websiteUrl: req.body.websiteUrl,
  };

  blogsRepository.create(newBlog);
  return res.status(HttpStatus.Created).send(newBlog);
}
