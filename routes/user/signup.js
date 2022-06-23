import express from 'express';
import { body } from 'express-validator/check/index.js';
import {
  getUser,
  getUserByUsername,
  createUser,
} from '../../controllers/user-controller.js';
import { initJob } from '../../controllers/job-controller.js';
import { StatusCodes } from 'http-status-codes';
import validationHandler from '../../middlewares/validation-handler.js';
import BadRequestError from '../../errors/bad-request-error.js';

const router = express.Router();

router.post(
  '/user/signup',
  [
    body('username')
      .isLength({ min: 3 })
      .withMessage('Username must be at least 3 characters long'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters!'),
  ],
  validationHandler,
  async (req, res) => {
    // cannot create if the email has been registered
    const { email } = req.body;
    const existingUser = await getUser(email);
    if (existingUser) {
      throw new BadRequestError('User already exists!');
    }
    const { username } = req.body;
    const invalidUsername = await getUserByUsername(username);
    if (invalidUsername) {
      throw new BadRequestError('Username already exists!');
    }

    // create the user
    const user = await createUser(req.body);

    // create the job
    const job = await initJob(user._id);

    res.status(StatusCodes.OK).send(user);

    console.log('signup');
  }
);

export { router as signupRouter };
