import express from 'express';

const router = express.Router();

router.post('/user/signout', async (req, res) => {
  console.log('signin');
});

export { router as signoutRouter };
