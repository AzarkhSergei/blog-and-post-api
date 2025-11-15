import express, { Express } from "express";
import { blogsRouter } from "./blogs/routers/blogs.router";
import { postsRouter } from "./posts/routers/posts.router";

export const setupApp = (app: Express) => {
  app.use(express.json());

  app.get("/", (req, res) => {
    res.status(200).send("hello world!!!");
  });

  app.use("/blogs", blogsRouter);
  app.use("/posts", postsRouter);

  return app;
};
