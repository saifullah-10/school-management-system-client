'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md w-full">
        <FaExclamationTriangle className="text-6xl text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Oops! Something went wrong</h2>
        <p className="text-gray-600 mb-4">We`re sorry for the inconvenience. Please try again, or contact support if the issue persists.</p>
        <div className="flex justify-center gap-4">
          {/* Try Again Button */}
          <button onClick={reset} className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all"> Try Again </button>
          {/* Return to Home Button */}
          <button onClick={() => router.push('/')} className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-all" >Return to Home</button>
        </div>
      </div>
    </div>
  );
}
