import { Request, Response } from "express";
import { HttpStatus } from "../../../core/types/http-statuses";
import { createErrorMessages } from "../../../core/middleware/validations/input-validtion-result.middleware";
import { blogsService } from "../../application/blogs.service";

export async function deleteBlogHandler(req: Request, res: Response) {
  const id = req.params.id;
  try {
    await blogsService.delete(id);
    return res.sendStatus(HttpStatus.NoContent);
  } catch (error: any) {
    return res
      .status(HttpStatus.NotFound)
      .send(
        createErrorMessages([{ message: error.message, field: error.field }]),
      );
  }
}
