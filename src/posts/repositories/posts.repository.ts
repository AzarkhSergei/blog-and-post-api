import { db } from "../../db/in-memory.db";
import { PostViewModel } from "../types/post";
import { PostInputModel } from "../dto/post.input-dto";

export const postsRepository = {
  findAll(): PostViewModel[] {
    return db.posts;
  },

  findById(id: string): PostViewModel | null {
    return db.posts.find((p) => p.id === id) ?? null;
  },

  create(newPost: PostViewModel): PostViewModel {
    db.posts.push(newPost);
    return newPost;
  },

  update(id: string, data: PostInputModel): void {
    const post = db.posts.find((p) => p.id === id);

    if (!post) {
      throw new Error("Post does not exist");
    }

    post.title = data.title;
    post.shortDescription = data.shortDescription;
    post.content = data.content;
    post.blogId = data.blogId;
    return;
  },

  delete(id: string): void {
    const index = db.posts.findIndex((p) => p.id === id);

    if (index === -1) {
      throw new Error("Post does not exist");
    }

    db.posts.splice(index, 1);
    return;
  },
};
