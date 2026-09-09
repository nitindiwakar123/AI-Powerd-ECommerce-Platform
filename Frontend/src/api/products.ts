import api from "./axios";
import type { ProductResponse } from "../types/products";

// GET /api/products -> requires auth cookie, returns ALL products (no pagination,
// no filtering, no single-product endpoint on the backend today).
export const getAllProductsRequest = async () => {
  const response = await api.get<ProductResponse>("/products");
  return response.data;
};
