import {PostDbModel} from "../../dto/post.output-dto";
import {PostViewModel} from "../../types/post";


export function mapToPostViewModel(dbPost: PostDbModel): PostViewModel{
  return {
    id: dbPost.id,
    title: dbPost.title,
    shortDescription: dbPost.shortDescription,
    content: dbPost.content,
    blogId: dbPost.blogId,
    blogName: dbPost.blogId,
    createdAt: dbPost.createdAt
  }
}