"use client";
import { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";
import { AiOutlineDashboard } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { GiTeacher } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import Image from "next/image";
import male from "../../../../public/assets/images/maleStudent.jpg";
import ContextProvider from "@/contextProvider/ContextProvider";
import PrivateRoute from "@/privateRoute/PrivateRoute";

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
    <ContextProvider>
      <PrivateRoute>
        <div className="flex min-h-screen bg-[#F6F8FA]">
          {/* Sidebar */}
          <div
            className={`fixed z-10 top-0 left-0 h-full w-64 bg-white shadow-right-lg text-black transition-transform transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 md:w-64`}
            style={{ maxWidth: "100%", minWidth: "250px" }}
          >
            <div className="p-4 flex items-center justify-between">
              <Link
                href={"/"}
                className="text-2xl  transform transition-transform hover:scale-110 cursor-pointer font-extrabold"
              >
                Starlight{" "}
                <span className="text-[#704FE6]">
                  <br />
                  University
                </span>
              </Link>
              <button
                onClick={toggleSidebar}
                className="md:hidden border-2 border-red-600 rounded-[7px]"
              >
                <FiX size={24} className="text-red-600" />
              </button>
            </div>

            <ul className="mt-4 text-[17px]">
              <Link href="/dashboard">
                <li
                  className={`py-2 flex items-center gap-2 px-4 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${
                    pathname === "/dashboard" ? "bg-[#704FE6] text-white" : ""
                  }`}
                >
                  <AiOutlineDashboard className="text-xl" />
                  Dashboard
                </li>
              </Link>

              <Link href="/dashboard/allStudent">
                <li
                  className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${
                    pathname === "/dashboard/allStudent"
                      ? "bg-[#704FE6] text-white"
                      : ""
                  }`}
                >
                  <GrGroup />
                  All Students
                </li>
              </Link>

              {/* Teachers Menu with Dropdown */}
              <li className="relative">
                <button
                  onClick={toggleTeachersMenu}
                  className={`w-full text-left py-2 px-4 hover:text-white hover:bg-[#704FE6] flex justify-between items-center ${
                    pathname.includes("/dashboard/teacher")
                      ? "bg-[#704FE6] text-white"
                      : ""
                  }`}
                >
                  <h1 className="flex text-lg items-center gap-2">
                    <GiTeacher />
                    Teachers{" "}
                  </h1>
                  {isTeachersOpen ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {isTeachersOpen && (
                  <ul className="ml-4 mt-2">
                    <Link href="/dashboard/teachers/all">
                      <li
                        className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white rounded-l-xl ${
                          pathname === "/dashboard/teachers/all"
                            ? "bg-[#704FE6] text-white"
                            : ""
                        }`}
                      >
                        <FaAngleRight />
                        All Teachers
                      </li>
                    </Link>
                    <Link href="/dashboard/teachers/add">
                      <li
                        className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white rounded-l-xl ${
                          pathname === "/dashboard/teachers/add"
                            ? "bg-[#704FE6] text-white"
                            : ""
                        }`}
                      >
                        <FaAngleRight />
                        Add Teacher
                      </li>
                    </Link>
                  </ul>
                )}
              </li>

              <Link href="/dashboard/classRoutine">
                <li
                  className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${
                    pathname === "/dashboard/classRoutine"
                      ? "bg-[#704FE6] text-white"
                      : ""
                  }`}
                >
                  <FaRegCalendarAlt />
                  Class Routine
                </li>
              </Link>

              <Link href="/dashboard/profile">
                <li
                  className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${
                    pathname === "/dashboard/profile"
                      ? "bg-[#704FE6] text-white"
                      : ""
                  }`}
                >
                  <ImProfile />
                  Profile
                </li>
              </Link>

              <Link href="/dashboard/notice">
                <li
                  className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${
                    pathname === "/dashboard/notice"
                      ? "bg-[#704FE6] text-white"
                      : ""
                  }`}
                >
                  <MdNotificationsActive />
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
          {/* // Content section */}
          <div
            className={`flex-grow p-6 transition-all duration-300 md:ml-64  mx-auto`}
          >
            <div className=" max-w-7xl mx-auto">
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
                      <h1 className="font-semibold">Stave Jobs</h1>
                      <span className="inline-flex items-center rounded-[12px] bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        Admin
                      </span>
                    </div>
                    <Image
                      placeholder="blur"
                      src={male}
                      alt=""
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
    </ContextProvider>
  );
};

export default DashboardLayout;
