import app from './app.js';
import 'dotenv/config';
import mongoose from 'mongoose';

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Successfully connected to MongoDB.');
  } catch (error) {
    console.log(error);
  }
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
};

start();
