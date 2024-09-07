"use client";

interface MainContextType {
  value: string;
  setValue: (value: string) => void;
  //more
}

import { createContext, ReactNode, useState } from "react";

export const MainContext = createContext<MainContextType | null>(null);

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState<string>("");

  return (
    <MainContext.Provider value={{ value, setValue }}>
      {children}
    </MainContext.Provider>
  );
};

export default ContextProvider;
