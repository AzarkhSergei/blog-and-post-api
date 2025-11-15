import { Router } from "express";
import { deleteAllDataHandler } from "./handlers/delete-all-data.handler";

export const testingRouter = Router({});

testingRouter.delete("/all-data", deleteAllDataHandler);
