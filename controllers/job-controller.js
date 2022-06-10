import Job from '../models/Job.js';
import { StatusCodes } from 'http-status-codes';

import mongoose from 'mongoose';
import BadRequestError from "../errors/bad-request-error.js";

const createJob = async (req, res) => {
    try {
        const job = await Job.create(req.body);
        res.status(StatusCodes.CREATED).send(job);
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).send([{ message: 'Bad Request!' }]);
    }
}

export {createJob}
