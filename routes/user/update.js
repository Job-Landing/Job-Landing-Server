import express from 'express';
import { body } from 'express-validator/check/index.js';
import {
  getUser,
  getUserByUsername,
  updateUser,
} from '../../controllers/user-controller.js';
import Password from '../../utils/password.js';
import BadRequestError from '../../errors/bad-request-error.js';
import { StatusCodes } from 'http-status-codes';
import validationHandler from '../../middlewares/validation-handler.js';

const router = express.Router();

router.put(
  '/user/:originalPassword',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters!'),
  ],
  validationHandler,
  async (req, res) => {
    // user id to find the user
    const originalPassword = req.params.originalPassword;
    const { username, email, password } = req.body;

    const existingUser = await getUser(email);
    if (!existingUser) {
      throw new BadRequestError('User does not exist!');
    }

    const existingUsername = await getUserByUsername(username);
    if (existingUsername) {
      throw new BadRequestError(`Username ${username} is not available!`);
    }

    const isValidPassword = await Password.compare(
      existingUser.password,
      originalPassword
    );

    if (!isValidPassword) {
      throw new BadRequestError('Invalid username or password!');
    }

    const updatedUser = await updateUser(email, { username, email, password });

    res.status(StatusCodes.OK).send(updatedUser);
    console.log('update user');
  }
);

export { router as updateUserRouter };
