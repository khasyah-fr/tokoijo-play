import ProductRepository from "../repositories/productRepository.js";

const ProductService = {
  async getProductsByVideoId(videoId) {
    return ProductRepository.findByVideoId(videoId);
  },
};

export default ProductService;
