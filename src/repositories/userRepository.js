import User from "../models/user.js";

const UserRepository = {
  findAll: () => User.find(),
};

export default UserRepository;
