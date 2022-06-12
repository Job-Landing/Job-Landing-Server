import Stream from '../models/stream';

const createItem = async (stream) => {
  try {
    const item = await Stream.create({
      stream,
    });
  } catch (error) {
    console.log(error);
  }
};

const getItem = async (stream) => {
  try {
    const item = await Stream.findOne({ stream });
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
