"use client";

import { MainContext } from "@/contextProvider/ContextProvider";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const context = useContext(MainContext);
  const route = useRouter();

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
