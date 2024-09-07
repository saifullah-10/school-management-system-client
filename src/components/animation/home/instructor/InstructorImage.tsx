"use client";

import Image from "next/image";
interface InstructorImageProps {
  source: string;
}

export default function InstructorImage({ source }: InstructorImageProps) {
  return (
    <>
      <Image
        src={source}
        alt=""
        width={200}
        height={300}
        className="object-cover w-[200px] h-[300px] rounded-full "
      />
    </>
  );
}
