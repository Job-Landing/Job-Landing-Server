import express from 'express';
import { createUser } from '../../controllers/user-controller.js';

const router = express.Router();

router.post('/user/signup', async (req, res) => {
  // TODO: should validate the email and password
  // TODO: should check the email has not been registered already
  // TODO: should ecrypt the password
  await createUser(req, res);
  console.log('signup');
});

export { router as signupRouter };
