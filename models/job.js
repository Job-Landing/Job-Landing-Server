import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  job_list: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        required: true,
      },
      status: {
        type: String,
      },
      type: {
        type: String,
      },
      location: {
        type: String,
      },
      applyUrl: {
        type: String,
        // may change to not required
        required: true,
      },
      createAt: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
      },
    },
  ],
});

export default mongoose.model('Job', jobSchema);
