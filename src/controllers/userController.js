import UserService from "../services/userService.js";
import { Response } from "../entities/response.js";

export const getUsers = async (req, res) => {
  try {
    const users = await UserService.getUsers();
    return Response({
      res,
      statusCode: 200,
      message: "Successfully get users",
      data: users,
    });
  } catch (error) {
    return Response({
      res,
      statusCode: 500,
      message: "Failed to get users",
      data: `${error.name}: ${error.message}`,
    });
  }
};
