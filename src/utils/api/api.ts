import axios from "axios";

// const API_URL = "http://localhost:5000";
const API_URL = "https://school-management-system-server-lovat.vercel.app";

export const register = async (email: string, password: string) => {
  return axios.post(
    `${API_URL}/auth/register`,
    { email, password },
    { withCredentials: true }
  );
};

export const login = async (email: string, password: string) => {
  return axios.post(`${API_URL}/auth/login`, { email, password });
};

export const logout = async () => {
  localStorage.clear();
};
//update user
export const fetchProtectedData = async () => {
  const accessToken = localStorage.getItem("us");

  try {
    const response = await axios.get(`${API_URL}/auth/protected`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response) {
      return response;
    }
  } catch (error) {
    return error as Error;
  }
};
