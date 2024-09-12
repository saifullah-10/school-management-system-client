// lib/axios.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://school-management-system-server-lovat.vercel.app",
});

export default axiosInstance;
