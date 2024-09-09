"use client";

interface MainContextType {
  value: string;
  setValue: (value: string) => void;

  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  //more
}
interface User {
  _id: string;
  email: string;
  username: string;
  authentication?: object; // Define this more specifically if possible
  sessionToken: string;
}

import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";

export const MainContext = createContext<MainContextType | null>(null);

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState<string>("helloo");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/auth/check-auth",
          {
            withCredentials: true,
          }
        );

        if (response.data) {
          setUser(response.data);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Error fetching auth status:", err);
        setUser(null);
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
