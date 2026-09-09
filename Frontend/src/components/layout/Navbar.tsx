import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, User, LogOut, Store } from "lucide-react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useCurrentUser, useLogout } from "../../features/auth/useAuth";
import { useCart } from "../../features/cart/useCart";

export function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { data: user } = useCurrentUser();
  const { data: cart } = useCart();
  const logout = useLogout();
  const itemCount = cart?.products?.length ?? 0;

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(query ? `/shop?q=${encodeURIComponent(query)}` : "/shop");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2 font-semibold">
          <Store size={20} className="text-accent-500" />
          Shoply
        </Link>

        <form onSubmit={onSearch} className="hidden flex-1 max-w-md items-center gap-2 md:flex">
          <div className="relative w-full">
            <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              className="pl-9"
            />
          </div>
        </form>

        <nav className="ml-auto flex items-center gap-2">
          <Link to="/shop" className="hidden text-sm text-zinc-600 hover:text-zinc-900 sm:inline">
            Shop
          </Link>

          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart size={18} />
            </Button>
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent-500 text-[10px] font-bold text-white">
                {itemCount}
              </span>
            )}
          </Link>

          {user ? (
            <div className="flex items-center gap-1">
              <span className="hidden text-sm text-zinc-600 sm:inline">{user.name}</span>
              <Button variant="ghost" size="icon" onClick={() => logout.mutate()} aria-label="Logout">
                <LogOut size={16} />
              </Button>
            </div>
          ) : (
            <Link to="/signin">
              <Button variant="outline" size="sm">
                <User size={16} />
                Sign in
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
