import male from '../../../public/assets/images/maleStudent.jpg';
import female from '../../../public/assets/images/femaleStudent.jpg';
import bg from '../../../public/assets/images/university1.jpg';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import AvatarUpDown from '../animation/home/AvatarUpDown';
import SuccessLeftRight from '../animation/home/SuccessLeftRight';
import Dot from '../animation/home/Dot';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center max-md:mt-16">
      {/* Background image with opacity */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg.src})` }}></div>
        <div className="absolute inset-0 bg-black" style={{ opacity: 0.6 }}></div>
      </div>

      {/* Content */}
      <div className="container w-11/12 mx-auto flex flex-col md:flex-row items-center relative z-10 ">
        {/* left */}
        <div className="w-full text-white">
          <h1 className='text-xl text-white bg-[#815eff7a] border-2 border-[#3d1eb1]  w-fit px-5 py-2 rounded-lg font-semibold'>Welcome to Starlight</h1>
          <h1 className='text-5xl font-bold my-5 '>Achieving Your Dreams Through Education</h1>
          <p>
            We are experienced in educational platform and skilled strategies for
            the success of your career.
          </p>
          <button className="flex  h-12 w-48 rounded-full bg-white items-center justify-between overflow-hidden mt-5 transform transition-transform hover:scale-110 hover:border-2 border-[#3d1eb1]">
            <h1 className='ml-7 font-semibold text-black '>Find Courses</h1>
            <div className="w-12 h-12 rounded-full bg-[#3d1eb1] flex items-center justify-center "><FaArrowRight /></div>
          </button>
        </div>
        {/* right */}
        <div className="relative w-full flex max-[585px]:flex-col flex-row-reverse gap-8 max-md:mt-16 ">
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
                alt="Female"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <AvatarUpDown />
          <SuccessLeftRight />
          <Dot />
        </div>
      </div>
    </div>
  );
};

export default Hero;
