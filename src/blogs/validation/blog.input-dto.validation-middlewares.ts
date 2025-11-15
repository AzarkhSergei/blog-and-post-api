import { body } from "express-validator";

const nameValidation = body("name")
  .exists()
  .withMessage("Name is required")
  .isString()
  .withMessage("Name should be a string")
  .trim()
  .notEmpty()
  .withMessage("Name cannot be empty")
  .isLength({ max: 15 })
  .withMessage("Name length should not exceed 15 characters");

const descriptionValidation = body("description")
  .exists()
  .withMessage("Description is required")
  .isString()
  .withMessage("Description should be a string")
  .trim()
  .notEmpty()
  .withMessage("Description cannot be empty")
  .isLength({ max: 500 })
  .withMessage("Description length should not exceed 500 characters");

const websiteUrlValidation = body("websiteUrl")
  .exists()
  .withMessage("Website URL is required")
  .isString()
  .withMessage("Website URL should be a string")
  .trim()
  .notEmpty()
  .withMessage("Website URL cannot be empty")
  .isLength({ max: 100 })
  .withMessage("Website URL length should not exceed 100 characters")
  .matches(
    /^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/,
  )
  .withMessage("Website URL is not valid");

export const blogInputDtoValidation = [
  nameValidation,
  descriptionValidation,
  websiteUrlValidation,
];
