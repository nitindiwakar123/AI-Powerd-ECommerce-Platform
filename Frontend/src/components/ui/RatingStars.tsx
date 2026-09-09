import { Star } from "lucide-react";
import { cn } from "../../lib/utils";

export function RatingStars({ rating, className }: { rating: number; className?: string }) {
  const rounded = Math.round(rating);
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className={i < rounded ? "fill-amber-400 text-amber-400" : "text-zinc-200"} />
      ))}
      <span className="ml-1 text-xs text-zinc-500">{rating.toFixed(1)}</span>
    </div>
  );
}
