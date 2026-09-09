import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import type { Product } from "../../types/products";
import { ProductThumb } from "./ProductThumb";
import { RatingStars } from "./RatingStars";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { useAppSelector } from "../../app/hooks";
import { useAddToCart } from "../../features/cart/useCart";

export function ProductCard({ product }: { product: Product }) {
  const cartId = useAppSelector((s) => s.cart.cartId);
  const addToCart = useAddToCart(cartId);
  const outOfStock = product.stock === 0;

  const handleAdd = () => {
    addToCart.mutate(product._id, {
      onSuccess: () => toast.success(`Added "${product.title}" to cart`),
      onError: (err) => toast.error((err as Error).message),
    });
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 transition-shadow hover:shadow-md">
      <Link to={`/product/${product._id}`} className="p-3">
        <ProductThumb title={product.title} link={product.image} category={product.category} />
      </Link>

      <div className="flex flex-1 flex-col gap-2 px-4 pb-4">
        <Badge className="w-fit capitalize">{product.category}</Badge>
        <Link to={`/product/${product._id}`} className="line-clamp-2 text-sm font-medium hover:text-accent-600">
          {product.title}
        </Link>
        <RatingStars rating={product.rating} />

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-base font-semibold">${product.price.toFixed(2)}</span>
          <Button size="icon" variant={outOfStock ? "outline" : "default"} disabled={outOfStock || addToCart.isPending} onClick={handleAdd}>
            <ShoppingCart size={16} />
          </Button>
        </div>
        {outOfStock && <span className="text-xs text-zinc-400">Out of stock</span>}
      </div>
    </div>
  );
}
