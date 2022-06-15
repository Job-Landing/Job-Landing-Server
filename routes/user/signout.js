import express from 'express';

const router = express.Router();

router.post('/user/signout', async (req, res) => {
  console.log('signout');
  req.session = null;
  res.send({});
});

export { router as signoutRouter };
