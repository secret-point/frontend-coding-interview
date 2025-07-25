import axios from "axios";

const pexelsApi = axios.create({
  baseURL: import.meta.env.VITE_PEXELS_BASE_URL || "https://api.pexels.com/v1",
  timeout: 10000
});

pexelsApi.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_PEXELS_API_KEY as string;
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default pexelsApi;