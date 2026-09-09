import api from "./axios";
import type { CartDoc } from "../types/types";

// GET /api/cart/:id -> populated cart. The backend has no "get my cart" by user
// endpoint, so the frontend persists the cart id locally once known.
export const getCartRequest = async (cartId: string) => {
  const { data } = await api.get<{ success: boolean; data: CartDoc }>(`/cart/${cartId}`);
  return data.data;
};

// PATCH /api/cart/:id  body: raw product id string
export const addProductToCartRequest = async (cartId: string, productId: string) => {
  const { data } = await api.patch<{ success: boolean; message: string }>(`/cart/${cartId}`, productId, {
    headers: { "Content-Type": "application/json" },
  });
  return data;
};
