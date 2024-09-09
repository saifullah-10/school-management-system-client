'use client'
import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";

interface MainContextType {
  value: string;
  setValue: (value: string) => void;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean; // New loading state
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface User {
  _id: string;
  email: string;
  username: string;
  authentication?: object;
  sessionToken: string;
}

export const MainContext = createContext<MainContextType | null>(null);

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState<string>("helloo");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/auth/check-auth",
          { withCredentials: true }
        );
        if (response.data) {
          setUser(response.data);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Error fetching auth status:", err);
        setUser(null);
      } finally {
        setLoading(false); 
      }
    };

    checkAuthStatus();
  }, []);

  const contextValue: MainContextType = {
    value,
    setValue,
    user,
    setUser,
    loading, 
    setLoading,
  };

  return (
    <MainContext.Provider value={contextValue}>
      {children}
    </MainContext.Provider>
  );
};

export default ContextProvider;
