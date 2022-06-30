// CRUD operations for User
import User from '../models/user.js';
import Password from '../utils/password.js';

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

const updateUser = async (email, body) => {
  try {
    if (body.password) {
      body.password = await Password.toHash(body.password);
    }
    const user = await User.findOneAndUpdate({ email }, body, {
      new: true,
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};

// const deleteUser = async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.status(StatusCodes.OK).send({ message: 'User deleted' });
//   } catch (error) {
//     res.status(StatusCodes.BAD_REQUEST).send([{ message: 'Bad Request!' }]);
//   }
// };

export { createUser, getUser, getUserByUsername, updateUser };
