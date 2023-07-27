import ProductService from "../services/productService.js";
import { Response } from "../entities/response.js";

export const getProductsByVideoId = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await ProductService.getProductsByVideoId(id);

    if (!products) {
      return Response({
        res,
        statusCode: 404,
        message: "Failed to get products by video id",
        data: null,
      });
    }

    return Response({
      res,
      statusCode: 200,
      message: "Successfully get products by video id",
      data: products,
    });
  } catch (error) {
    return Response({
      res,
      statusCode: 500,
      message: "Failed to get products by video id",
      data: `${error.name}: ${error.message}`,
    });
  }
};
