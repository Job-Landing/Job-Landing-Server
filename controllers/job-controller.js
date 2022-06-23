import Job from '../models/job.js';

const initJob = async (user_id) => {
  try {
    const jobs = new Job({
      user_id,
      job_list: [],
    });
    await jobs.save();
    return jobs;
  } catch (error) {
    console.log(error);
  }
};

const createJob = async (user_id, body) => {
  try {
    const jobs = await Job.findOne({ user_id });
    jobs.job_list.push(body);
    await jobs.save();
    // return the new jobs
    return jobs.job_list[jobs.job_list.length - 1];
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

const updateJob = async (user_id, job_id, body) => {
  try {
    const jobs = await Job.findOne({ user_id });
    const jobIndex = jobs.job_list.findIndex(
      (job) => job._id.toString() === job_id
    );
    jobs.job_list[jobIndex] = body;
    await jobs.save();
    console.log(jobs);
    return jobs.job_list[jobIndex];
  } catch (error) {
    console.log(error);
  }
};

const deleteJob = async (user_id, job_id) => {
  try {
    const jobs = await Job.findOne({ user_id });
    const jobIndex = jobs.job_list.findIndex(
      (job) => job._id.toString() === job_id
    );
    const deletedJob = jobs.job_list.splice(jobIndex, 1);
    await jobs.save();
    return deletedJob._id;
  } catch (error) {
    console.log(error);
  }
};

export { initJob, createJob, getJobs, updateJob, deleteJob };
