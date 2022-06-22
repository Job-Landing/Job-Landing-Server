import express from 'express';
import { body } from 'express-validator/check/index.js';
import { getUser } from '../../controllers/user-controller.js';
import Password from '../../utils/password.js';
import BadRequestError from '../../errors/bad-request-error.js';
import { StatusCodes } from 'http-status-codes';
import validationHandler from '../../middlewares/validation-handler.js';

const router = express.Router();

router.post(
  '/user/signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters!'),
  ],
  validationHandler,
  async (req, res) => {
    const { email, password } = req.body;

    const existingUser = await getUser(email);
    if (!existingUser) {
      throw new BadRequestError('User does not exist!');
    }

    const isValidPassword = await Password.compare(
      existingUser.password,
      password
    );

    const isValidUsername = existingUser.username === req.body.username;

    if (!isValidPassword || !isValidUsername) {
      throw new BadRequestError('Invalid username or password!');
    }

    res.status(StatusCodes.OK).send(existingUser);
    console.log('signin');
  }
);

export { router as signinRouter };
