'use client'
import { motion } from 'framer-motion'

const SuccessLeftRight = () => {
    return (
        <motion.div
            className="absolute bg-white py-5 px-6 shadow-lg rounded-[8px] bottom-24 max-[585px]:hidden -right-5 flex gap-5"
            animate={{ x: [0, 20, 0] }}            
             transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
            <h1 className="text-xl">
                <span className="text-[#704FE6] font-semibold">20K+</span> Success
            </h1>
        </motion.div>
    );
};

export default SuccessLeftRight;