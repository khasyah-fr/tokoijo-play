import VideoService from "../services/videoService.js";
import { Response } from "../entities/response.js";

export const getVideos = async (req, res) => {
  try {
    const videos = await VideoService.getVideos();
    return Response({
      res,
      statusCode: 200,
      message: "Successfully get videos",
      data: videos,
    });
  } catch (error) {
    return Response({
      res,
      statusCode: 500,
      message: "Failed to get videos",
      data: `${error.name}: ${error.message}`,
    });
  }
};

export const getVideoById = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await VideoService.getVideoById(id);

    if (!video) {
      return Response({
        res,
        statusCode: 404,
        message: "Failed to get video by id",
        data: null,
      });
    }

    video.views = video.views + 1;

    await VideoService.updateVideo(id, { views: video.views });

    return Response({
      res,
      statusCode: 200,
      message: "Successfully get video by id",
      data: video,
    });
  } catch (error) {
    return Response({
      res,
      statusCode: 500,
      message: "Failed to get video by id",
      data: `${error.name}: ${error.message}`,
    });
  }
};

export const getVideosByTitle = async (req, res) => {
  try {
    const { title } = req.body;
    const videos = await VideoService.getVideosByTitle(title);
    return Response({
      res,
      statusCode: 200,
      message: "Successfully get videos by title",
      data: videos,
    });
  } catch (error) {
    return Response({
      res,
      statusCode: 500,
      message: "Failed to get videos by title",
      data: `${error.name}: ${error.message}`,
    });
  }
};
