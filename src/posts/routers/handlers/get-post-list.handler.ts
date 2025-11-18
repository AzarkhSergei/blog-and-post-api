import { Request, Response } from "express";
import { HttpStatus } from "../../../core/types/http-statuses";
import { postsRepository } from "../../repositories/posts.repository";

export async function getPostListHandler(_req: Request, res: Response) {
  const posts = await postsRepository.findAll();
  return res.status(HttpStatus.Ok).send(posts);
}
