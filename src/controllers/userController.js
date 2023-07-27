import { Counter } from "prom-client";

import UserService from "../services/userService.js";
import { Response } from "../entities/response.js";

const userRequestCounter = new Counter({
  name: "users_http_requests_total",
  help: "Total number of HTTP requests related to users",
  labelNames: ["method"],
});

export const getUsers = async (req, res) => {
  try {
    userRequestCounter.labels("GET").inc();

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

export const getUserById = async (req, res) => {
  try {
    userRequestCounter.labels("GET").inc();

    const { id } = req.params;
    const user = await UserService.getUserById(id);

    if (!user) {
      return Response({
        res,
        statusCode: 404,
        message: "Failed to get user by id",
        data: null,
      });
    }

    return Response({
      res,
      statusCode: 200,
      message: "Successfully get user by id",
      data: user,
    });
  } catch (error) {
    return Response({
      res,
      statusCode: 500,
      message: "Failed to get user by id",
      data: `${error.name}: ${error.message}`,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    userRequestCounter.labels("PUT").inc();

    const { id } = req.params;
    const { username } = req.body;

    const user = await UserService.getUserById(id);
    if (!user) {
      return Response({
        res,
        statusCode: 404,
        message: "Failed to get user by id",
        data: null,
      });
    }

    user.username = username;

    const updateUser = await UserService.updateUser(id, user);
    return Response({
      res,
      statusCode: 200,
      message: "Successfully update user",
      data: updateUser,
    });
  } catch (error) {
    return Response({
      res,
      statusCode: 500,
      message: "Failed to update user",
      data: `${error.name}: ${error.message}`,
    });
  }
};
