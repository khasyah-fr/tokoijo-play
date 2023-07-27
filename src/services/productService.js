import ProductRepository from "../repositories/productRepository.js";

const ProductService = {
  async getProductsByVideoId(videoId) {
    return ProductRepository.findByVideoId(videoId);
  },

  async getProductsByTitle(title) {
    const regex = new RegExp(title, "i");
    return ProductRepository.findByTitle(regex);
  },
};

export default ProductService;
