import express from 'express';
import { getItems } from '../../controllers/stream-controller.js';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

router.get('/stream', async (req, res) => {
  const iterms = await getItems();
  res.status(StatusCodes.OK).send(iterms);
  console.log('get stream');
});

export { router as streamRouter };
