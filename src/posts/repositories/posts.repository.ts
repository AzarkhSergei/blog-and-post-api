import { PostViewModel } from "../types/post";
import { PostInputModel } from "../dto/post.input-dto";
import { postCollection } from '../../db/mongo.db';

export const postsRepository = {
  async findAll(): Promise<PostViewModel[]> {
    return await postCollection.find().toArray();
  },

  async findById(id: string): Promise<PostViewModel | null> {
    return await postCollection.findOne({ id }) ?? null;
  },

  async create(newPost: PostViewModel): Promise<PostViewModel> {
    await postCollection.insertOne(newPost);
    return newPost;
  },

  async update(id: string, data: PostInputModel): Promise<void> {
    const updateResult = await postCollection.updateOne({ id },
      {$set :
          { title: data.title,
            shortDescription: data.shortDescription,
            content: data.content,
            blogId: data.blogId }
      });

    if (updateResult.matchedCount < 1) {
      throw new Error("Post does not exist");
    }
  },

  async delete(id: string): Promise<void> {
    const deleteResult = await postCollection.deleteOne({ id });

    if (deleteResult.deletedCount < 1) {
      throw new Error("Post does not exist");
    }
  },
};
