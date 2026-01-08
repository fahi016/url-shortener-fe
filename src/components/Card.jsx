import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, desc }) => {
  return (
    <motion.div 
      whileHover={{ 
        y: -5,
        boxShadow: "0 8px 30px rgba(40, 167, 69, 0.25)"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-[#1a241a] border border-[#272a27] flex flex-col px-4 py-8 gap-3 rounded-lg hover:border-[#28a745] transition-colors group"
    >
      <h3 className="text-[#e4f0e4] text-lg font-semibold group-hover:text-[#28a745] transition-colors">
        {title}
      </h3>
      <p className="text-[#a1b0a1] text-sm leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
};

export default Card;