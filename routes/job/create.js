import express from 'express';

const router = express.Router();

router.post('/job', async (req, res) => {
  console.log('create job');
});

export { router as createJobRouter };
