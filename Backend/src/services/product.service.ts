import Product from "../model/Product.js";

export interface SearchProductsParams {
    query: string | undefined;
    category: string | undefined;
    maxPrice: number | undefined;
    minPrice: number | undefined;
    minRating: number | undefined;
}

export const searchProducts = async (
    {
        query,
        category,
        maxPrice,
        minPrice,
        minRating
    }: SearchProductsParams) => {
    
        const filter: Record<string, unknown> = {};

        if(query) {
            filter.$or = [
                {title: {$regex: query, $options: "i"}},
                {description: {$regex: query, $options: "i"}},
            ];
        }

        if(category) {
            filter.category = {
                $regex: category,
                $options: "i"
            };
        }

        if(maxPrice !== undefined) {
            filter.price = {
                ...(filter.price as object || {}),
                $lte: maxPrice
            };
        }

        if(minPrice !== undefined) {
            filter.price = {
                ...(filter.price as object || {}),
                $gte: minPrice
            };
        }

        if(minRating !== undefined) {
            filter.rating = {
                $gte: minRating
            };
        }

        return Product.find(filter).limit(5).lean();
};