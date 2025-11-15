import { PostViewModel } from "../posts/types/post";
import { BlogViewModel } from "../blogs/types/blog";

export const db = {
  blogs: <BlogViewModel[]>[
    {
      id: "1",
      name: "Tech Insights",
      description:
        "Exploring the latest trends in technology and software development.",
      websiteUrl: "https://techinsights.com",
    },
    {
      id: "2",
      name: "Travel Diaries",
      description:
        "Stories and guides from around the world for passionate travelers.",
      websiteUrl: "https://traveldiaries.blog",
    },
    {
      id: "3",
      name: "Healthy Living",
      description:
        "Tips on nutrition, workouts, and mindfulness for a balanced lifestyle.",
      websiteUrl: "https://healthyliving.life",
    },
  ],
  posts: <PostViewModel[]>[],
};
