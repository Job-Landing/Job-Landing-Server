import express from 'express';
import { getUser, createUser } from '../../controllers/user-controller.js';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

router.post('/user/signup', async (req, res) => {
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
});

export { router as signupRouter };
