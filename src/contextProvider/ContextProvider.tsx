"use client";
import Preloader from "@/components/animation/preloader/Preloader";
import { fetchProtectedData, logout } from "@/utils/api/api";
import { AuthContextProps, UserData } from "@/utils/types/contextApi";

import { usePathname, useRouter } from "next/navigation";

import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
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

        if (userData === null) {
          logout();
          setUser(null);
        } else {
          setUser(userData.data);
        }
      } catch (err) {
        setLoading(false);
        logout();
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    setLoading(true);
    univesalDate();
  }, [path, router]);

  if (loading) {
    return      <div> <Preloader/></div>;
  }
  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context ){
    return {
      user: null,

      setUser: ()=>(null)
    };
   
  }
  return context;
};
