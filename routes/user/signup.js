import express from 'express';
import { body } from 'express-validator/check/index.js';
import { getUser, createUser } from '../../controllers/user-controller.js';
import { StatusCodes } from 'http-status-codes';
import validationHandler from '../../middlewares/validation-handler.js';

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

    // create the user
    const user = await createUser(req.body);
    res.status(StatusCodes.OK).send(user);

    console.log('signup');
  }
);

export { router as signupRouter };
