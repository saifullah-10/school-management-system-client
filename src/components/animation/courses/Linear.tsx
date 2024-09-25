"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Linear = () => {
    return (
        <motion.div
            animate={{
                x: [0, -50, -50, 0],
                y: [0, 0, -40, 0]
            }}
            transition={{
                duration: 11,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.2, 0.5, 1]
            }}
            className="absolute top-[20%] left-[2%] hidden md:block"
        >
            <Image
                src="/assets/images/shape-2-1.png"
                alt=""
                width={77}
                height={85} />
        </motion.div>
    );
};

export default Linear;