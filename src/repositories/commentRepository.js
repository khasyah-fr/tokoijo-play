import Comment from "../models/comment.js";

const CommentRepository = {
  findByVideoId: (videoId) =>
    Comment.find({ video_id: videoId })
      .populate("user_id")
      .sort({ created_at: 1 }),

  create: ({ videoId, userId, message }) =>
    Comment.create({ video_id: videoId, user_id: userId, message: message }),
};

export default CommentRepository;
