// CRUD operations for User
import User from '../models/user';
import { StatusCodes } from 'http-status-codes';
import BadRequestError from '../errors/bad-request-error';

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).send(user);
  } catch (error) {
    throw new BadRequestError();
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(StatusCodes.OK).send(user);
  } catch (error) {
    throw new BadRequestError();
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(StatusCodes.OK).send(user);
  } catch (error) {
    throw new BadRequestError();
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).send({ message: 'User deleted' });
  } catch (error) {
    throw new BadRequestError();
  }
};

export { createUser, getUser, updateUser, deleteUser };
