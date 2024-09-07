"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function InstructorImage() {
  return (
    <>
      <Image
        src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width={200}
        height={300}
        className="object-cover w-[200px] h-[300px] rounded-full "
      />
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          fill="transparent"
          stroke="transparent"
          strokeWidth="0"
        >
          <motion.circle
            cx="0"
            cy="0"
            r="5"
            fill="yellow"
            animate={{
              pathLength: 1,
            }}
            initial={{ pathLength: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.path>
      </svg>
    </>
  );
}
