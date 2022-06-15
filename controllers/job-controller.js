import Job from '../models/job.js';
import { StatusCodes } from 'http-status-codes';

const createJob = async (body) => {
  try {
    const job = await Job.create(body);
    return job;
  } catch (error) {
    console.log(error);
  }
};

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

const deleteJob = async (id) => {
  try {
    const jobId = await Job.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
};

export { createJob, getJobs, updateJob, deleteJob };
