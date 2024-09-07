import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import UpDownDotBox from "../animation/home/whyChooseUs/UpDownDotBox";

export default function WhyChooseUs() {
  return (
    <div className="my-20 py-20 lg:flex justify-between container w-10/12 mx-auto">
      {/* left elements */}
      <div className="lg:w-1/2">
        {/* heading */}
        <h1 className='font-Montserrat font-normal text-[#704fe6] bg-[#E9E2FF] border-2 w-fit px-6 py-1 rounded-[5px]'>WHY CHOOSE US</h1>

        <h3 className="text-5xl font-bold my-3">Creating A Community Of <br /> Life Long Learners.</h3>

        <p className="text-sm font-Poppins text-gray-600 py-2">
          In our vibrant community, we believe that learning is a lifelong journey, not just a destination. We are dedicated to nurturing curiosity and fostering a passion for knowledge in every individual. By empowering minds and inspiring futures, we build bridges to new opportunities and cultivate a culture where education never ends.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">

          <div className=" bg-[#E9E2FF] px-5 py-7 rounded-[8px]">
            <div className="flex items-center gap-2 text-[#704fe6]">
              <FaCircleCheck />
              <p className="font-Montserrat text-xl font-bold text-black">World Class Trainers</p>
            </div>
            <p className="text-gray-500 font-Poppins">Our team of world-class trainers brings unparalleled expertise.</p>
          </div>
          <div className=" bg-[#E9E2FF] px-5 py-7 rounded-[8px]">
            <div className="flex items-center gap-2 text-[#704fe6]">
              <FaCircleCheck />
              <p className="font-Montserrat text-xl font-bold text-black">Easy learning</p>
            </div>
            <p className="text-gray-500 font-Poppins">Making learning simple, engaging, and accessible for everyone, every step of the way.</p>
          </div>
          <div className=" bg-[#E9E2FF] px-5 py-7 rounded-[8px]">
            <div className="flex items-center gap-2 text-[#704fe6]">
              <FaCircleCheck />
              <p className="font-Montserrat text-xl font-bold text-black">Flexible</p>
            </div>
            <p className="text-gray-500 font-Poppins">Empowering you to learn at your own pace, anytime and anywhere, with our adaptable and flexible learning.</p>
          </div>
          <div className=" bg-[#E9E2FF] px-5 py-7 rounded-[8px]">
            <div className="flex items-center gap-2 text-[#704fe6]">
              <FaCircleCheck />
              <p className="font-Montserrat text-xl font-bold text-black">Affordable prices</p>
            </div>
            <p className="text-gray-500 font-Poppins">Providing high-quality education and resources at prices that everyone can afford, making learning accessible to all..</p>
          </div>

        </div>
      </div>

      {/* images */}

      <div className="md:w-1/2 lg:w-auto relative h-fit mt-10 lg:mt-0 mx-auto">
        <Image
          src="/assets/images/choose-2-1.jpg"
          alt="community image"
          width={396}
          height={700}
          className="border-[16px] border-white" />
        <Image
          src="/assets/images/shape-1-1.png"
          alt="community image"
          width={396}
          height={500}
          className="absolute -top-8 -left-8 -z-10" />
        <Image
          src="/assets/images/shape-1-2.png"
          alt="community image"
          width={396}
          height={500}
          className="absolute -bottom-8 -right-8 -z-10" />
          
        <UpDownDotBox/>
      </div>
    </div>
  );
}
