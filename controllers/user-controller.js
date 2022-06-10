// CRUD operations for User
import User from '../models/user';
import { StatusCodes } from 'http-status-codes';

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).send(user);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).send(error);
  }
};

export default createUser;
