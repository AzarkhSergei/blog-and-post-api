import {
  FieldValidationError,
  ValidationError,
  validationResult,
} from "express-validator";
import { NextFunction, Request, Response } from "express";
import { FieldError } from "../../types/fieldError";
import { HttpStatus } from "../../types/http-statuses";
import { APIErrorResult } from "../../types/apiErrorResult";

export const createErrorMessages = (errors: FieldError[]): APIErrorResult => {
  return { errorMessages: errors };
};

const formatErrors = (error: ValidationError): FieldError => {
  const expressError = error as unknown as FieldValidationError;

  return {
    message: expressError.msg,
    field: expressError.path,
  };
};

export const inputValidationResultMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req)
    .formatWith(formatErrors)
    .array({ onlyFirstError: true });

  if (errors.length > 0) {
    res.status(HttpStatus.BadRequest).json({ errorMessages: errors });
    return;
  }

  next();
};
