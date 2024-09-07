'use client'
import { motion } from "framer-motion";

const Dot = () => {
    return (
        <div>
            <motion.div
                className="w-6 h-6 bg-red-900 rounded-full absolute right-0"
                animate={{
                    scale: [1, 1.2, 1], // Pulsing effect
                    // opacity: [1, 0.6, 1] // Opacity effect
                }}
                transition={{
                    duration: 1, // Adjust the speed of the pulse
                    repeat: Infinity, // Keep repeating the animation
                    repeatType: "loop", // Make it loop smoothly
                }}
            />
        </div>
    );
};

export default Dot;