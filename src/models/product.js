import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  video_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video",
    required: true,
  },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  url: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
