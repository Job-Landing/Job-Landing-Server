import express from 'express';
import { getJobs } from '../../controllers/job-controller.js';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

router.get('/job', async (req, res) => {
  const jobs = await getJobs(req.body.createdBy);
  res.status(StatusCodes.OK).send(jobs);
  console.log('get all job');
});

export { router as getJobsRouter };
