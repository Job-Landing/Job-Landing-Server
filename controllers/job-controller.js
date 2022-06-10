import Job from '../models/Job.js';
import { StatusCodes } from 'http-status-codes';

import mongoose from 'mongoose';
import BadRequestError from "../errors/bad-request-error.js";

const createJob = async (req, res) => {
    const { position, company } = req.body;
    // req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).send(job);
}

export {createJob}
