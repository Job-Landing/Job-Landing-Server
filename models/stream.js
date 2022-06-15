import mongoose from 'mongoose';
import validator from 'validator';

const streamSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  applyUrl: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  jobId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

const Stream = mongoose.model('Stream', streamSchema);

export default Stream;
