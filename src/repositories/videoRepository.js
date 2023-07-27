import Video from "../models/video.js";

const VideoRepository = {
  findAll: () => Video.find().sort({ created_at: -1 }),
  findById: (videoId) => Video.findById(videoId),
  findByIdAndUpdate: (videoId, videoData) =>
    Video.findByIdAndUpdate(videoId, videoData),
};

export default VideoRepository;
