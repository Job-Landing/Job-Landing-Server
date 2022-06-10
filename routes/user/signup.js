import express from 'express';
import createUser from '../../controllers/user-controller';

const router = express.Router();

router.post('/user/signup', async (req, res) => {
  createUser(req, res);
});

export { router as signupRouter };
