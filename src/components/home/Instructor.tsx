import Marquee from "react-fast-marquee";

import InstructorImage from "../animation/home/instructor/InstructorImage";

export default function Instructor() {
  return (
    <div className=" mt-10">
      <div>
        <div>
          <div className="  text-center">
            <h2>Instructor</h2>
            <div>
              <h2>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium eum atque ab consectetur? At ipsum doloribus,
                incidunt fugiat voluptate dolores.
              </h2>
            </div>
          </div>
        </div>

        <div
          className={`bg-[url('/assets/images/instructorGraphic.png')] h-full object-cover w-full py-10`}
        >
          <Marquee pauseOnHover={false}>
            <div className=" mr-10">
              <div className=" flex flex-col gap-5 ">
                <div className=" border-2 rounded-full p-3">
                  <InstructorImage />
                </div>
                <div className="  flex flex-col gap-2">
                  <h1 className=" text-3xl text-center">Name</h1>
                  <p>Department</p>
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
