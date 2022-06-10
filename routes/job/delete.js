import express from 'express';
import {deleteJob} from "../../controllers/job-controller.js";

const router = express.Router();

router.delete('/job/:id', async (req, res) => {
  deleteJob(req, res);
});

export { router as deleteJobRouter };
