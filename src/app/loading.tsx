'use client';
import Lottie from "lottie-react";
import loader from '../../public/assets/allLoading.json'


const Preloader = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <Lottie animationData={loader} />
    </div>
    );
};

export default Preloader;
