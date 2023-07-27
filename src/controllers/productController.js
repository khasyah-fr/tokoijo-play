import { Counter } from "prom-client";

import ProductService from "../services/productService.js";
import { Response } from "../entities/response.js";

const productRequestCounter = new Counter({
  name: "product_http_requests_total",
  help: "Total number of HTTP requests related to products",
  labelNames: ["method"],
});

export const getProductsByVideoId = async (req, res) => {
  try {
    productRequestCounter.labels("GET").inc();

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

export const getProductsByTitle = async (req, res) => {
  try {
    productRequestCounter.labels("GET").inc();

    const { title } = req.body;
    const products = await ProductService.getProductsByTitle(title);
    return Response({
      res,
      statusCode: 200,
      message: "Successfully get products by title",
      data: products,
    });
  } catch (error) {
    return Response({
      res,
      statusCode: 500,
      message: "Failed to get products by title",
      data: `${error.name}: ${error.message}`,
    });
  }
};
