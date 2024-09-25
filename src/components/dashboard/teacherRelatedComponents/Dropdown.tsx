import React, { useState } from "react";
import { FaTimes, FaCog, FaSyncAlt } from "react-icons/fa"; // Font Awesome icons for the dropdown

function Dropdown() {
    const [isOpen, setIsOpen] = useState<boolean>(false); // Explicitly typing state as boolean

    const toggleDropdown = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            {/* Dropdown Trigger Button */}
            <button
                onClick={toggleDropdown}
                className="inline-flex justify-center p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
                <span className="sr-only">Open options</span>
                {/* Dots for the dropdown */}
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v.01M12 12v.01M12 18v.01"
                    ></path>
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            <FaTimes className="mr-3 text-red-500" />
                            Close
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            <FaCog className="mr-3 text-green-500" />
                            Edit
                        </a>
                        <a
                            href="#"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            <FaSyncAlt className="mr-3 text-yellow-500" />
                            Refresh
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
