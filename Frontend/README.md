# Shoply — Frontend

A minimal, modern storefront for the AI-Powered eCommerce backend. Built to
map 1:1 onto what the backend actually supports, and structured to be easy
to extend (checkout, wishlist, orders, etc.) as those endpoints get added.

## Stack
TypeScript · React 19 · Tailwind CSS v4 · shadcn-style primitives (Radix +
class-variance-authority, hand-rolled — no CLI lock-in) · TanStack Query ·
Redux Toolkit · React Router DOM · Axios · lucide-react · sonner (toasts)

## Structure
```
src/
  api/            axios calls per backend resource (user, products, cart, agent)
  app/            redux store + typed hooks
  features/       redux slices + react-query hooks, one folder per domain
  components/ui/  shadcn-style primitives (button, input, card, badge…)
  components/layout/  navbar, footer, app shell, AI assistant widget
  pages/          route-level screens
  routes/         react-router config
```
Each domain (`auth`, `cart`, `products`, `agent`) is self-contained under
`features/`, so adding a new resource (e.g. `orders`) means adding one new
folder rather than touching existing code.

## Getting started
```bash
cd frontend
cp .env.example .env   # point VITE_API_BASE_URL at your backend
npm install
npm run dev
```

## Features implemented (mapped to backend routes)
- **Auth** — sign up, sign in, sign out, "who am I" (`/api/user/*`)
- **Catalog** — product grid with category filter + search, product detail (`GET /api/products`)
- **Cart** — view + add items (`GET/PATCH /api/cart/:id`)
- **AI shopping assistant** — floating chat widget (`POST /api/agent/chat`)

## Known backend gaps this UI works around
- `Product` has no `image` field → color-coded placeholder thumbnails instead
- No `GET /api/products/:id` → product detail is derived client-side from the cached product list
- No cart-creation endpoint → a brand-new user has no cart id to PATCH into until one exists (cart id is persisted in Redux/localStorage once known)
- No checkout/orders — the checkout button is intentionally disabled
- Backend CORS needs `credentials: true` added for the cookie-based JWT auth to work cross-origin from this app
