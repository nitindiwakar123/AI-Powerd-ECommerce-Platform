// Mirrors the Mongoose schemas in Backend/src/model

export interface Product {
  _id: string;
  title: string;
  price: number;
  rating: number;
  category: string;
  stock: number;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CartDoc {
  _id: string;
  userId: string;
  products: Product[]; // populated on GET /api/cart/:id
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthUser {
  userId: string;
  name: string;
  email: string;
}

export interface ApiSuccess<T> {
  success: true;
  data?: T;
  message?: string;
}

export interface ApiError {
  success: false;
  Error: string;
}
