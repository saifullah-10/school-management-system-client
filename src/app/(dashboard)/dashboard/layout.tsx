"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MdNotificationsActive } from "react-icons/md";
import Image from "next/image";
import male from "../../../../public/assets/images/maleStudent.jpg";
import Sidebar from "@/components/dashboard/Sidebar.tsx/Sidebar";
import PrivateRoute from "@/privateRoute/PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {  useAuthFromContext } from "@/contextProvider/ContextProvider";

const queryClient = new QueryClient();

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } =  useAuthFromContext();
  const img = user?.photoUrl || male; // Fallback image


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <PrivateRoute>
        <div className="flex min-h-screen bg-[#F6F8FA]">
          {/* Sidebar */}
          <div
            className={`fixed z-10 top-0 left-0 h-full w-64 bg-white sm:shadow-right-lg text-black transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"
              } md:translate-x-0 md:w-64`}
            style={{ maxWidth: "100%", minWidth: "250px" }}
          >

            <Sidebar toggleSidebar={toggleSidebar}></Sidebar>
          </div>
          {/* // Content section */}
          <div
            className={`flex-grow lg:p-6 transition-all duration-300 md:ml-64  mx-auto`}
          >
            <div className=" max-w-7xl px-2 mx-auto ">
              <nav className="bg-white py-2 px-4 rounded-xl mb-10 flex justify-between items-center">
                <button
                  className="md:hidden bg-[#704FE6] rounded-[5px] text-white p-2"
                  onClick={toggleSidebar}
                >
                  {isOpen ? <FiX /> : <FiMenu />}
                </button>
                <h1 className=""></h1>
                <div className="flex flex-row-reverse items-center gap-5">
                  <MdNotificationsActive className="text-2xl" />
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <h1 className="font-semibold capitalize">{user?.username}</h1>
                      <span className="inline-flex items-center rounded-[12px] bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 capitalize">
                        {user?.role}
                      </span>
                    </div>
                    <Image
                      src={img}
                      alt={`${user?.username || "User"}'s profile`}
                      width={40}
                      height={40}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    />
                  </div>
                </div>
              </nav>
              {children}
            </div>
          </div>
        </div>
      </PrivateRoute>
    </QueryClientProvider>
  );
};

export default DashboardLayout;
