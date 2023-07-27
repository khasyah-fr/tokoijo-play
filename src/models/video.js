import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: { type: String, required: true },
  thumbnail: { type: String },
  url: { type: String, required: true },
  views: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
});

videoSchema.index({ title: "text" });

const Video = mongoose.model("Video", videoSchema);

export default Video;
