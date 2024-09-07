import Image from "next/image";
export default function About() {
  return (
    <div className=" mb-28">
      <div className=" gap-20 lg:gap-10 items-center flex flex-col-reverse  lg:flex-row justify-between">
        {/* left image */}
        <div className="lg:w-1/2 w-full flex-1  justify-center flex">
          <div className="grid  grid-cols-4 grid-rows-4 w-[16rem] lg:w-[26rem] gap-1 lg:gap-5 rotate-45  h-[16rem] lg:h-[26rem]">
            <div className=" shadow-xl relative rounded-xl col-span-2 overflow-hidden row-span-2">
              {" "}
              <Image
                src="https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="AboutImage"
                layout="fill"
                objectFit="contain"
                className=" scale-210 -rotate-45 bg-center -translate-x-2 lg:-translate-x-3 rounded-xl translate-y-4"
              />
            </div>
            <div className=" shadow-xl relative rounded-xl col-span-2 overflow-hidden row-span-2">
              {" "}
              <Image
                src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="AboutImage"
                layout="fill"
                objectFit="contain"
                className=" scale-210 -rotate-45 bg-center -translate-x-2 lg:-translate-x-0 rounded-xl translate-y-0"
              />
            </div>
            <div className=" shadow-xl relative rounded-xl col-span-2 overflow-hidden row-span-2">
              {" "}
              <Image
                src="https://images.pexels.com/photos/27495483/pexels-photo-27495483/free-photo-of-laboratory-check.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="AboutImage"
                layout="fill"
                objectFit="contain"
                className=" scale-210 -rotate-45 bg-center -translate-x-2 lg:-translate-x-3 rounded-xl translate-y-4"
              />
            </div>
            <div className=" shadow-xl relative rounded-xl col-span-2 overflow-hidden row-span-2">
              {" "}
              <Image
                src="https://images.pexels.com/photos/18471533/pexels-photo-18471533/free-photo-of-a-laboratory-with-computers-and-monitors-on-the-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="AboutImage"
                layout="fill"
                objectFit="contain"
                className=" scale-210 -rotate-45 bg-center -translate-x-2 lg:-translate-x-3 rounded-xl translate-y-4"
              />
            </div>
          </div>
        </div>
        {/* left image */}
        <div className=" w-full lg:w-1/2 flex-1 flex flex-col gap-5">
          <div>
            <h1 className="text-lg  font-semibold text-[#704fe6] bg-[#E9E2FF] border-2 w-fit px-6 py-1 rounded-[5px]">
              About Us
            </h1>
          </div>
          <div>
            <h1 className="  text-3xl">
              Empowering Education: Our University Management Solution{" "}
            </h1>
          </div>
          <div>
            <h2 className=" text-[#72716d]">
              Discover a new era of academic excellence with our University
              Management website. Designed to streamline every aspect of
              university administration, from admissions to graduation, our
              platform offers intuitive tools for students, faculty, and staff.
              With features like real-time scheduling, course management, and
              comprehensive student records, we ensure that the educational
              journey is seamless and efficient. Our commitment is to provide a
              robust solution that enhances communication, fosters engagement,
              and supports the unique needs of your institution. Join us in
              shaping the future of education with a management system built for
              excellence.
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row w-full justify-between gap-5">
            <div className="flex w-full lg:w-1/3 items-center flex-col flex-1 bg-green-300/70 border-2 border-green-500 rounded-xl p-3 justify-between">
              <Image
                src="/assets/images/Graduation.png"
                alt="Graduation Cap"
                width={50}
                height={50}
              ></Image>
              <div>
                <h3 className="text-center text-[#373737] font-semibold mb-2">
                  Seamless Student Management
                </h3>
              </div>
            </div>
            <div className="flex w-full lg:w-1/3 items-center flex-col flex-1 bg-blue-300/70 border-2 border-blue-500 rounded-xl p-3 justify-between">
              <Image
                src="/assets/images/Schedule.png"
                alt="Graduation Cap"
                width={50}
                height={50}
              ></Image>
              <div>
                <h3 className="text-center text-[#373737] font-semibold mb-2">
                  Advanced Course Scheduling
                </h3>
              </div>
            </div>
            <div className="flex items-center w-full lg:w-1/3 flex-col flex-1 bg-yellow-300/70 border-2 border-yellow-500 rounded-xl p-3 justify-between">
              <Image
                src="/assets/images/Collaboration.png"
                alt="Graduation Cap"
                width={50}
                height={50}
              ></Image>
              <div>
                <h3 className="text-center text-[#373737] font-semibold mb-2">
                  Effective Faculty Collaboration
                </h3>
              </div>
            </div>
          </div>

          <div className=" flex justify-end">
            <button className="flex items-center gap-2 text-white btn bg-[#704fe6] group-hover:bg-white group-hover:text-black py-2 px-5 rounded-full">
              More
              <span>
                <svg
                  width="21"
                  height="8"
                  viewBox="0 0 21 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z"
                    fill="currentcolor"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
