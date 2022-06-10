import express from 'express';

const router = express.Router();

router.delete('/job/:id', async (req, res) => {
  console.log('delete job');
});

export { router as deleteJobRouter };
