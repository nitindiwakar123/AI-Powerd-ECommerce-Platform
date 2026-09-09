import { useParams, Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { useProducts } from "../features/products/useProducts";
import { ProductThumb } from "../components/ui/ProductThumb";
import { RatingStars } from "../components/ui/RatingStars";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Skeleton } from "../components/ui/Skeleton";
import { useAppSelector } from "../app/hooks";
import { useAddToCart } from "../features/cart/useCart";

// Backend only exposes GET /api/products (no /:id route), so the single
// product is derived from the already-fetched, cached product list.
export default function ProductDetail() {
  const { id } = useParams();
  const { data: products, isLoading } = useProducts();
  const product = products?.find((p) => p._id === id);

  const cartId = useAppSelector((s) => s.cart.cartId);
  const addToCart = useAddToCart(cartId);

  if (isLoading) {
    return (
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-2">
        <Skeleton className="aspect-square w-full max-w-md" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="text-zinc-500">Product not found.</p>
        <Link to="/shop" className="text-accent-600 hover:underline">
          Back to shop
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart.mutate(product._id, {
      onSuccess: () => toast.success(`Added "${product.title}" to cart`),
      onError: (err) => toast.error((err as Error).message),
    });
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Link to="/shop" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900">
        <ArrowLeft size={14} /> Back to shop
      </Link>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="max-w-md">
          <ProductThumb title={product.title} category={product.category} />
        </div>

        <div className="flex flex-col gap-4">
          <Badge className="w-fit capitalize">{product.category}</Badge>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <RatingStars rating={product.rating} />
          <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
          <p className="text-zinc-500">{product.description}</p>
          <span className="text-sm text-zinc-400">
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </span>

          <Button
            size="lg"
            className="mt-2 w-fit"
            disabled={addToCart.isPending || product.stock === 0}
            onClick={handleAdd}
          >
            <ShoppingCart size={16} />
            {addToCart.isPending ? "Adding…" : "Add to cart"}
          </Button>
        </div>
      </div>
    </div>
  );
}
