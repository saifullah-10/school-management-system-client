'use client'
import { motion } from "framer-motion";

const Dot = () => {
    return (
        <div>
            <motion.div
                className="w-6 h-6 bg-red-700 rounded-full max-sm:bottom-5 absolute right-0"
                animate={{
                    scale: [1, 1.2, 1], 
                }}
                transition={{
                    duration: 1, 
                    repeat: Infinity, // Keep repeating the animation
                    repeatType: "loop", // Make it loop smoothly
                }}
            />
            <motion.div
                className="w-6 h-6 bg-white rounded-full absolute  bottom-24"
                animate={{
                    scale: [1, 1.2, 1], 
                    x: [25, 50, 25, 0, 25],
                    y: [0, 25, 50, 25, 0], 
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity, 
                    repeatType: "loop", 
                    ease: "easeInOut", 
                }}
            />
        </div>
    );
};

export default Dot;