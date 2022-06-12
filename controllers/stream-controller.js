import Stream from '../models/stream';
import { StatusCodes } from 'http-status-codes';

const createItem = async (stream) => {
  try {
    const item = await Stream.create(stream);
    return item;
  } catch (error) {
    console.log(error);
  }
};

const getItem = async (jobId) => {
  try {
    const item = await Stream.findOne({ jobId });
    return item;
  } catch (error) {
    console.log(error);
  }
};

const getItems = async (req, res) => {
  try {
    const items = await Stream.find({});
    res.status(StatusCodes.OK).json(items);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send([{ message: 'Bad Request!' }]);
  }
};

const updateItem = async (stream) => {
  try {
    const item = await Stream.findOneAndUpdate(stream.jobId, stream, {
      new: true,
    });
    return item;
  } catch (error) {
    console.log(error);
  }
};

const deleteItem = async (jobId) => {
  try {
    const item = await Stream.findOneAndDelete({ jobId });
    return item;
  } catch (error) {
    console.log(error);
  }
};

export { createItem, getItem, getItems, updateItem, deleteItem };
