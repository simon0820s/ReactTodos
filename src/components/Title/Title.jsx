import { motion } from "framer-motion";
import React from "react";
const Title = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration:2,delay:0.5}}
        >
            <h1 className="to-inherit inline-block text-5xl font-anton font-bold tracking-widest">
                Todo App
            </h1>
        </motion.div>
    );
}

export { Title }