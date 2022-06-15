import express from 'express';
import { createJob } from '../../controllers/job-controller.js';
import { createItem } from '../../controllers/stream-controller.js';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

router.post('/job', async (req, res) => {
  const job = await createJob(req.body);
  console.log('create job');

  // check if applyUrl exists
  if (req.body.applyUrl) {
    // push to the stream
    const stream = {
      company: req.body.company,
      position: req.body.position,
      applyUrl: req.body.applyUrl,
      jobId: job._id,
    };
    console.log('create stream item');
    await createItem(stream);
  }

  res.status(StatusCodes.OK).send(job);
});

export { router as createJobRouter };
