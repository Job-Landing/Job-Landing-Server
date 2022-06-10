import express from 'express';
import {createJob} from "../../controllers/job-controller.js";

const router = express.Router();

router.post('/job', async (req, res) => {
  console.log('create job');
  createJob(req, res);
});

export { router as createJobRouter };
