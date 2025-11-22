import { Request, Response } from "express";
import { HttpStatus } from "../../../core/types/http-statuses";
import { blogsService } from "../../application/blogs.service";

export async function getBlogListHandler(_req: Request, res: Response) {
  const blogs = await blogsService.findAll();
  return res.status(HttpStatus.Ok).send(blogs);
}
