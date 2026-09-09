import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useAppSelector } from "../app/hooks";
import { useCart } from "../features/cart/useCart";
import { ProductThumb } from "../components/ui/ProductThumb";
import { Button } from "../components/ui/Button";
import { Skeleton } from "../components/ui/Skeleton";

export default function Cart() {
  const cartId = useAppSelector((s) => s.cart.cartId);
  const { data: cart, isLoading } = useCart();

  if (!cartId) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-3 px-4 py-24 text-center">
        <ShoppingBag size={32} className="text-zinc-300" />
        <p className="text-zinc-500">You don't have a cart yet. Add a product to get started.</p>
        <Link to="/shop">
          <Button variant="outline">Browse products</Button>
        </Link>
      </div>
    );
  }

  const products = cart?.products ?? [];
  const total = products.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="mb-6 text-2xl font-bold">Your Cart</h1>

      {isLoading ? (
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-24 w-full" />
          ))}
        </div>
      ) : products.length === 0 ? (
        <p className="text-zinc-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col gap-3 lg:col-span-2">
            {products.map((p) => (
              <div key={p._id} className="flex items-center gap-4 rounded-xl border border-zinc-200 p-3">
                <div className="w-16">
                  <ProductThumb title={p.title} category={p.category} />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{p.title}</p>
                  <p className="text-xs capitalize text-zinc-400">{p.category}</p>
                </div>
                <span className="font-semibold">${p.price.toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="h-fit rounded-xl border border-zinc-200 p-5">
            <h2 className="mb-4 font-semibold">Summary</h2>
            <div className="mb-4 flex justify-between text-sm text-zinc-500">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Button className="w-full" disabled>
              Checkout
            </Button>
            <p className="mt-2 text-xs text-zinc-400">Checkout isn't implemented on the backend yet.</p>
          </div>
        </div>
      )}
    </div>
  );
}
