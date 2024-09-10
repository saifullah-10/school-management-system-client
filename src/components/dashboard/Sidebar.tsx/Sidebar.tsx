import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlineDashboard } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { logout } from "@/utils/api/api";

const Sidebar = () => {
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
      <Link href="/dashboard/attendance">
        <li
          className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${
            pathname === "/dashboard/attendance"
              ? "bg-[#704FE6] text-white"
              : ""
          }`}
        >
          <FaRegCalendarAlt />
          Attendance
        </li>
      </Link>
      <Link href="/dashboard/courses">
        <li
          className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${
            pathname === "/dashboard/courses"
              ? "bg-[#704FE6] text-white"
              : ""
          }`}
        >
          <FaRegCalendarAlt />
          Courses
        </li>
      </Link>

      <Link href="/dashboard/exam">
        <li
          className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${
            pathname === "/dashboard/exam" ? "bg-[#704FE6] text-white" : ""
          }`}
        >
          <ImProfile />
          Exam
        </li>
      </Link>
      <Link href="/dashboard/profile">
        <li
          className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${
            pathname === "/dashboard/profile" ? "bg-[#704FE6] text-white" : ""
          }`}
        >
          <ImProfile />
          Profile
        </li>
      </Link>

      <Link href="/dashboard/notice">
        <li
          className={`py-2 px-4 flex items-center gap-2 hover:text-white hover:bg-[#704FE6] border-y-2 border-white ${
            pathname === "/dashboard/notice" ? "bg-[#704FE6] text-white" : ""
          }`}
        >
          <MdNotificationsActive />
          Notice
        </li>
      </Link>

      <li
        onClick={handleLogout}
        className="py-2 px-4 hover:text-white hover:bg-[#704FE6]"
      >
        Logout
      </li>
    </ul>
  );
};

export default Sidebar;
