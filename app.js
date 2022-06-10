import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import NotFoundError from './errors/not-found-error';
import errorHandler from './middlewares/error-handler';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// when no page is found
app.get('*', (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export default app;
