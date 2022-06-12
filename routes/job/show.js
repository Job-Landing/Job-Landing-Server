import express from 'express';
import { getAllJob } from '../../controllers/job-controller.js';

const router = express.Router();

router.get('/job', async (req, res) => {
  getAllJob(req, res);
  console.log('get all job');
});

export { router as getJobsRouter };
