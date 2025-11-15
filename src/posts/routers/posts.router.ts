import { Router } from "express";
import { idValidation } from "../../core/middleware/validations/params-id-validation.middleware";
import { inputValidationResultMiddleware } from "../../core/middleware/validations/input-validtion-result.middleware";
import { superAdminGuardMiddleware } from "../../core/middleware/auth/super-admin-guard.middleware";
import { getPostListHandler } from "./handlers/get-post-list.handler";
import { getPostHandler } from "./handlers/get-post.handler";
import { postInputDtoValidation } from "../validation/post.input-dto.validation-middlewares";
import { createPostHandler } from "./handlers/create-post.handler";
import { updatePostHandler } from "./handlers/update-post.handler";
import { deletePostHandler } from "./handlers/delete-post.handler";

export const postsRouter = Router({});

postsRouter
  .get("", getPostListHandler)

  .get("/:id", idValidation, inputValidationResultMiddleware, getPostHandler)

  .post(
    "",
    superAdminGuardMiddleware,
    postInputDtoValidation,
    inputValidationResultMiddleware,
    createPostHandler,
  )

  .put(
    "/:id",
    superAdminGuardMiddleware,
    idValidation,
    postInputDtoValidation,
    inputValidationResultMiddleware,
    updatePostHandler,
  )

  .delete(
    "/:id",
    superAdminGuardMiddleware,
    idValidation,
    inputValidationResultMiddleware,
    deletePostHandler,
  );
