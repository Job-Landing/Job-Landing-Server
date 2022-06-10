// CRUD operations for User
import User from '../models/user';
import { StatusCodes } from 'http-status-codes';

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).send(user);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send([{ message: 'Bad Request!' }]);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(StatusCodes.OK).send(user);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send([{ message: 'Bad Request!' }]);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(StatusCodes.OK).send(user);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send([{ message: 'Bad Request!' }]);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).send({ message: 'User deleted' });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send([{ message: 'Bad Request!' }]);
  }
};

export { createUser, getUser, updateUser, deleteUser };
