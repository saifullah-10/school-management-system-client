"use client";

import { useAuth } from "@/contextProvider/ContextProvider";
import { logout } from "@/utils/api/api";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";



const Navbar = () => {
  const navigate = usePathname();
  const [open, setOpen] = useState<boolean>(false)
  const router = useRouter()
  const auth = useAuth()
  const { user, setUser } = auth;

  const Links = (
    <>
      <Link
        href="/"
        className={`hover:text-[#704FE6]  ${navigate === "/" ? "nav-active" : ""
          }`}
      >
        Home
      </Link>
      <Link
        href="/aboutUs"
        className={`hover:text-[#704FE6]  ${navigate === "/aboutUs" ? "nav-active" : ""
          }`}
      >
        About Us
      </Link>
      <Link
        href="/courses"
        className={`hover:text-[#704FE6]  ${navigate === "/courses" ? "nav-active" : ""
          }`}
      >
        Courses
      </Link>
      <Link
        href="/contact"
        className={`hover:text-[#704FE6]  ${navigate === "/contact" ? "nav-active" : ""
          }`}
      >
        Contact
      </Link>
      {
        user &&
        <Link
          href="/dashboard"
          className={`hover:text-[#704FE6]  ${navigate === "/contact" ? "nav-active" : ""
            }`}>
          Dashboard
        </Link>
      }
    </>
  );

  const [menu, setMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenu(false);
    }
  };

  useEffect(() => {
    // Add event listener to close menu when clicking outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (navigate?.includes("dashboard")) {
    return;
  }



  const handleLogout = () => {
    logout();
    setUser(null);
    router.push("/login");
  };
  return (
    <>
      <div
        className={`border-b-[1px] border-[#704FE6] sticky top-0 z-50 bg-white  ${navigate === "/login" || navigate === "/register" ? "hidden" : ""
          }`}
      >
        <nav className="max-w-screen-2xl md:w-11/12  flex justify-between items-center mx-auto py-4 px-2">
          {/* Mobile menu */}
          <div className="min-[850px]:hidden " onClick={() => setMenu(!menu)}>
            {menu ? (
              <IoClose className="text-3xl text-[#f51e1e]" />
            ) : (
              <IoMenu className="text-3xl text-[#704FE6]" />
            )}
          </div>

          {/* Left */}
          <Link href={"/"} className=" font-bold flex  items-center">
            <h1 className=" text-xl min-[360px]:text-2xl transform transition-transform  hover:scale-110 cursor-pointer">
              Starlight <span className="text-[#704FE6]">University</span>
            </h1>
          </Link>
          {/* Center */}
          <div className=" absolute left-1/2 -translate-x-1/2 flex gap-6 text-base text-center font-medium max-[850px]:hidden">
            {Links}
          </div>
          {/* Right */}


          {user ? (<div onClick={() => setOpen(!open)} className=" flex items-center gap-2">
            <Image className=" rounded-full" src={user?.photoUrl} width={40} height={40} alt="navbar-logo" />
            <span className=" px-2 bg-blue-200 border-2 border-blue-500 rounded-full">{user?.username}</span>
          </div>) : (<Link href="/login">
            <button className="transform transition-transform  hover:scale-110 text-[#704FE6] border-2 border-[#704FE6] font-semibold px-5 py-2 rounded-[8px] hover:bg-[#704FE6] hover:text-white ">
              Login
            </button>
          </Link>)}
        </nav>
        {/* Mobile nav */}
        <div
          ref={menuRef}
          className={`flex flex-col nav-link absolute bg-white text-center space-y-4 w-full  border-y-2  p-5 min-[850px]:hidden ${menu ? "" : "hidden"
            }`}
        >
          {Links}
        </div>
      </div>
      {/* nav profile */}
      {
        open ? (<div className=" absolute ">
          <div className="  transition-transform p-3 fixed top-20  flex flex-col gap-3 z-[99] right-20 rounded-xl py-5 bg-white"> <Link href="/dashboard"><div onClick={() => setOpen(false)} className="px-2 cursor-pointer border-b-2 border-blue-500"><p>Dashboard</p></div></Link>
            <div onClick={() => { handleLogout(), setOpen(false) }} className="px-2 cursor-pointer border-b-2 border-blue-500"><p>Logout</p></div>
          </div>

        </div>) : ''
      }
    </>
  );
};

export default Navbar;
