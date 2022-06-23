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
    default: Date.now,
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const Stream = mongoose.model('Stream', streamSchema);

export default Stream;
