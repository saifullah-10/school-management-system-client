"use client";
import { fetchProtectedData, logout } from "@/utils/api/api";
import { AuthContextProps, UserData } from "@/utils/types/contextApi";

import { usePathname, useRouter } from "next/navigation";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const path = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const univesalDate = async () => {
      try {
        const userData = await fetchProtectedData();
        
        if (userData === undefined) {
          logout();
        } else {
          setUser(userData.data)
     
        }
      } catch (err) {
        logout();
        console.log(err);
      }
    };
    univesalDate();
  }, [path, router]);
  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
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
