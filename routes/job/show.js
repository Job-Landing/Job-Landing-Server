import express from 'express';
import {getAllJob} from "../../controllers/job-controller.js";

const router = express.Router();

router.get('/job', async (req, res) => {
  console.log('get jobs');
  getAllJob(req, res);
});

export { router as getJobsRouter };
