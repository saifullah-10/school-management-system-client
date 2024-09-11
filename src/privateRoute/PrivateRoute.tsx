"use client";

import { fetchProtectedData } from "@/utils/api/api";
import { useState } from "react";
import { useRouter } from "next/navigation";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(true);
  const protectedData = async () => {
    try {
      const res = await fetchProtectedData();
      if (res.status === 200) {
        setUser(true);
        setLoading(false);
      }
    } catch (err) {
      setUser(false);
      setLoading(false);
    }
  };
  protectedData();

  if (loading) {
    return <div>loading.....</div>;
  }

  if (!user) {
    router.push("/login");
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
