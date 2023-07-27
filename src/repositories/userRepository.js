import User from "../models/user.js";

const UserRepository = {
  findAll: () => User.find(),
  findById: (userId) => User.findById(userId),
  update: (userId, userData) =>
    User.findByIdAndUpdate(userId, userData, { new: true }),
};

export default UserRepository;
