import mongoose from 'mongoose';
import validator from 'validator';

const streamSchema = new mongoose.Schema({
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
  applyUrl: {
    type: String,
    required: [true, 'Please provide apply url'],
    validate: {
      validator: validator.isURL,
      message: 'Please provide a valid url',
    },
    maxlength: 200,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  jobId: {
    type: mongoose.Types.ObjectId,
    required: [true, 'Please provide job id'],
    maxlength: 100,
  },
});

const Stream = mongoose.model('Stream', streamSchema);

export default Stream;
