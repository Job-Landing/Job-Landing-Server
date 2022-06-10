import CustomError from './custom-error';
import { StatusCodes } from 'http-status-codes';

class BadRequestError extends CustomError {
  statusCode = StatusCodes.BAD_REQUEST;
  constructor(message = 'Bad Request') {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  serializeErrors() {
    return [{ message: this.message }];
  }
}

export default BadRequestError;
