// import Image from "next/image";

import Image from "next/image";
// import GraduationImage from "";
export default function About() {
  return (
    <div className=" mb-28">
      {/* <div className=" mb-28 text-center">
        <h2>About Us</h2>
        <div>
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium eum atque ab consectetur? At ipsum doloribus, incidunt
            fugiat voluptate dolores.
          </h2>
        </div>
      </div> */}
      <div className=" gap-10 items-center flex justify-between">
        {/* <div className=" grid md:gap-8  lg:gap-10  grid-cols-12">
          <div className="col-span-6 relative ">
            <Image
              className=" rounded-2xl shadow-2xl "
              src="https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              layout="responsive"
              width={1920}
              height={1080}
            />
            <div className=" absolute top-0 left-0">hello</div>
          </div>
          <div className="col-span-6 relative ">
            <Image
              className=" rounded-2xl shadow-2xl "
              src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              layout="responsive"
              width={1920}
              height={1080}
            />
            <div className=" absolute top-0 left-0">hello</div>
          </div>
          <div className="col-span-6 relative ">
            <Image
              className=" rounded-2xl shadow-2xl "
              src="https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              layout="responsive"
              width={1920}
              height={1080}
            />
            <div className=" absolute top-0 left-0">hello</div>
          </div>
          <div className="col-span-6 relative ">
            <Image
              className=" rounded-2xl shadow-2xl "
              src="https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              layout="responsive"
              width={1920}
              height={1080}
            />
            <div className=" absolute top-0 left-0">hello</div>
          </div>
        </div> */}

        {/* left image */}
        <div className="w-1/2 flex-1  justify-center flex">
          <div className="grid  grid-cols-4 grid-rows-4 w-[26rem] gap-5 rotate-45   h-[26rem]">
            <div className=" shadow-xl relative rounded-xl col-span-2 overflow-hidden row-span-2">
              {" "}
              <Image
                src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="AboutImage"
                layout="fill"
                objectFit="contain"
                className=" scale-160 -rotate-45 bg-center -translate-x-3 rounded-xl translate-y-4"
              />
            </div>
            <div className=" shadow-xl relative rounded-xl col-span-2 overflow-hidden row-span-2">
              {" "}
              <Image
                src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="AboutImage"
                layout="fill"
                objectFit="contain"
                className=" scale-160 -rotate-45 bg-center -translate-x-3 rounded-xl translate-y-4"
              />
            </div>
            <div className=" shadow-xl relative rounded-xl col-span-2 overflow-hidden row-span-2">
              {" "}
              <Image
                src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="AboutImage"
                layout="fill"
                objectFit="contain"
                className=" scale-160 -rotate-45 bg-center -translate-x-3 rounded-xl translate-y-4"
              />
            </div>
            <div className=" shadow-xl relative rounded-xl col-span-2 overflow-hidden row-span-2">
              {" "}
              <Image
                src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="AboutImage"
                layout="fill"
                objectFit="contain"
                className=" scale-160 -rotate-45 bg-center -translate-x-3 rounded-xl translate-y-4"
              />
            </div>
          </div>
        </div>
        {/* left image */}
        <div className=" w-1/2 flex-1">
          <div></div>
          <div>
            <h1 className="  text-3xl">
              Empowering Education: Our University Management Solution{" "}
            </h1>
          </div>
          <div>
            <h2>
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
          <div className="flex w-full justify-between gap-5">
            <div className="flex w-1/3 items-center flex-col flex-1 bg-green-300/70 border-2 border-green-500 rounded-xl p-3 justify-between">
              <Image
                src="/assets/images/Graduation.png"
                alt="Graduation Cap"
                width={100}
                height={100}
              ></Image>
              <div>
                <h3 className="text-lg whitespace-nowrap font-semibold mb-2">
                  Seamless Student Management
                </h3>
              </div>
            </div>
            <div className="flex w-1/3 items-center flex-col flex-1 bg-green-300/70 border-2 border-green-500 rounded-xl p-3 justify-between">
              <Image
                src="/assets/images/Graduation.png"
                alt="Graduation Cap"
                width={100}
                height={100}
              ></Image>
              <div>
                <h3 className=" whitespace-nowrap font-semibold mb-2">
                  Seamless Student Management
                </h3>
              </div>
            </div>
            <div className="flex items-center w-1/3 flex-col flex-1 bg-green-300/70 border-2 border-green-500 rounded-xl p-3 justify-between">
              <Image
                src="/assets/images/Graduation.png"
                alt="Graduation Cap"
                width={100}
                height={100}
              ></Image>
              <div>
                <h3 className="text-xl whitespace-nowrap font-semibold mb-2">
                  Seamless Student Management
                </h3>
              </div>
            </div>
          </div>
          <button>More</button>
        </div>
      </div>
    </div>
  );
}
