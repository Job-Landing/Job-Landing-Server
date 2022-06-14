import express from 'express';
import { getUser } from '../../controllers/user-controller.js';

const router = express.Router();

router.post('/user/signin', async (req, res) => {
  await getUser(req, res);
  // TODO: should check the email and password
  console.log('signin');
});

export { router as signinRouter };
