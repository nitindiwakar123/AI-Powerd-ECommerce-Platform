import { useProducts } from "../hooks/useProduct";
import type { Product } from "../types/product";

const Home = () => {
    const { data, isLoading, isError } = useProducts();
    console.log({data})
    if (isLoading) {
        return <div>Loading products...</div>;
    }

    if (isError || !data) {
        return <div>Failed to load products.</div>;
    }
    console.log(isError)
    const products: Product[] = data;
    return (
        <div>
            <h1>Products</h1>

            {products?.map((product: Product) => (
                <div key={product._id}>
                    <h2>{product.title}</h2>
                    <p>₹{product.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Home;