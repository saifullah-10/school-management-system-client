"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/contextProvider/ContextProvider";


const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const { user } = useAuth();

  if (!user) {
    router.push("/login");
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
