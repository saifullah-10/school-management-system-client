"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/contextProvider/ContextProvider";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const auth = useAuth();
  if (auth === null) {
    return <div>loading</div>;
  }
  const { user } = auth;

  if (!user) {
    router.push("/login");
  }
  else if (user.role === "student" && !user.status){
    router.push("/courses");

  }
  return <div>{children}</div>;
};

export default PrivateRoute;
