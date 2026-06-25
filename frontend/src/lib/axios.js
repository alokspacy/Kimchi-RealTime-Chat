import axios from "axios";

const rawBackendUrl = import.meta.env.VITE_BACKEND_URL || (import.meta.env.MODE === "development" ? "http://localhost:3000" : "");
const BACKEND_URL = rawBackendUrl.replace(/\/$/, "");

export const axiosInstance = axios.create({
  baseURL: `${BACKEND_URL}/api`,
  withCredentials: true,
});
