"use client"
import Preloader from "@/app/(dashboard)/dashboard/loading";
import { useAuth } from "@/contextProvider/ContextProvider";
import axiosInstance from "@/lib/axios";
import { Course } from "@/utils/types/courses";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

import { IoIosPeople } from "react-icons/io";
import { MdLibraryBooks, MdOutlineAccessTime } from "react-icons/md";
import { PiChalkboardTeacherFill } from "react-icons/pi";



async function getData() {
  const res = await axiosInstance('/coursesCollection?limit=6');
  const data = await res.data;
  return data


}



const Courses: React.FC = () => {
  const {user} = useAuth();
  const {data,isLoading} = useQuery({
    queryKey: ['home-courses-section'],
    queryFn: getData
  })
  
  if(isLoading){
    return <div><Preloader/></div>
  }
  

  // console.log(CourseData);

  return (
    <div className="bg-[url('/assets/images/ed-bg-1.jpg')] max-w-screen-2xl w-[98%] mx-auto md:w-11/12 md:py-14">
      {/* elements */}
      <div className="w-11/12 mx-auto">
        {/* heading */}
        <div className="">
          <h1 className='font-Montserrat text-[#704fe6] bg-[#E9E2FF] border-2 w-fit px-6 py-1 rounded-[5px]'>POPULAR COURSES</h1>

          <h3 className="text-2xl md:text-5xl font-bold my-3">Starlight Courses Student <br /> Can Join With Us</h3>
        </div>

        {/* courses cards */}

        <div className="flex flex-wrap gap-5 justify-center mx-auto mt-5 lg:mt-20">
          {
            data?.map((course : Course) => (
              <Link href={`/courses/${course._id}`}
                key={course._id}>
                <div
                  className="bg-slate-200 group hover:bg-[#17254e] transition duration-300 ease-in-out hover:text-white border-dashed border-[#7151e6] border-[1px] w-[360px] sm:w-[398px] shadow-xl rounded-xl"
                >

                  <div className="relative overflow-hidden rounded-2xl w-[90%] md:w-[360px] top-2 mx-auto h-[255px]">
                    <Image
                      src={course.image}
                      alt="Course image"
                      fill={true}
                      className="absolute inset-0 rounded-2xl mx-auto transform group-hover:scale-110 transition duration-300 ease-in-out w-full h-full object-cover" />

                  </div>
                  {/* card body */}
                  <div className="p-8 mx-auto">
                    {/* title  */}
                    <h2 className="text-white text-lg font-semibold border-2 bg-[#17254e] max-w-fit p-2 rounded-[4px] relative bottom-[300px] right-10 sm:right-12"> {course.category} </h2>

                    {/* tag line */}

                    <p className="text-lg font-Montserrat font-semibold -mt-12"> {course.title} </p>

                    {/* card actions */}

                    <div className="flex justify-between bg-white text-black w-80 py-2 px-4 my-4 rounded-sm">
                      <div className="flex items-center gap-1"><MdLibraryBooks /> Lessons: {course.lessons}</div>
                      <div className="flex items-center gap-1"> <MdOutlineAccessTime /> Credit {course.credit_hours} </div>
                      <div className="flex items-center gap-1"> <IoIosPeople /> {course.enrollment} </div>
                    </div>

                    <div className="flex justify-between items-center p-2 my-3">
                      <div className="flex items-center font-Montserrat font-semibold">
                        <PiChalkboardTeacherFill size={30} /> {course.instructor}
                      </div>
                      <p className=" text-[#7151e6] group-hover:text-white font-Montserrat font-bold">{course.price} </p>
                    </div>

                    <div className="flex justify-end">
                    {
                      user ? (<Link href="/purchase">  <button className="flex items-center gap-2 text-white btn bg-[#704fe6] group-hover:bg-white group-hover:text-black py-2 px-5 rounded-full transform transition-transform  hover:scale-110 border-2 border-[#704FE6] font-semibold hover:bg-[#704FE6] hover:text-white ">Enroll
                        <span>
                          <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z" fill="currentcolor"></path>
                          </svg>
                        </span>
                      </button></Link>):(<Link href="/login">  <button className="flex items-center gap-2 text-white btn bg-[#704fe6] group-hover:bg-white group-hover:text-black py-2 px-5 rounded-full transform transition-transform  hover:scale-110 border-2 border-[#704FE6] font-semibold hover:bg-[#704FE6] hover:text-white ">Enroll
                        <span>
                          <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z" fill="currentcolor"></path>
                          </svg>
                        </span>
                      </button></Link>)
                    }
                    </div>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>

        <Link href="/courses" className="flex justify-end w-[98%] sm:w-11/12">
          <button className="flex items-center gap-2 transform transition-transform  hover:scale-110 text-[#704FE6] border-2 border-[#704FE6] font-semibold px-5 py-2 my-10 rounded-[8px] hover:bg-[#704FE6] hover:text-white ">Load more courses
            <span>
              <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z" fill="currentcolor"></path>
              </svg>
            </span>
          </button>
        </Link>

      </div>
    </div>
  );
}


export default Courses;