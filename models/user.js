import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
    maxlength: 20,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
    trim: true,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
