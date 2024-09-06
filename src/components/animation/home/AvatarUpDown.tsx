'use client'
import { motion } from 'framer-motion'
import male from '../../../../public/assets/images/maleStudent.jpg'
import female from '../../../../public/assets/images/femaleStudent.jpg'
import Image from 'next/image';

const AvatarUpDown = () => {
    return (
            <motion.div
                className="absolute bg-white py-5 px-6 shadow-lg rounded-lg right-52 flex gap-5"
                animate={{ y: [0, -20, 0], }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut'}}>
                <h1 className="text-xl">
                    <span className="text-[#704FE6] font-semibold">200+</span> Instructor
                </h1>
                <div className="flex -space-x-2 overflow-hidden">
                    <Image placeholder='blur' src={female} alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                    <Image placeholder='blur' src={male} alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                    <Image placeholder='blur' src={female} alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                    <Image placeholder='blur' src={male} alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" />
                </div>
            </motion.div>
    );
};

export default AvatarUpDown;