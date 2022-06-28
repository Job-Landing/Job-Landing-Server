import Stream from '../models/stream.js';

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

const getItems = async () => {
  try {
    const items = await Stream.find({});
    return items;
  } catch (error) {
    console.log(error);
  }
};

const updateItem = async (jobId, stream) => {
  try {
    console.log(stream);
    const item = await Stream.findOneAndUpdate({ jobId }, stream, {
      new: true,
    });
    console.log(item);
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
