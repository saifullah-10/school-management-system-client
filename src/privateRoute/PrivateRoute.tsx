"use client";
import { useAuth } from "@/contextProvider/ContextProvider";
import { useRouter } from "next/navigation";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();
  const route = useRouter();
  console.log(user);

  if (!user) {
    route.push("/login");
    return;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
