import express from 'express';
import { deleteJob } from '../../controllers/job-controller.js';
import { deleteItem } from '../../controllers/stream-controller.js';

const router = express.Router();

router.delete('/job/:id', async (req, res) => {
  const { id } = req.params;

  // delete job
  await deleteJob(id);
  console.log('delete job');

  // delete stream
  await deleteItem(id);
  console.log('delete stream item');

  res.send({});
});

export { router as deleteJobRouter };
