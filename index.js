import app from './app.js';
import 'dotenv/config';
import connectDB from './db/connect.js';

const port = process.env.PORT || 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log('Successfully connected to MongoDB.');
  } catch (error) {
    console.log(error);
  }
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
};

start();
