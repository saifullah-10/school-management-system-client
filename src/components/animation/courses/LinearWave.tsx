"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LinearWave = () => {
    return (
        <motion.div
            animate={{ x: [-30, 20] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-[40%] left-[22%]"
        >
            <Image
                src="/assets/images/shape-2-2.png"
                alt=""
                width={85}
                height={22} />
        </motion.div>
    );
};

export default LinearWave;