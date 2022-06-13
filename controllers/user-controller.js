// CRUD operations for User
import User from '../models/user';
import { StatusCodes } from 'http-status-codes';
import BadRequestError from '../errors/bad-request-error.js';

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //check the email has not been created yet
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      throw new BadRequestError('Email has been registered already!');
    }
    const user = await User.create({ name, email, password });
    res.status(StatusCodes.CREATED).send(user);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send([{ message: 'Bad Request!' }]);
  }
};

const getUser = async (req, res) => {
  try {
    console.log(req);
    // const user = await User.findById(req.params.id);
    const user = await User.findOne({ email: req.body.email });
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
