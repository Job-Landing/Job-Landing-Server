import { validationResult } from 'express-validator/check/index.js';
import RequestValidationError from '../errors/request-validation-error.js';

const validationHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new RequestValidationError('Validation failed', errors.array());
  }
  next();
};

export default validationHandler;
