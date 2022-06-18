import express from 'express';
import { updateJob } from '../../controllers/job-controller.js';
import { updateItem } from '../../controllers/stream-controller.js';
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
      .isIn(['', 'interview', 'declined', 'pending', 'offer'])
      .withMessage('Status must be interview, declined, pending or offer'),
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
    const job = await updateJob(req.params.id, req.body);
    console.log('update job');

    const stream = {
      company: req.body.company,
      position: req.body.position,
      applyUrl: req.body.applyUrl,
      jobId: job._id,
    };

    console.log('update stream item');
    await updateItem(stream);

    res.status(StatusCodes.OK).send(job);
  }
);

export { router as updateJobRouter };
