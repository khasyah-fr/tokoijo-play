import UserRepository from "../repositories/userRepository.js";

const UserService = {
  async getUsers() {
    return UserRepository.findAll();
  },
};

export default UserService;
