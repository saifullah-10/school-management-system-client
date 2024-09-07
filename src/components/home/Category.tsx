import React from 'react';
import { FaMountainCity } from 'react-icons/fa6';
import { GoLaw } from 'react-icons/go';
import { GrMoney } from 'react-icons/gr';
import { MdOutlineBiotech, MdOutlineBusinessCenter, MdOutlineEngineering, MdOutlineLaptopChromebook, MdPsychology } from 'react-icons/md';
import { PiMathOperations } from 'react-icons/pi';

// Define types for the category data
interface Category {
  id: number;
  icon: JSX.Element;
  subject: string;
  color: string;
  border: string;
  bg_color: string;
  border_color: string;
}

export default function Category() {
  return (
    <div className="my-10 pb-10 bg-[#FFFFFF] w-[90%] mx-auto">
      {/* categories */}
      <div className="flex justify-center">
        <h1 className="text-center text-lg font-normal text-[#704fe6] bg-[#E9E2FF] border-2 w-fit px-6 py-1 rounded-[5px]"> Categories </h1>
      </div>
      <div className="flex justify-center">
        <h1 className="text-[32px] md:text-[44px] font-bold py-1 mt-5 mb-20">Browse By Categories</h1>
      </div>

      <div className="w-full max-w-[1550px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((item) => (
          <div
            key={item.id}
            className="border rounded-2xl w-full max-w-[440px] h-[190px] flex flex-col items-center justify-center gap-2 mx-auto"
            style={{ backgroundColor: item.color, borderColor: item.border }}
          >
            <div
              className="p-4 rounded-full border border-dashed"
              style={{
                borderColor: item.border_color,
                backgroundColor: item.bg_color,
              }}
            >
              {item.icon}
            </div>
            <div className="text-[20px] font-semibold">{item.subject}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Define the categories array with appropriate typing
const categories: Category[] = [
  {
    id: 1,
    icon: <MdOutlineLaptopChromebook className="size-12 text-[#FF6881]" />,
    subject: "Computer Science",
    color: "#FEF2F4",
    border: "#FF6881",
    bg_color: "#FEDDE3",
    border_color: "#FF6881",
  },
  {
    id: 2,
    icon: <MdOutlineBusinessCenter className="size-12 text-[#24C67B]" />,
    subject: "Business Administration",
    color: "#EEFBF5",
    border: "#24C67B",
    bg_color: "#D1F5E4",
    border_color: "#24C67B",
  },
  {
    id: 3,
    icon: <GoLaw className="size-12 text-[#E8AA6C]" />,
    subject: "Law",
    color: "#FFFAEF",
    border: "#E8AA6C",
    bg_color: "#FFF3D9",
    border_color: "#E8AA6C",
  },
  {
    id: 4,
    icon: <MdOutlineEngineering className="size-12 text-[#7E4FDD]" />,
    subject: "Electrical Engineering",
    color: "#F7F3FF",
    border: "#7E4FDD",
    bg_color: "#DFD4F4",
    border_color: "#7E4FDD",
  },
  {
    id: 5,
    icon: <PiMathOperations className="size-12 text-[#BB0064]" />,
    subject: "Mathematics",
    color: "#FFF0F8",
    border: "#BB0064",
    bg_color: "#FFDAF0",
    border_color: "#BB0064",
  },
  {
    id: 6,
    icon: <GrMoney className="size-12 text-[#0011BB]" />,
    subject: "Economics",
    color: "#F3F4FE",
    border: "#0011BB",
    bg_color: "#DCDFFD",
    border_color: "#0011BB",
  },
  {
    id: 7,
    icon: <MdOutlineBiotech className="size-12 text-[#D4710E]" />,
    subject: "Biology",
    color: "#FFF7EF",
    border: "#D4710E",
    bg_color: "#FFECD9",
    border_color: "#D4710E",
  },
  {
    id: 8,
    icon: <MdPsychology className="size-12 text-[#00A9ED]" />,
    subject: "Psychology",
    color: "#F1FBFF",
    border: "#00A9ED",
    bg_color: "#DCF5FF",
    border_color: "#00A9ED",
  },
  {
    id: 9,
    icon: <FaMountainCity className="size-12 text-[#1B75E8]" />,
    subject: "Environmental Science",
    color: "#EAF6FF",
    border: "#1B75E8",
    bg_color: "#D5E9FD",
    border_color: "#1B75E8",
  },
];
