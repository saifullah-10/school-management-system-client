import axios from "axios";

// const API_URL = "http://localhost:5000";
const API_URL = "https://school-management-system-server-lovat.vercel.app";

export const registerUser = async (
  username: string,
  email: string,
  password: string,
  photourl: string,
  role: string
) => {
  return axios.post(
    `${API_URL}/auth/register`,
    { username, email, password, photourl, role },
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

  const response = await axios.get(`${API_URL}/auth/protected`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (response) {
    return response;
  }
};
