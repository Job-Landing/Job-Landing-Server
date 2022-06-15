import express from 'express';
import { createJob } from '../../controllers/job-controller.js';
import { createItem } from '../../controllers/stream-controller.js';
import { StatusCodes } from 'http-status-codes';
import { body } from 'express-validator/check/index.js';
import validationHandler from '../../middlewares/validation-handler.js';

const router = express.Router();

router.post(
  '/job',
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
  }
);

export { router as createJobRouter };
