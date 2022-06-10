import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import cors from 'cors';

import NotFoundError from './errors/not-found-error';
import errorHandler from './middlewares/error-handler';

import { signupRouter } from './routes/user/signup';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use(signupRouter);

// when no page is found
app.get('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export default app;
