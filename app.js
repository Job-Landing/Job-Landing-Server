import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import cors from 'cors';

import NotFoundError from './errors/not-found-error';
import errorHandler from './middlewares/error-handler';

import { signupRouter } from './routes/user/signup';
import { signinRouter } from './routes/user/signin';
import { signoutRouter } from './routes/user/signout';

import { createJobRouter } from './routes/job/create';
import { getJobsRouter } from './routes/job/show';
import { updateJobRouter } from './routes/job/update';
import { deleteJobRouter } from './routes/job/delete';

import { streamRouter } from './routes/stream/show';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);

app.use(createJobRouter);
app.use(getJobsRouter);
app.use(updateJobRouter);
app.use(deleteJobRouter);

app.use(streamRouter);

// when no page is found
app.get('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export default app;
