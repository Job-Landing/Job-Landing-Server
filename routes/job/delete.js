import express from 'express';
import { deleteJob } from '../../controllers/job-controller.js';
import { deleteItem } from '../../controllers/stream-controller.js';

const router = express.Router();

router.delete('/job/:id', async (req, res) => {
  const jobId = await deleteJob(req, res);
  console.log('delete job');

  // delete stream
  console.log('delete stream item');
  await deleteItem(jobId);
});

export { router as deleteJobRouter };
