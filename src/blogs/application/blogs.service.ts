import { BlogViewModel } from "../types/blog";
import { BlogInputModel } from "../dto/blog.input-dto";
import { blogsRepository } from "../repositories/blogs.repository";

export const blogsService = {
  async findAll(): Promise<BlogViewModel[]> {
    return blogsRepository.findAll();
  },

  async findById(id: string): Promise<BlogViewModel | null> {
    return blogsRepository.findById(id);
  },

  async create(data: BlogInputModel): Promise<BlogViewModel> {
    const newBlog: BlogViewModel = {
      id: Date.now().toString(),
      name: data.name,
      description: data.description,
      websiteUrl: data.websiteUrl,
      createdAt: new Date().toISOString(),
      isMembership: false,
    };
    return blogsRepository.create(newBlog);
  },

  async update(id: string, data: BlogInputModel): Promise<void> {
    const blog = await blogsRepository.findById(id);

    if (!blog) {
      throw { message: "Blog not found", field: "id" };
    }
    return blogsRepository.update(id, data);
  },

  async delete(id: string): Promise<void> {
    const blog = await blogsRepository.findById(id);

    if (!blog) {
      throw { message: "Blog not found", field: "id" };
    }
    return blogsRepository.delete(id);
  },
};
