import mongoose from 'mongoose';
import validator from 'validator';

const jobSchema = new mongoose.Schema({
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
  createdBy: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Job', jobSchema);
