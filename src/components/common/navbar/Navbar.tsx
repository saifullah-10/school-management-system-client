'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
    const navigate = usePathname()
    console.log(navigate);
    
    const Links = <>
        <Link href="/" className={`hover:text-[#1E99F5] ${navigate === '/' ? 'active' : ''}`}>Home</Link>
        <Link href="/aboutUs" className={`hover:text-[#1E99F5] ${navigate === '/aboutUs' ? 'active' : ''}`}>About Us</Link>
        <Link href="/courses" className={`hover:text-[#1E99F5] ${navigate === '/courses' ? 'active' : ''}`}>Courses</Link>
        <Link href="/contact" className={`hover:text-[#1E99F5] ${navigate === '/contact' ? 'active' : ''}`}>Contact</Link>
    </>

    const [menu, setMenu] = useState(false)


    return (
        <div className="border-b-[1px]">
            <nav className="flex justify-between items-center min-[850px]:w-11/12 max-w-screen-2xl mx-auto py-4 px-8  ">
                {/* Mobile menu */}
                <div className="md:hidden " onClick={() => setMenu(!menu)}>
                    {menu ? <IoClose className="text-3xl text-[#f51e1e]" /> :
                        <IoMenu className="text-3xl text-[#1E99F5]" />}
                </div>

                {/* Left */}
                <Link href={'/'} className="font-bold w-full flex gap-2 items-center">
                    <h1 className="text-2xl">Starlight <span className="text-[#704FE6]">University</span></h1>
                </Link>
                {/* Center */}
                <div className=" w-full space-x-3 text-base text-center font-medium max-md:hidden">
                    {Links}
                </div>
                {/* Right */}
                <div className=" w-full flex justify-end space-x-6 items-center">
                    <Link href="/cart" className="  hover:text-[#1E99F5] text-3xl relative">
                        <HiOutlineShoppingBag />
                        <h1 className="text-sm absolute -right-1 top-4 bg-black text-white rounded-full w-5 h-5 text-center">2</h1>
                    </Link>
                    <Link href="/login" className=" hover:text-[#1E99F5]">Login</Link>
                </div>
            </nav>
            {/* Mobile nav */}
            <div className={`flex flex-col nav-link absolute border-2 border-l-0 rounded-br-xl p-5 md:hidden ${menu ? '' : 'hidden'}`}>
                {Links}
            </div>
        </div>
    );
};

export default Navbar;