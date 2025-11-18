import { Request, Response } from "express";
import { blogsRepository } from "../../repositories/blogs.repository";
import { HttpStatus } from "../../../core/types/http-statuses";

export async function getBlogListHandler(_req: Request, res: Response) {
  const blogs = await blogsRepository.findAll();
  return res.status(HttpStatus.Ok).send(blogs);
}
