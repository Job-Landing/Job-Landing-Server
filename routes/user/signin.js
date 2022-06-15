import express from 'express';
import { getUser } from '../../controllers/user-controller.js';
import Password from '../../utils/password.js';
import BadRequestError from '../../errors/bad-request-error.js';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

router.post('/user/signin', async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await getUser(email);
  if (!existingUser) {
    throw new BadRequestError('User does not exist!');
  }

  console.log(existingUser);

  // TODO: should check the email and password
  const isValidPassword = await Password.compare(
    existingUser.password,
    password
  );

  if (!isValidPassword) {
    throw new BadRequestError('Invalid password!');
  }

  res.status(StatusCodes.OK).send(existingUser);
  console.log('signin');
});

export { router as signinRouter };
