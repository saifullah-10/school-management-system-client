import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiLogOut, FiX } from "react-icons/fi";
import { AiOutlineDashboard } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { FaAngleRight, FaListCheck } from "react-icons/fa6";
import { FaBook, FaClipboardList, FaRegCalendarAlt } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { logout } from "@/utils/api/api";

// Define the type for the props
interface SidebarProps {
  toggleSidebar: () => void; // Explicit type for toggleSidebar prop
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const res = await logout();
      if (res.status === 200) {
        router.push("/login");
      } else {
        console.log("try again");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [isTeachersOpen, setIsTeachersOpen] = useState(false); // For submenu
  const pathname = usePathname() || "";

  const toggleTeachersMenu = () => {
    setIsTeachersOpen(!isTeachersOpen); // Toggle submenu open/close
  };


  return (
    <>
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
            className={`py-2 flex items-center gap-2 px-4 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${pathname === "/dashboard" ? "bg-[#704FE6] text-white" : ""
              }`}
          >
            <AiOutlineDashboard className="text-xl" />
            Dashboard
          </li>
        </Link>
        <Link href="/dashboard/allStudent">
          <li
            className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${pathname === "/dashboard/allStudent"
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
            className={`w-full text-left py-2 px-4 hover:text-white hover:bg-[#704FE6] flex justify-between items-center ${pathname.includes("/dashboard/teacher")
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
                  className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white rounded-l-xl ${pathname === "/dashboard/teachers/all"
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
                  className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white rounded-l-xl ${pathname === "/dashboard/teachers/add"
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
            className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${pathname === "/dashboard/classRoutine"
                ? "bg-[#704FE6] text-white"
                : ""
              }`}
          >
            <FaRegCalendarAlt />
            Class Routine
          </li>
        </Link>
        <Link href="/dashboard/attendance">
          <li
            className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${pathname === "/dashboard/attendance"
                ? "bg-[#704FE6] text-white"
                : ""
              }`}
          >
            <FaListCheck />
            Attendance
          </li>
        </Link>
        <Link href="/dashboard/courses">
          <li
            className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${pathname === "/dashboard/courses"
                ? "bg-[#704FE6] text-white"
                : ""
              }`}
          >
            <FaBook />
            Courses
          </li>
        </Link>

        <Link href="/dashboard/exam">
          <li
            className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${pathname === "/dashboard/exam" ? "bg-[#704FE6] text-white" : ""
              }`}
          >
            <FaClipboardList />
            Exam
          </li>
        </Link>
        <Link href="/dashboard/profile">
          <li
            className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${pathname === "/dashboard/profile" ? "bg-[#704FE6] text-white" : ""
              }`}
          >
            <ImProfile />
            Profile
          </li>
        </Link>

        <Link href="/dashboard/notice">
          <li
            className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${pathname === "/dashboard/notice" ? "bg-[#704FE6] text-white" : ""
              }`}
          >
            <MdNotificationsActive />
            Notice
          </li>
        </Link>
        <div className="border-b-2 mx-3 border-black my-2"></div>
        <li
          onClick={handleLogout}
          className="py-2 px-4 hover:text-white hover:bg-[#704FE6] flex items-center font-bold text-lg gap-2"
        ><FiLogOut />
          Logout
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
