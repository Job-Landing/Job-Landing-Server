import express from 'express';
import { createJob } from '../../controllers/job-controller.js';
import { createItem } from '../../controllers/stream-controller.js';

const router = express.Router();

router.post('/job', async (req, res) => {
  const jobId = await createJob(req, res);
  console.log('create job');

  // check if applyUrl exists
  if (req.body.applyUrl) {
    // push to the stream
    const stream = {
      company: req.body.company,
      position: req.body.position,
      applyUrl: req.body.applyUrl,
      jobId: jobId,
    };
    console.log('create stream item');
    await createItem(stream);
  }
});

export { router as createJobRouter };
