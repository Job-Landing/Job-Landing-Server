import Stream from '../models/stream';

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
    const items = await Stream.find();
    return items;
  } catch (error) {
    console.log(error);
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

const deleteItem = async (stream) => {
  try {
    const item = await Stream.findOneAndDelete(stream.jobId);
    return item;
  } catch (error) {
    console.log(error);
  }
};

export { createItem, getItem, getItems, updateItem, deleteItem };
