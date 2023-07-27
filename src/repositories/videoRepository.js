import Video from "../models/video.js";

const VideoRepository = {
  findAll: () => Video.find().populate("user_id").sort({ created_at: 1 }),
  findById: (videoId) => Video.findById(videoId),
  findByIdAndUpdate: (videoId, videoData) =>
    Video.findByIdAndUpdate(videoId, videoData, { new: true }),
  findByTitle: (title) => Video.find({ title: title }),
};

export default VideoRepository;
