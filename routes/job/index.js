import express from 'express';

const router = express.Router();

router.get('/job', async (req, res) => {
  console.log('get jobs');
});

export { router as getJobsRouter };
