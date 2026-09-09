import axios from "axios";

// Backend (Backend/src/app.ts) listens on port 4000 and mounts routes under /api.
// It sets an httpOnly JWT cookie on login, so every request must send credentials.
export const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000/api";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
