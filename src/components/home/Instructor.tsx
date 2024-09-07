import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Instructor() {
  return (
    <div className=" mt-10">
      <div>
        <div>
          <div className="  text-center">
            <h2>About Us</h2>
            <div>
              <h2>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium eum atque ab consectetur? At ipsum doloribus,
                incidunt fugiat voluptate dolores.
              </h2>
            </div>
          </div>
        </div>

        <div>
          <Marquee pauseOnHover={true}>
            <div className=" mr-10">
              <div className=" ">
                <Image
                  src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  width={100}
                  height={100}
                  className=""
                />
              </div>
            </div>
            <div className=" mr-10">
              <h1>Instructor</h1>
            </div>
            <div className=" mr-10">
              <h1>Instructor</h1>
            </div>
            <div className=" mr-10">
              <h1>Instructor</h1>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
