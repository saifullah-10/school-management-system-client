"use client";

interface MainContextType {
  value: string;
  setValue: (value: string) => void;
  user: object | null;
  setUser: (value: object) => void;
  //more
}

import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";

export const MainContext = createContext<MainContextType | null>(null);

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState<string>("helloo");
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/auth/check-auth",
          {
            withCredentials: true,
          }
        );
        if (response) {
          setUser(response.data);
        }
      } catch (err) {
        setUser(null);
        console.error(err);
      }
    };
    checkAuthStatus();
  }, []);

  const contextValue: MainContextType = {
    value,
    setValue,
    user,
    setUser,
  };
  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};

export default ContextProvider;
