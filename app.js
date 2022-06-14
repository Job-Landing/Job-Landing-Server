import express from 'express';
import 'express-async-errors';
import bodyParser from 'body-parser';
import cors from 'cors';

import NotFoundError from './errors/not-found-error.js';
import errorHandler from './middlewares/error-handler.js';

import { signupRouter } from './routes/user/signup.js';
import { signinRouter } from './routes/user/signin.js';
import { signoutRouter } from './routes/user/signout.js';

import { createJobRouter } from './routes/job/create.js';
import { getJobsRouter } from './routes/job/show.js';
import { updateJobRouter } from './routes/job/update.js';
import { deleteJobRouter } from './routes/job/delete.js';

import { streamRouter } from './routes/stream/show.js';

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

// home page
app.get('/', async (req, res) => {
  res.send('This is the server side of our job landing application!');
});

// when no page is found
app.get('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export default app;
