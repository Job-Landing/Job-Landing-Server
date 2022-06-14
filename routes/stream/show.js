import express from 'express';
import { getItems } from '../../controllers/stream-controller.js';

const router = express.Router();

router.get('/stream', async (req, res) => {
  getItems(req, res);
  console.log('get stream');
});

export { router as streamRouter };
