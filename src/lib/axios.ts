// lib/axios.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://school-management-system-server-lime.vercel.app/api'
});

export default axiosInstance;
