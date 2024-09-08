"use client";
import { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTeachersOpen, setIsTeachersOpen] = useState(false); // For submenu
  const pathname = usePathname() || "";

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTeachersMenu = () => {
    setIsTeachersOpen(!isTeachersOpen); // Toggle submenu open/close
  };

  return (
    <div className="flex h-screen bg-[#F6F8FA]">
      {/* Sidebar */}
      <div
        className={`fixed z-10 top-0 left-0 h-full w-64 bg-white  shadow-right-lg text-black transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}>
        <div className="p-4 flex items-center justify-between">
          <Link href={"/"} className="text-xl font-bold transform transition-transform hover:scale-110 cursor-pointer">
            Starlight <span className="text-[#704FE6]">University</span>
          </Link>
          <button onClick={toggleSidebar} className="sm:hidden border-2 border-red-600 rounded-[7px]">
            <FiX size={24} className="text-red-600" />
          </button>
        </div>
        <ul className="mt-4">

          <Link href="/dashboard" >
            <li className={`py-2 px-4 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${pathname === "/dashboard" ? "bg-[#704FE6] text-white" : ""}`}>
              Dashboard
            </li>
          </Link>

          <Link href="/dashboard/allStudent">
            <li className={`py-2 px-4 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${pathname === "/dashboard/allStudent" ? "bg-[#704FE6] text-white" : ""}`}>
              All Students
            </li>
          </Link>

          {/* Teachers Menu with Dropdown */}
          <li className="relative">
            <button
              onClick={toggleTeachersMenu}
              className={`w-full text-left py-2 px-4 hover:text-white hover:bg-[#704FE6] flex justify-between items-center ${pathname.includes("/dashboard/teacher") ? "bg-[#704FE6] text-white" : ""
                }`}>
              Teachers {isTeachersOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            {isTeachersOpen && (
              <ul className="ml-4 mt-2">
                <Link href="/dashboard/teachers/all">
                  <li
                    className={`py-2 px-4 hover:text-white hover:bg-[#704FE6] border-y-2 border-white rounded-l-xl ${pathname === "/dashboard/teachers/all" ? "bg-[#704FE6] text-white" : ""
                      }`}>
                    All Teachers
                  </li>
                </Link>
                <Link href="/dashboard/teachers/add">
                  <li
                    className={`py-2 px-4 hover:text-white hover:bg-[#704FE6] border-y-2 border-white rounded-l-xl ${pathname === "/dashboard/teachers/add" ? "bg-[#704FE6] text-white" : ""
                      }`}>
                    Add Teacher
                  </li>
                </Link>
              </ul>
            )}
          </li>

          <Link href="/dashboard/classRoutine">
            <li className={`py-2 px-4 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${pathname === "/dashboard/classRoutine" ? "bg-[#704FE6] text-white" : ""}`}>
            Class Routine
            </li>
          </Link>

          <Link href="/dashboard/profile">
            <li className={`py-2 px-4 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${pathname === "/dashboard/profile" ? "bg-[#704FE6] text-white" : ""}`}>
              Profile
            </li>
          </Link>

          <Link href="/dashboard/notice">
            <li className={`py-2 px-4 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${pathname === "/dashboard/notice" ? "bg-[#704FE6] text-white" : ""}`}>
              Notice
            </li>
          </Link>

          <Link href="/logout">
            <li className="py-2 px-4 hover:text-white hover:bg-[#704FE6]">
              Logout
            </li>
          </Link>
        </ul>
      </div>

      <div className={`flex-grow p-6 transition-all duration-300   sm:ml-64`}>
        <nav className="bg-white p-4 rounded-xl mb-10 flex justify-between items-center">
          <button
            className="sm:hidden bg-[#704FE6] rounded-[5px] text-white p-2"
            onClick={toggleSidebar}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
          Navigation Bar
        </nav>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
