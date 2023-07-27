import Product from "../models/product.js";

const ProductRepository = {
  findByVideoId: (videoId) => Product.find({ video_id: videoId }),
  findByTitle: (title) => Product.find({ title: title }),
};

export default ProductRepository;
