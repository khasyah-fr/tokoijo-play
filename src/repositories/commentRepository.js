import Comment from "../models/comment.js";

const CommentRepository = {
  findByVideoId: (videoId) =>
    Comment.find({ video_id: videoId })
      .populate("user_id")
      .sort({ created_at: 1 }),
};

export default CommentRepository;
