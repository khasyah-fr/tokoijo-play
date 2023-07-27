import VideoRepository from "../repositories/videoRepository.js";

const VideoService = {
  async getVideos() {
    return VideoRepository.findAll();
  },

  async getVideoById(videoId) {
    return VideoRepository.findById(videoId);
  },

  async updateVideo(videoId, videoData) {
    return VideoRepository.findByIdAndUpdate(videoId, videoData);
  },

  async getVideosByTitle(title) {
    const regex = new RegExp(title, "i");
    return VideoRepository.findByTitle(regex);
  },
};

export default VideoService;
