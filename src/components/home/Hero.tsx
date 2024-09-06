
import male from '../../../public/assets/images/maleStudent.jpg'
import female from '../../../public/assets/images/femaleStudent.jpg'
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import AvatarUpDown from '../animation/home/AvatarUpDown';
import SuccessLeftRight from '../animation/home/SuccessLeftRight';
const Hero = () => {
  return (
    <div className="container w-11/12 mx-auto min-h-screen flex flex-col md:flex-row  items-center  max-md:mt-16">
      {/* left */}
      <div className="w-full">
        <h1 className='text-xl text-[#815eff] bg-[#8266e762] border-2 w-fit px-5 py-2 rounded-lg font-semibold'>Welcome to Starlight </h1>
        <h1 className='text-5xl font-bold my-5'>Achieving Your Dreams Through Education</h1>

        <p>
          We are experienced in educational platform and skilled strategies for
          the success of your career.
        </p>
        <button className="flex text-white h-12 w-48 rounded-full bg-[#17254E] items-center justify-between overflow-hidden mt-5">
          <h1 className='ml-7 font-semibold'>Find Courses</h1>
          <div className="w-12 h-12 rounded-full bg-[#1F3061] flex items-center justify-center "><FaArrowRight /></div>
        </button>
      </div>
      {/* right */}

      <div className="relative w-full flex max-[585px]:flex-col    gap-8 max-md:mt-16 ">
        {/* male student */}
        <div className='border-2 border-red-700 h-[450px] w-[250px] rounded-full mx-auto'>
          <div className='relative h-[450px] w-[250px] border-2 rounded-full overflow-hidden bottom-2 left-2'>
            <Image
              placeholder="blur"
              src={male}
              alt="Male"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        {/* female student */}
        <div className='border-2 border-red-700 h-[450px] w-[250px] rounded-full min-[585px]:mt-32 mx-auto'>
          <div className='relative h-[450px] w-[250px] border-2 rounded-full overflow-hidden bottom-2 left-2'>
            <Image
              placeholder="blur"
              src={female}
              alt="Male"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <AvatarUpDown></AvatarUpDown>
        <SuccessLeftRight></SuccessLeftRight>
      </div>
    </div>
  );
};

export default Hero;
