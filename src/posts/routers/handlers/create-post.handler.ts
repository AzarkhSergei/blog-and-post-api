import { Request, Response } from "express";
import { HttpStatus } from "../../../core/types/http-statuses";
import { PostInputModel } from "../../dto/post.input-dto";
import { PostViewModel } from "../../types/post";
import { blogsRepository } from "../../../blogs/repositories/blogs.repository";
import { createErrorMessages } from "../../../core/middleware/validations/input-validtion-result.middleware";
import { postsRepository } from "../../repositories/posts.repository";

export async function createPostHandler(
  req: Request<{}, {}, PostInputModel>,
  res: Response,
) {
  const blog = await blogsRepository.findById(req.body.blogId);

  if (!blog) {
    return res
      .status(HttpStatus.NotFound)
      .send(createErrorMessages([{ message: "Blog not found", field: "id" }]));
  }

  const newPost: PostViewModel = {
    id: Date.now().toString(),
    title: req.body.title,
    shortDescription: req.body.shortDescription,
    content: req.body.content,
    blogId: blog.id,
    blogName: blog.name,
    createdAt: new Date().toISOString(),
  };

  await postsRepository.create(newPost);
  return res.status(HttpStatus.Created).send(newPost);
}
