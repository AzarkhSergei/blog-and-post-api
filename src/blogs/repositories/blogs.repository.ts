import { BlogViewModel } from "../types/blog";
import { db } from "../../db/in-memory.db";
import { BlogInputModel } from "../dto/blog.input-dto";

export const blogsRepository = {
  findAll(): BlogViewModel[] {
    return db.blogs;
  },

  findById(id: string): BlogViewModel | null {
    return db.blogs.find((b) => b.id === id) ?? null;
  },

  create(newBlog: BlogViewModel): BlogViewModel {
    db.blogs.push(newBlog);
    return newBlog;
  },

  update(id: string, data: BlogInputModel): void {
    const blog = db.blogs.find((b) => b.id === id);

    if (!blog) {
      throw new Error("Blog does not exist");
    }

    blog.name = data.name;
    blog.description = data.description;
    blog.websiteUrl = data.websiteUrl;
    return;
  },

  delete(id: string): void {
    const index = db.blogs.findIndex((b) => b.id === id);

    if (index === -1) {
      throw new Error("Blog does not exist");
    }

    db.blogs.splice(index, 1);
    return;
  },
};
