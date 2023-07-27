import CommentRepository from "../repositories/commentRepository.js";

const CommentService = {
  async getCommentsByVideoId(videoId) {
    return CommentRepository.findByVideoId(videoId);
  },
};

export default CommentService;
