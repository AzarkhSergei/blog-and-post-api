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
  posts: <PostViewModel[]>[
    {
      id: "1",
      title: "The Future of Web Frameworks",
      shortDescription: "Exploring what's next for React, Angular, and Vue.",
      content:
        "A deep dive into the evolution of modern JavaScript frameworks and where they're heading next.",
      blogId: "1",
      blogName: "Tech Insights",
    },
    {
      id: "2",
      title: "Top 5 Hidden Gems in Europe",
      shortDescription: "Discover the most underrated travel destinations.",
      content:
        "From the Albanian Riviera to Slovenia's lakes — explore lesser-known yet breathtaking European locations.",
      blogId: "2",
      blogName: "Travel Diaries",
    },
    {
      id: "3",
      title: "Morning Routines for a Healthier Life",
      shortDescription: "Simple steps to boost energy and mood every morning.",
      content:
        "Learn how a few mindful habits can transform your day and improve your overall well-being.",
      blogId: "3",
      blogName: "Healthy Living",
    },
  ],
};
