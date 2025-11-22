import { BlogViewModel } from "../../types/blog";
import { BlogDbModel } from "../../dto/blog.output-dto";

export function mapToBlogViewModel(dbBlog: BlogDbModel): BlogViewModel {
  return {
    id: dbBlog.id,
    name: dbBlog.name,
    description: dbBlog.description,
    websiteUrl: dbBlog.websiteUrl,
    createdAt: dbBlog.createdAt,
    isMembership: dbBlog.isMembership,
  };
}
