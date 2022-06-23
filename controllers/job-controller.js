import Job from '../models/job.js';

const initJob = async (user_id) => {
  try {
    const job = new Job({
      user_id,
      job_list: [],
    });
    await job.save();
    return job;
  } catch (error) {
    console.log(error);
  }
};

const createJob = async (user_id, body) => {
  try {
    const job = await getJob(user_id);
    job.job_list.push(body);
    await job.save();
    console.log(job);
    // return the new job
    return job.job_list[job.job_list.length - 1];
  } catch (error) {
    console.log(error);
  }
};

const getJob = async (user_id) => {
  try {
    const job = await Job.findOne({ user_id });
    return job;
  } catch (error) {
    console.log(error);
  }
};

const getJobs = async (user_id) => {
  try {
    const jobs = await Job.findOne({ user_id });
    return jobs.job_list;
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

export { initJob, createJob, getJobs, updateJob, deleteJob };
