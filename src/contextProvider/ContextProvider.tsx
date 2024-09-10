"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,

  useState,
} from "react";


interface User {
  _id: string;
  authentication: object;
  email: string;
  username: string;
  token: string;
}
interface AuthContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  logout?: () => void;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
 
  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, setLoading }}
    >
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
