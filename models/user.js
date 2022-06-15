import mongoose from 'mongoose';
import validator from 'validator';
import Password from '../utils/password.js';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide username'],
    minlength: 4,
    trim: true,
    unique: true,
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
  location: {
    type: String,
    trim: true,
    maxlength: 20,
  },
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const hashedPassword = await Password.toHash(this.password);
    this.password = hashedPassword;
  }
  next();
});

const User = mongoose.model('User', userSchema);

export default User;
