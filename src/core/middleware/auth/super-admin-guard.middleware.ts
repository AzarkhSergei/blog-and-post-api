import { Request, Response, NextFunction } from "express";
import { HttpStatus } from "../../types/http-statuses";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "qwerty";

export const superAdminGuardMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Basic ")) {
    return res.sendStatus(HttpStatus.Unauthorized);
  }

  const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");

  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD
    ? next()
    : res.sendStatus(HttpStatus.Unauthorized);
};
