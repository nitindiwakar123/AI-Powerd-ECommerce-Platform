import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { useProducts } from "../features/products/useProducts";
import { ProductCard, Button, Skeleton } from "../components";

export default function Home() {
  const { data, isLoading, isError } = useProducts();
  const products = data?.data?.products;
  console.log({data, products});
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1 text-xs font-medium text-accent-700">
            <Sparkles size={12} /> AI-powered shopping assistant included
          </span>
          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Shop smarter, not harder.
          </h1>
          <p className="max-w-md text-zinc-500">
            Browse the catalog or just ask the assistant in the corner to find what you need.
          </p>
          <Link to="/shop">
            <Button size="lg">
              Browse products <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Featured</h2>
          <Link to="/shop" className="text-sm font-medium text-accent-600 hover:underline">
            View all
          </Link>
        </div>

        {isError && <p className="text-red-500">Couldn't load products. Is the backend running?</p>}

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} className="aspect-[3/4] w-full" />)
            : products?.slice(0, 8).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </section>
    </div>
  );
}
