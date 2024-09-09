"use client";

import { MainContext } from "@/contextProvider/ContextProvider";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const context = useContext(MainContext);
  const route = useRouter();
  const navigation = usePathname();

  useEffect(() => {
    if (!context?.user) {
      route.push("/login");
    }
  }, [context?.user, route]);

  if (context?.user) {
    if (navigation?.includes("login")) {
      route.push("/");
    }
    return <>{children}</>;
  }
  return <div>loading...</div>;
};

export default PrivateRoute;
