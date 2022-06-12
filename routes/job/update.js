import express from 'express';
import Stream from '../../models/stream.js';
import { updateJob } from '../../controllers/job-controller.js';
import {
  createItem,
  getItem,
  updateItem,
  deleteItem,
} from '../../controllers/stream-controller.js';

const router = express.Router();

router.put('/job/:id', async (req, res) => {
  const jobId = await updateJob(req, res);
  console.log('update job');

  const stream = {
    company: req.body.company,
    position: req.body.position,
    applyUrl: req.body.applyUrl,
    jobId: jobId,
  };

  const applyUrl = req.body.applyUrl;
  // TODO: the applyUrl may not be in req.body but in database

  // find stream
  const item = await getItem(jobId);

  // if stream exists, update it
  if (item && applyUrl) {
    // update stream
    console.log('update stream item');
    await updateItem(stream);
  }
  // if stream doesn't have applyUrl, delete it
  else if (item && !applyUrl) {
    // delete stream
    console.log('delete stream item');
    await deleteItem(stream);
  }
  // if not exists, create stream
  else if (!item && applyUrl) {
    // create stream
    console.log('create stream item');
    await createItem(stream);
  }
});

export { router as updateJobRouter };
