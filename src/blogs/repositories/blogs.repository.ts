import { BlogViewModel } from "../types/blog";
import { BlogInputModel } from "../dto/blog.input-dto";
import {blogCollection} from "../../db/mongo.db";

export const blogsRepository = {
  async findAll(): Promise<BlogViewModel[]> {
    return await blogCollection.find().toArray();
  },

  async findById(id: string): Promise<BlogViewModel | null> {
    return await blogCollection.findOne({ id }) ?? null;
  },

  async create(newBlog: BlogViewModel): Promise<BlogViewModel> {
    await blogCollection.insertOne(newBlog);
    return newBlog;
  },

  async update(id: string, data: BlogInputModel): Promise<void> {
    const updateResult = await blogCollection.updateOne({ id },
      { $set:
          { name: data.name,
            description: data.description,
            websiteUrl: data.websiteUrl }
      });

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
