import mongoose from 'mongoose';
import validator from 'validator';

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, 'Please provide company'],
    maxlength: 50,
  },
  position: {
    type: String,
    required: [true, 'Please provide position'],
    maxlength: 100,
  },
  status: {
    type: String,
    enum: ['interview', 'declined', 'pending'],
    default: 'pending',
  },
  jobType: {
    type: String,
    enum: ['full-time', 'part-time', 'remote', 'internship'],
    default: 'full-time',
  },
  jobLocation: {
    type: String,
    default: 'Northeastern',
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
    // type: mongoose.Types.ObjectId,
    // ref: 'User',
    // required: [true, 'Please provide user'],
  },
  applyUrl: {
    type: String,
    validate: {
      validator: validator.isURL,
      message: 'Please provide a valid url',
    },
    maxlength: 200,
  },
});

export default mongoose.model('Job', jobSchema);
