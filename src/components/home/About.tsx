// import Image from "next/image";

export default function About() {
  return (
    <div className=" mb-28">
      <div className=" mb-28 text-center">
        <h2>About Us</h2>
        <div>
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium eum atque ab consectetur? At ipsum doloribus, incidunt
            fugiat voluptate dolores.
          </h2>
        </div>
      </div>
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
        <div className="w-1/2 flex-1  justify-center flex">
          <div className="grid border-2 grid-cols-4 w-[26rem] gap-5  rotate-45 h-[26rem]">
            <div className=" border-2 col-span-2"></div>
            <div className="  border-2 col-span-2"></div>
            <div className="  border-2 col-span-2"></div>
            <div className=" border-2 col-span-2"></div>
          </div>
        </div>
        <div className=" w-1/2 flex-1">
          <div>
            <h1>Title</h1>
          </div>
          <div>
            <h2>Description</h2>
          </div>
          <div>Cards</div>
          <button>More</button>
        </div>
      </div>
    </div>
  );
}
