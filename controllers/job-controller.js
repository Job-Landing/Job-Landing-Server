import Job from '../models/job.js';

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

const updateJob = async (id, body) => {
  try {
    const job = await Job.findByIdAndUpdate(id, body, {
      new: true,
    });
    return job;
  } catch (error) {
    console.log(error);
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
