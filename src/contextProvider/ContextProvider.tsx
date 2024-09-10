"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
interface User {
  _id: string;
  authentication: object;
  email: string;
  username: string;
  token: string;
}
interface AuthContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  logout?: () => void;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const authCheck = async () => {
      // Check if token exists in cookies
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith(""));

      if (token) {
        // Fetch user data using token and set user state
        const res = await axios.get("http://localhost:5000/auth/check-auth", {
          withCredentials: true,
        });
        setUser(res.data);
        setLoading(false);
      }
    };
    authCheck();
  }, [router]);

  const logout = async () => {
    if (user) {
      const res = await axios.post(
        `http://localhost:5000/auth/logout/${user._id}`,
        {},
        { withCredentials: true }
      );
      if (res.status === 200) {
        setUser(null);
        router.push("/login");
      }
    }

    setUser(null);
    document.cookie =
      "yourTokenCookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/login");
  };
  console.log(user);
  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, setLoading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
