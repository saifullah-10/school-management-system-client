"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Rotate = () => {
    return (
        <motion.div
            animate={{ rotate: [0,360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[15%] right-[30%]"
        >
            <Image
                src="/assets/images/shape-2-3.png"
                alt=""
                width={55}
                height={55} />
        </motion.div>
    );
};

export default Rotate;