import { Counter } from "prom-client";

import CommentService from "../services/commentService.js";
import { Response } from "../entities/response.js";

const commentRequestCounter = new Counter({
  name: "comments_http_requests_total",
  help: "Total number of HTTP requests related to comments",
  labelNames: ["method"],
});

export const getCommentsByVideoId = async (req, res) => {
  try {
    commentRequestCounter.labels("GET").inc();

    const { id } = req.params;
    const comments = await CommentService.getCommentsByVideoId(id);

    if (!comments) {
      return Response({
        res,
        statusCode: 404,
        message: "Failed to get comments by video id",
        data: null,
      });
    }

    return Response({
      res,
      statusCode: 200,
      message: "Successfully get comments by video id",
      data: comments,
    });
  } catch (error) {
    return Response({
      res,
      statusCode: 500,
      message: "Failed to get comments by video id",
      data: `${error.name}: ${error.message}`,
    });
  }
};

export const createComment = async (req, res) => {
  try {
    commentRequestCounter.labels("POST").inc();

    const { id } = req.params;
    const { user_id, message } = req.body;
    const comment = await CommentService.createComment({
      videoId: id,
      userId: user_id,
      message: message,
    });
    return Response({
      res,
      statusCode: 201,
      message: "Successfully create a comment",
      data: comment,
    });
  } catch (error) {
    return Response({
      res,
      statusCode: 500,
      message: "Failed to create a comment",
      data: `${error.name}: ${error.message}`,
    });
  }
};
