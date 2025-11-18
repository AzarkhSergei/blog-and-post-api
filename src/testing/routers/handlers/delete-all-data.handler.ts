import { Request, Response } from "express";
import { HttpStatus } from "../../../core/types/http-statuses";
import { blogCollection, postCollection } from "../../../db/mongo.db";

export async function deleteAllDataHandler(req: Request, res: Response) {
  await blogCollection.deleteMany();
  await postCollection.deleteMany();
  res.sendStatus(HttpStatus.NoContent);
}
