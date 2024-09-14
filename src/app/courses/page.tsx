import Linear from "@/components/animation/courses/Linear";
import LinearWave from "@/components/animation/courses/LinearWave";
import Rotate from "@/components/animation/courses/Rotate";
import RotateFast from "@/components/animation/courses/RotateFast";
import Course from "@/components/courses/Course";

import Link from "next/link";

const Courses: React.FC = () => {
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
        {[...Array(6)].map((_, index) => (
          <Link href={`/courses/${index}`} key={index}>
            <Course keyProp={index} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Courses;
