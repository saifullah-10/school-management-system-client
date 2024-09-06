'use client'
import { motion } from 'framer-motion'

const SuccessLeftRight = () => {
    return (
        <motion.div
            className="absolute bg-white py-5 px-6 shadow-lg rounded-lg bottom-24 -right-5 flex gap-5"
            animate={{ x: [0, 20, 0] }}            
             transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
            <h1 className="text-xl">
                <span className="text-[#704FE6] font-semibold">200+</span> Instructor
            </h1>
        </motion.div>
    );
};

export default SuccessLeftRight;