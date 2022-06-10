import express from 'express';

const router = express.Router();

router.put('/job/:id', async (req, res) => {
  console.log('update job');
});

export { router as updateJobRouter };
