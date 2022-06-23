import express from 'express';
import { deleteJob } from '../../controllers/job-controller.js';
import { deleteItem } from '../../controllers/stream-controller.js';

const router = express.Router();

router.delete('/job/:user_id/:job_id', async (req, res) => {
  // delete job
  const delete_job_id = await deleteJob(req.params.user_id, req.params.job_id);
  console.log('delete job');

  // delete stream
  await deleteItem(delete_job_id);
  console.log('delete stream item');

  res.send({});
});

export { router as deleteJobRouter };
