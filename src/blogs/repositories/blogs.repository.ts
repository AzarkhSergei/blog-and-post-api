import { BlogViewModel } from "../types/blog";
import { BlogInputModel } from "../dto/blog.input-dto";
import { blogCollection } from "../../db/mongo.db";
import { mapToBlogViewModel } from "../routers/mappers/map-to-blog-view-model.util";

export const blogsRepository = {
  async findAll(): Promise<BlogViewModel[]> {
    const blogs = await blogCollection.find().toArray();
    return blogs.map(mapToBlogViewModel);
  },

  async findById(id: string): Promise<BlogViewModel | null> {
    const blog = await blogCollection.findOne({ id });
    return blog ? mapToBlogViewModel(blog) : null;
  },

  async create(newBlog: BlogViewModel): Promise<BlogViewModel> {
    const blogToInsert = { ...newBlog };
    await blogCollection.insertOne(blogToInsert);
    return newBlog;
  },

  async update(id: string, data: BlogInputModel): Promise<void> {
    const updateResult = await blogCollection.updateOne(
      { id },
      {
        $set: {
          name: data.name,
          description: data.description,
          websiteUrl: data.websiteUrl,
        },
      },
    );

    if (updateResult.matchedCount < 1) {
      throw new Error("Blog does not exist");
    }
  },

  async delete(id: string): Promise<void> {
    const deleteResult = await blogCollection.deleteOne({ id });

    if (deleteResult.deletedCount < 1) {
      throw new Error("Blog does not exist");
    }
  },
};
