import type { ApiResponse } from "./api";

export interface Product {
    _id: string;
    title: string;
    price: number;
    rating: number;
    description: string;
    category: string;
    stock: number;
    image: string;
    createdAt: string;
    updatedAt: string;
}


export type ProductResponse = ApiResponse<{
    products: Product[]
}>