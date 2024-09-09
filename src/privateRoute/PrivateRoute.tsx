"use client";

import { MainContext } from "@/contextProvider/ContextProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const context = useContext(MainContext);
  const route = useRouter();
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/auth/check-auth",
          { withCredentials: true }
        );
        if (response.data) {
          context?.setUser(response.data);
        } else {
          context?.setUser(null);
        }
      } catch (err) {
        console.error("Error fetching auth status:", err);
        context?.setUser(null);
      } finally {
        context?.setLoading(false);
      }
    };

    return checkAuthStatus();
  }, []);

  useEffect(() => {
    if (!context?.loading && !context?.user) {
      route.push("/login");
    }
  }, [context?.loading, context?.user, route]);

  if (context?.loading) {
    return <div>Loading...</div>;
  }

  if (context?.user) {
    return <>{children}</>;
  }

  return <div>Redirecting to login...</div>;
};

export default PrivateRoute;
