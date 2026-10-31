import axios from "axios";

/**
 * Axios instance configured for API calls
 * 
 * Development: Uses VITE_API_URL from .env.development (http://localhost:5000)
 * Production: Uses VITE_API_URL from .env.production or Vercel env vars
 * 
 * Key features:
 * - baseURL: Automatically prepends domain to all /api/v1/* paths
 * - withCredentials: true - Sends & receives cookies (required for JWT auth)
 * - Falls back to "/" if env var not set
 */

const API_URL = import.meta.env.VITE_API_URL || "/";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,  // CRITICAL: Allows cookies to be sent/received
});

export default axiosInstance;
