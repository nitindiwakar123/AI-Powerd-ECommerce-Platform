import { useQuery } from "@tanstack/react-query";
import { getAllProductsRequest } from "../../api/products";

export const useProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: getAllProductsRequest,
    staleTime: 60_000,
  });
