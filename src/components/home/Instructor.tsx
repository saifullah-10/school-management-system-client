import Marquee from "react-fast-marquee";

import InstructorImage from "../animation/home/instructor/InstructorImage";

export default function Instructor() {
  return (
    <div className=" mt-10">
      <div>
        <div>
          <div className=" my-5">
            <div className=" flex justify-center mb-5">
              <h1 className="text-lg  font-semibold text-[#704fe6] bg-[#E9E2FF] border-2 w-fit px-6 py-1 rounded-[5px]">
                Our Instructor
              </h1>
            </div>
            <div className=" w-full lg:w-1/2 mx-auto text-center">
              <h2>
                Our Instructor section showcases a dedicated team of experienced
                educators committed to fostering academic excellence. Here,
                students can explore profiles, view qualifications, and connect
                with instructors who are passionate about guiding their learning
                journey.
              </h2>
            </div>
          </div>
        </div>

        <div
          className={`bg-[url('/assets/images/instructorGraphic.png')] h-full object-cover w-full py-10`}
        >
          <Marquee pauseOnHover={true}>
            <div className=" flex gap-10 mr-10">
              <div className=" flex flex-col items-center gap-3 ">
                <div className=" border-2 rounded-full p-3 w-[200px] ">
                  <InstructorImage
                    source={
                      "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                  />
                </div>
                <div className="  flex flex-col gap-1">
                  <h1 className=" text-3xl text-center">
                    Prof. William Martinez
                  </h1>
                  <p className=" text-center text-lg">Computer Science</p>
                </div>
              </div>
              <div className=" flex flex-col items-center gap-3 ">
                <div className=" border-2 rounded-full p-3 w-[200px] ">
                  <InstructorImage
                    source={
                      "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                  />
                </div>
                <div className="  flex flex-col gap-1">
                  <h1 className=" text-3xl text-center">Dr. Emily Carter</h1>
                  <p className=" text-center text-lg">Mathematics</p>
                </div>
              </div>
              <div className=" flex flex-col items-center gap-3 ">
                <div className=" border-2 rounded-full p-3 w-[200px] ">
                  <InstructorImage
                    source={
                      "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                  />
                </div>
                <div className="  flex flex-col gap-1">
                  <h1 className=" text-3xl text-center">
                    Prof. James Anderson
                  </h1>
                  <p className=" text-center text-lg">Physics</p>
                </div>
              </div>
              <div className=" flex flex-col items-center gap-3 ">
                <div className=" border-2 rounded-full p-3 w-[200px] ">
                  <InstructorImage
                    source={
                      "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                  />
                </div>
                <div className="  flex flex-col gap-1">
                  <h1 className=" text-3xl text-center">Dr. Olivia Johnson</h1>
                  <p className=" text-center text-lg">Chemistry</p>
                </div>
              </div>
              <div className=" flex flex-col items-center gap-3 ">
                <div className=" border-2 rounded-full p-3 w-[200px] ">
                  <InstructorImage
                    source={
                      "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                  />
                </div>
                <div className="  flex flex-col gap-1">
                  <h1 className=" text-3xl text-center">Dr. Sophia Davis</h1>
                  <p className=" text-center text-lg">English Literature</p>
                </div>
              </div>
              <div className=" flex flex-col items-center gap-3 ">
                <div className=" border-2 rounded-full p-3 w-[200px] ">
                  <InstructorImage
                    source={
                      "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                  />
                </div>
                <div className="  flex flex-col gap-1">
                  <h1 className=" text-3xl text-center">Prof. Michael Brown</h1>
                  <p className=" text-center text-lg"> History</p>
                </div>
              </div>
              <div className=" flex flex-col items-center gap-3 ">
                <div className=" border-2 rounded-full p-3 w-[200px] ">
                  <InstructorImage
                    source={
                      "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                  />
                </div>
                <div className="  flex flex-col gap-1">
                  <h1 className=" text-3xl text-center">Dr. Ava Wilson</h1>
                  <p className=" text-center text-lg"> Biology</p>
                </div>
              </div>
              <div className=" flex flex-col items-center gap-3 ">
                <div className=" border-2 rounded-full p-3 w-[200px] ">
                  <InstructorImage
                    source={
                      "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                  />
                </div>
                <div className="  flex flex-col gap-1">
                  <h1 className=" text-3xl text-center">Prof. Daniel Garcia</h1>
                  <p className=" text-center text-lg">Economics</p>
                </div>
              </div>
              <div className=" flex flex-col items-center gap-3 ">
                <div className=" border-2 rounded-full p-3 w-[200px] ">
                  <InstructorImage
                    source={
                      "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                  />
                </div>
                <div className="  flex flex-col gap-1">
                  <h1 className=" text-3xl text-center">
                    Dr. Isabella Rodriguez
                  </h1>
                  <p className=" text-center text-lg">Psychology</p>
                </div>
              </div>
              <div className=" flex flex-col items-center gap-3 ">
                <div className=" border-2 rounded-full p-3 w-[200px] ">
                  <InstructorImage
                    source={
                      "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                  />
                </div>
                <div className="  flex flex-col gap-1">
                  <h1 className=" text-3xl text-center">Prof. Benjamin Lee</h1>
                  <p className=" text-center text-lg"> Political Science</p>
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
