import CommentRepository from "../repositories/commentRepository.js";

const CommentService = {
  async getCommentsByVideoId(videoId) {
    return CommentRepository.findByVideoId(videoId);
  },

  async createComment({ videoId, userId, message }) {
    return CommentRepository.create({
      videoId: videoId,
      userId: userId,
      message: message,
    });
  },
};

export default CommentService;
