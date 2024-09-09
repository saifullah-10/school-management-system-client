"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const RotateFast = () => {
    return (
        <motion.div
            animate={{ rotate: [0,360] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[15%] right-[3%] hidden md:block"
        >
            <Image
                src="/assets/images/shape-1-4.png"
                alt=""
                width={65}
                height={65} />
        </motion.div>
    );
};

export default RotateFast;