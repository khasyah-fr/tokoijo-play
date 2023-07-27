import Product from "../models/product.js";

const ProductRepository = {
  findProductsByVideoId: (videoId) => Product.find({ video_id: videoId }),
};

export default ProductRepository;
