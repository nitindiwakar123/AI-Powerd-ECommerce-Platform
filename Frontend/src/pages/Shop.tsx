import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../features/products/useProducts";
import { ProductCard } from "../components/ui/ProductCard";
import { Skeleton } from "../components/ui/Skeleton";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";

export default function Shop() {
  const [params] = useSearchParams();
  const query = params.get("q")?.toLowerCase() ?? "";

  const { data, isLoading, isError } = useProducts();
  const [category, setCategory] = useState("all");

  const products = data?.data?.products;
  const categories = useMemo(() => ["all", ...new Set(products?.map((p) => p.category) ?? [])], [products]);

  const filtered = useMemo(
    () =>
      (products ?? [])
        .filter((p) => (category === "all" ? true : p.category === category))
        .filter((p) => (query ? p.title.toLowerCase().includes(query) : true)),
    [products, category, query]
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="mb-6 text-2xl font-bold">Shop{query && ` — "${query}"`}</h1>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <Button
            key={c}
            size="sm"
            variant={category === c ? "default" : "outline"}
            onClick={() => setCategory(c)}
            className={cn("capitalize")}
          >
            {c}
          </Button>
        ))}
      </div>

      {isError && <p className="text-red-500">Couldn't load products. Is the backend running?</p>}
      {!isLoading && filtered.length === 0 && <p className="text-zinc-500">No products match.</p>}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} className="aspect-[3/4] w-full" />)
          : filtered.map((product) => <ProductCard key={product._id} product={product} />)}
      </div>
    </div>
  );
}
