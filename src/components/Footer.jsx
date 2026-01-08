import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: "var(--bg-custom-gradient)" }}
      className="text-[#e4f0e4] py-10 mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center sm:text-left"
        >
          <h2 className="text-lg font-semibold text-white">Minilink</h2>
          <p className="text-sm text-green-100">
            Simple URL shortening for modern teams
          </p>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-sm text-green-100"
        >
          © 2025 Minilink
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex gap-5 text-green-100"
        >
          <motion.a
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            href="#"
            className="cursor-pointer hover:text-white transition-colors"
          >
            <FaGithub size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            href="#"
            className="cursor-pointer hover:text-white transition-colors"
          >
            <FaTwitter size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            href="#"
            className="cursor-pointer hover:text-white transition-colors"
          >
            <FaLinkedin size={20} />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;