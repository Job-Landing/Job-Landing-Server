import CustomError from './custom-error.js';
import { StatusCodes } from 'http-status-codes';

class RequestValidationError extends CustomError {
  statusCode = StatusCodes.BAD_REQUEST;
  constructor(message = 'Validation failed', errors) {
    super(message);
    this.errors = errors;
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  serializeErrors() {
    return this.errors.map((error) => {
      return { message: error.msg };
    });
  }
}

export default RequestValidationError;
