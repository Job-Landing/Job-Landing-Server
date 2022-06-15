// CRUD operations for User
import User from '../models/user.js';

const createUser = async (body) => {
  try {
    const user = await User.create(body);
    return user;
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (email) => {
  try {
    // const user = await User.findById(req.params.id);
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.log(error);
  }
};

const getUserByUsername = async (username) => {
  try {
    // const user = await User.findById(req.params.id);
    const user = await User.findOne({ username });
    return user;
  } catch (error) {
    console.log(error);
  }
};

// const updateUser = async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.status(StatusCodes.OK).send(user);
//   } catch (error) {
//     res.status(StatusCodes.BAD_REQUEST).send([{ message: 'Bad Request!' }]);
//   }
// };

// const deleteUser = async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.status(StatusCodes.OK).send({ message: 'User deleted' });
//   } catch (error) {
//     res.status(StatusCodes.BAD_REQUEST).send([{ message: 'Bad Request!' }]);
//   }
// };

export { createUser, getUser, getUserByUsername };
