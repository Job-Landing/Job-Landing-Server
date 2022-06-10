import express from 'express';
import {updateJob} from "../../controllers/job-controller.js";

const router = express.Router();

router.put('/job/:id', async (req, res) => {
  updateJob(req, res);
});

export { router as updateJobRouter };
