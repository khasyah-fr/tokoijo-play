import UserRepository from "../repositories/userRepository.js";

const UserService = {
  async getUsers() {
    return UserRepository.findAll();
  },

  async getUserById(userId) {
    return UserRepository.findById(userId);
  },

  async updateUser(userId, userData) {
    return UserRepository.update(userId, userData);
  },
};

export default UserService;
