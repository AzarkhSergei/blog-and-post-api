import express, { Express } from "express";
import { blogsRouter } from "./blogs/routers/blogs.router";

export const setupApp = (app: Express) => {
  app.use(express.json());

  app.get("/", (req, res) => {
    res.status(200).send("hello world!!!");
  });

  app.use("/blogs", blogsRouter);

  return app;
};
