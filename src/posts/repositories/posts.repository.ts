import { PostViewModel } from "../types/post";
import { PostInputModel } from "../dto/post.input-dto";
import { postCollection } from "../../db/mongo.db";
import {mapToPostViewModel} from "../routers/mappers/map-to-post-view-model.util";

export const postsRepository = {
  async findAll(): Promise<PostViewModel[]> {
    const posts = await postCollection.find().toArray();
    return posts.map(mapToPostViewModel)
  },

  async findById(id: string): Promise<PostViewModel | null> {
    const post = await postCollection.findOne({ id });
    return post ? mapToPostViewModel(post) : null;
  },

  async create(newPost: PostViewModel): Promise<PostViewModel> {
    const postToInsert = {...newPost}
    await postCollection.insertOne(postToInsert);
    return newPost;
  },

  async update(id: string, data: PostInputModel): Promise<void> {
    const updateResult = await postCollection.updateOne(
      { id },
      {
        $set: {
          title: data.title,
          shortDescription: data.shortDescription,
          content: data.content,
          blogId: data.blogId,
        },
      },
    );

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
