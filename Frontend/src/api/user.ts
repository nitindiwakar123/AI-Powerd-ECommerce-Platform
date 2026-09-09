import api from "./axios";
import type { AuthResponse, AuthResponseUser } from "../types/auth";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

// POST /api/user/login -> sets httpOnly cookie, no user object returned
export const loginRequest = async (payload: LoginPayload) => {
  const response = await api.post<AuthResponse>("/user/login", payload);
  return response.data;
};

// POST /api/user/register
export const registerRequest = async (payload: RegisterPayload) => {
  const response = await api.post<AuthResponse>("/user/register", payload);
  return response.data;
};

// POST /api/user/logout
export const logoutRequest = async () => {
  const response = await api.post<AuthResponse>("/user/logout");
  return response.data;
};

// GET /api/user -> requires auth cookie, returns current user from JWT payload
export const getCurrentUserRequest = async () => {
  const response = await api.get<AuthResponseUser>("/user");
  return response.data;
};
