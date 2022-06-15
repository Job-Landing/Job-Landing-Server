import Job from '../models/job.js';
import { StatusCodes } from 'http-status-codes';

const createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).send(job);
    return job._id;
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send([{ message: 'Bad Request!' }]);
  }
};

// TODO: should use user Id to be filter
const getJobs = async (createdBy) => {
  try {
    const jobs = await Job.find({ createdBy });
    return jobs;
  } catch (error) {
    console.log(error);
  }
};

const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(StatusCodes.OK).send(job);
    return job._id;
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send([{ message: 'Bad Request!' }]);
  }
};

const deleteJob = async (req, res) => {
  try {
    const jobId = await Job.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).send({ message: 'Job deleted' });
    return jobId;
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send([{ message: 'Bad Request!' }]);
  }
};

export { createJob, getJobs, updateJob, deleteJob };
