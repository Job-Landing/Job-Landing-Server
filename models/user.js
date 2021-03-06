import mongoose from 'mongoose';
import Password from '../utils/password.js';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
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
