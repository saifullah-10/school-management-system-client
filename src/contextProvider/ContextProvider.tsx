"use client";
import { createContext, ReactNode, useState } from "react";


interface MainContextType {
  value: string;
  setValue: (value: string) => void;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface User {
  _id: string;
  email: string;
  username: string;
  authentication?: object;
  sessionToken: string;
}
// function getCookie(name: string) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts?.pop()?.split(";").shift();
// }
export const MainContext = createContext<MainContextType | null>(null);

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState<string>("helloo");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  
  const contextValue: MainContextType = {
    value,
    setValue,
    user,
    setUser,
    loading,
    setLoading,
  };

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};

export default ContextProvider;
