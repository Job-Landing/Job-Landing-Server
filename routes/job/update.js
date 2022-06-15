import express from 'express';
import { updateJob } from '../../controllers/job-controller.js';
import {
  createItem,
  getItem,
  updateItem,
  deleteItem,
} from '../../controllers/stream-controller.js';
import { body } from 'express-validator/check/index.js';
import validationHandler from '../../middlewares/validation-handler.js';

const router = express.Router();

router.put(
  '/job/:id',
  [
    body('company')
      .isLength({ min: 3 })
      .withMessage('Company must be at least 3 characters long'),
    body('position')
      .isLength({ min: 2 })
      .withMessage('Position must be at least 2 characters long'),
    body('status')
      .isIn(['', 'interview', 'declined', 'pending'])
      .withMessage('Status must be interview, declined or pending'),
    body('type')
      .isIn(['', 'full-time', 'part-time', 'remote', 'internship'])
      .withMessage('Type must be full-time, part-time, remote or internship'),
    body('applyUrl').isURL().withMessage('Apply URL must be valid'),
    body('createdBy')
      .isEmail()
      .withMessage('The user must be a valid email address'),
  ],
  validationHandler,
  async (req, res) => {
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
  }
);

export { router as updateJobRouter };
