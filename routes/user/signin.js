import express from 'express';

const router = express.Router();

router.post('/user/signin', async (req, res) => {
  console.log('signin');
});

export { router as signinRouter };
