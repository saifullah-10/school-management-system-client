import Image from 'next/image';
import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { MdLibraryBooks, MdOutlineAccessTime } from 'react-icons/md';
import { PiChalkboardTeacherFill } from 'react-icons/pi';

interface CourseProps {
    keyProp: number;
}

const Course: React.FC<CourseProps> = ({ keyProp }) => {
    // console.log(keyProp);
    return (
        <div className={`flex flex-col md:flex-row ${(keyProp % 2 === 0) ? 'md:flex-row-reverse' : ''} items-center bg-slate-50 group hover:bg-[#17254e] transition duration-300 ease-in-out hover:text-white border-dashed border-[#7151e6] border-[1px] w-[388px] md:w-10/12 shadow-xl rounded-xl mx-auto px-2`}>
            <div className="relative overflow-hidden rounded-2xl max-w-[360px] top-2 mx-auto h-[255px]">
                <Image
                    src="/assets/images/course-2-2.jpg"
                    alt="Course image"
                    width={360}
                    height={255}
                    className="rounded-2xl mx-auto transform group-hover:scale-110 transition duration-300 ease-in-out w-full h-full object-cover" />
            </div>

            {/* card body */}
            <div className="p-8">
                {/* title  */}
                <h2 className="text-white text-lg font-semibold border-2 bg-[#17254e] group-hover:bg-white group-hover:text-black max-w-fit p-2 rounded-[4px]">Arts & Design</h2>

                {/* tag line */}
                <p className="text-lg font-Montserrat font-semibold">Inspiring Creativity, Shaping Tomorrow by crafting Visionaries in Art and Design.</p>

                {/* card actions */}
                <div className="flex justify-between bg-white text-black w-80 md:w-full py-2 px-4 my-4 rounded-sm">
                    <div className="flex items-center"><MdLibraryBooks /> Lessons 6</div>
                    <div className="flex items-center"> <MdOutlineAccessTime /> 3h Credit</div>
                    <div className="flex items-center"> <IoIosPeople /> 100</div>
                </div>

                <div className="flex justify-between p-2 my-3">
                    <div className="flex items-center">
                        <PiChalkboardTeacherFill /> Instructor : Prof. Benjamin
                    </div>
                    <p className=" text-[#7151e6] group-hover:text-white font-Montserrat font-bold">$ 114.99 </p>
                </div>

                <div className="flex justify-end">
                    <button className="flex items-center gap-2 text-white btn bg-[#704fe6] group-hover:bg-white group-hover:text-black py-2 px-5 rounded-full transform transition-transform hover:scale-110 border-2 border-[#704FE6] font-semibold hover:bg-[#704FE6] hover:text-white ">Enroll
                        <span>
                            <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z" fill="currentcolor"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Course;