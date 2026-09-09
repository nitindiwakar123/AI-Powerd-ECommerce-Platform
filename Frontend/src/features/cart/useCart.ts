import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addProductToCartRequest, getCartRequest } from "../../api/cart";
import { useAppSelector } from "../../app/hooks";

export const useCart = () => {
  const cartId = useAppSelector((s) => s.cart.cartId);

  return useQuery({
    queryKey: ["cart", cartId],
    queryFn: () => getCartRequest(cartId as string),
    enabled: Boolean(cartId),
  });
};

export const useAddToCart = (cartId: string | null) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId: string) => {
      if (!cartId) {
        return Promise.reject(new Error("No cart yet. The backend has no create-cart endpoint."));
      }
      return addProductToCartRequest(cartId, productId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart", cartId] });
    },
  });
};
