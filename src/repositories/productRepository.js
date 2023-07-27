import Product from "../models/product.js";

const ProductRepository = {
  findByVideoId: (videoId) => Product.find({ video_id: videoId }),
};

export default ProductRepository;
