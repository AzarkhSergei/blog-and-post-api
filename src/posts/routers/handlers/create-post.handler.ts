import { Request, Response } from "express";
import { HttpStatus } from "../../../core/types/http-statuses";
import { db } from "../../../db/in-memory.db";
import { PostInputModel } from "../../dto/post.input-dto";
import { PostViewModel } from "../../types/post";
import { blogsRepository } from "../../../blogs/repositories/blogs.repository";
import { createErrorMessages } from "../../../core/middleware/validations/input-validtion-result.middleware";
import { postsRepository } from "../../repositories/posts.repository";

export function createPostHandler(
  req: Request<{}, {}, PostInputModel>,
  res: Response,
) {
  const blog = blogsRepository.findById(req.body.blogId);

  if (!blog) {
    return res
      .status(HttpStatus.NotFound)
      .send(createErrorMessages([{ message: "Blog not found", field: "id" }]));
  }

  const newPost: PostViewModel = {
    id: db.posts.length
      ? (Number(db.posts[db.posts.length - 1].id) + 1).toString()
      : "1",
    title: req.body.title,
    shortDescription: req.body.shortDescription,
    content: req.body.content,
    blogId: blog.id,
    blogName: blog.name,
  };

  postsRepository.create(newPost);
  return res.status(HttpStatus.Created).send(newPost);
}
