import { cn } from "../../lib/utils";

const PALETTE = ["#4f46e5", "#0891b2", "#db2777", "#ea580c", "#65a30d", "#7c3aed"];

function hashString(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function ProductThumb({ title, link, category, className }: { title: string; link: string, category: string; className?: string }) {
  const color = PALETTE[hashString(category || title) % PALETTE.length];
  const initials = title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn("flex aspect-square w-full items-center justify-center rounded-lg", className)}
      style={{ backgroundColor: `${color}14` }}
    >
      <img src={link} alt={title} />
      {/* <span className="text-3xl font-bold" style={{ color }}>
        {initials}
      </span> */}
    </div>
  );
}
