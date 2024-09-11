import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "https://school-management-system-server-lime.vercel.app";

export const register = async (email: string, password: string) => {
  return axios.post(
    `${API_URL}/auth/register`,
    { email, password },
    { withCredentials: true }
  );
};

export const login = async (email: string, password: string) => {
  return axios.post(
    `${API_URL}/auth/login`,
    { email, password },
    { withCredentials: true }
  );
};

export const logout = async () => {
  const ck = Cookies.get();
  console.log(ck);
  return axios.get(`${API_URL}/auth/logout`, { withCredentials: true });
};

export const fetchProtectedData = async () => {
  return axios.get(`${API_URL}/auth/protected`, { withCredentials: true });
};
