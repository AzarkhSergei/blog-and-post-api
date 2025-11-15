import { body } from "express-validator";

const titleValidation = body("title")
  .exists()
  .withMessage("Title is required")
  .isString()
  .withMessage("Title should be a string")
  .trim()
  .notEmpty()
  .withMessage("Title cannot be empty")
  .isLength({ max: 30 })
  .withMessage("Title length should not exceed 30 characters");

const shortDescriptionValidation = body("shortDescription")
  .exists()
  .withMessage("Short description is required")
  .isString()
  .withMessage("Short description should be a string")
  .trim()
  .notEmpty()
  .withMessage("Short description cannot be empty")
  .isLength({ max: 100 })
  .withMessage("Short description length should not exceed 100 characters");

const contentValidation = body("content")
  .exists()
  .withMessage("Content is required")
  .isString()
  .withMessage("Content should be a string")
  .trim()
  .notEmpty()
  .withMessage("Content cannot be empty")
  .isLength({ max: 1000 })
  .withMessage("Content length should not exceed 1000 characters");

const blogIdValidation = body("blogId")
  .exists()
  .withMessage("Blog id is required")
  .isString()
  .withMessage("Blog id should be a string")
  .trim()
  .notEmpty()
  .withMessage("Blog id cannot be empty");

export const postInputDtoValidation = [
  titleValidation,
  shortDescriptionValidation,
  contentValidation,
  blogIdValidation,
];
