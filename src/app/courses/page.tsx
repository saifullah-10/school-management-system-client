import Linear from "@/components/animation/courses/Linear";
import LinearWave from "@/components/animation/courses/LinearWave";
import Rotate from "@/components/animation/courses/Rotate";
import RotateFast from "@/components/animation/courses/RotateFast";
import Course from "@/components/courses/Course";

import Link from "next/link";

interface Course {
  _id: string;
  course_code: string;
  title: string;
  author: string;
  category: string;
  course_info: {
    overview: string;
    objectives: string[];
    modules: string[];
    prerequisites: string;
    duration: string;
    schedule: string;
    format: string;
    language: string;
    certification: string;
  };
  course_name: string;
  description: string;
  lessons: number;
  credit_hours: string;
  enrollment: number;
  instructor: string;
  price: string;
  image: string;
}

const getCourses = async () => {
  const res = await fetch('https://school-management-system-server-lovat.vercel.app/coursesCollection');
  const data = await res.json();
  return data;
}

const Courses: React.FC = async () => {
  const CourseData = await getCourses();
  console.log(CourseData);
  return (
    <>
      {/* heading */}
      <div className="bg-[url('/assets/images/breadcrumb.jpg')] py-20 relative">
        <h1 className="text-6xl text-center font-Montserrat font-bold">
          All Courses
        </h1>
        <div className="flex justify-center font-Poppins font-bold py-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="text-[#704fe6] px-2">/</span>
          <p>Courses</p>
        </div>
        <Linear />
        <LinearWave />
        <Rotate />
        <RotateFast />
      </div>

      {/* courses cards */}
      <div className="flex flex-wrap md:flex-col gap-10 justify-center my-20">
        {CourseData.map((course: Course, index: number) => (
          <Link href={`/courses/${course._id}`} key={course._id}>
            <Course keyProp={course} index={index} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Courses;
