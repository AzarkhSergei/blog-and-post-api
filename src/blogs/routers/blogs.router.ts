import { Router } from "express";
import { getBlogListHandler } from "./handlers/get-blog-list.handler";
import { idValidation } from "../../core/middleware/validations/params-id-validation.middleware";
import { inputValidationResultMiddleware } from "../../core/middleware/validations/input-validtion-result.middleware";
import { getBlogHandler } from "./handlers/get-blog.handler";
import { superAdminGuardMiddleware } from "../../core/middleware/auth/super-admin-guard.middleware";
import { blogInputDtoValidation } from "../validation/blog.input-dto.validation-middlewares";
import { createBlogHandler } from "./handlers/create-blog.handler";
import { updateBlogHandler } from "./handlers/update-blog.handler";
import { deleteBlogHandler } from "./handlers/delete-blog.handler";

export const blogsRouter = Router({});

blogsRouter
  .get("", getBlogListHandler)

  .get("/:id", idValidation, inputValidationResultMiddleware, getBlogHandler)

  .post(
    "",
    superAdminGuardMiddleware,
    blogInputDtoValidation,
    inputValidationResultMiddleware,
    createBlogHandler,
  )

  .put(
    "/:id",
    superAdminGuardMiddleware,
    idValidation,
    blogInputDtoValidation,
    inputValidationResultMiddleware,
    updateBlogHandler,
  )

  .delete(
    "/:id",
    superAdminGuardMiddleware,
    idValidation,
    inputValidationResultMiddleware,
    deleteBlogHandler,
  );
