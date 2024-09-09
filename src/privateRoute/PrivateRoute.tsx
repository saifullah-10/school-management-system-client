"use client";

import { MainContext } from "@/contextProvider/ContextProvider";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const context = useContext(MainContext);
  const route = useRouter();

  useEffect(() => {
    if (!context?.user) {
      route.push("/login");
    }
  }, [context?.user, route]);

  if (context?.user) {
    return <>{children}</>;
  }
  return <div>loading...</div>;
};

export default PrivateRoute;
