// components/common/preloader/Preloader.tsx
'use client';
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loader from '../../../../public/assets/loader.json'


const Preloader = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 700);

    return () => clearTimeout(timer); 
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <Lottie animationData={loader} />;
    </div>
    );
  }

  return <>{children}</>; 
};

export default Preloader;
