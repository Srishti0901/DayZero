import React from "react";
import { motion } from "framer-motion";

export default function Animate() {
  return (
    <div>
      <motion.div
        initial={{ y: -100 }} // Initial position (above the screen)
        animate={{ y: 0 }} // Target position (starts at the normal position)
        exit={{ y: -100 }} // Exit position (above the screen)
        transition={{ duration: 0.5 }} // Animation duration
      >
        <h1>Animate</h1>
        {/* Your card content here */}
      </motion.div>
    </div>
  );
}
