"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const UpDownDotBox = () => {
    return (
        <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-20 -right-20 -z-10"
        >
            <Image
                src="/assets/images/shape-1-3.png"
                alt="dot png"
                width={277}
                height={271}
            />
        </motion.div>
    );
};

export default UpDownDotBox;