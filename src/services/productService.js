import ProductRepository from "../repositories/productRepository.js";

const ProductService = {
  async getProductsByVideoId(videoId) {
    return ProductRepository.findProductsByVideoId(videoId);
  },
};

export default ProductService;
