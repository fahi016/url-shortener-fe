import Card from "./Card";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useStoreContext } from "../contextApi/contextapi";
import { useNavigate } from "react-router-dom";




const LandingPage = () => {
    const  {token} = useStoreContext();
    const navigate = useNavigate();

    console.log("TOKEN FROM LANDING PAGE: "+token);
  
  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#0a0f0a] text-[#e4f0e4] lg:px-16 sm:px-10 px-5">

      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-20 pb-10">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="font-roboto font-bold text-3xl sm:text-4xl md:text-5xl leading-tight max-w-xl bg-gradient-to-r from-green-200 via-green-400 to-green-600 bg-clip-text text-transparent"
          >
            Simple URL shortening for modern teams
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-5 text-[#a1b0a1] max-w-xl leading-relaxed"
          >
            Minilink helps you create short, clean links in seconds. Share smarter,
            manage links effortlessly, and track performance with a clear and
            intuitive interface.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-7 flex gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(40, 167, 69, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundImage: "var(--bg-custom-gradient)" }}
              className="px-6 py-2.5 rounded-lg text-white text-sm font-medium shadow-lg transition-all"
              onClick={() => navigate("/dashboard")}
            >
              Manage links
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#28a745" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-lg border border-[#272a27] bg-[#131a13] text-[#e4f0e4] text-sm font-medium hover:border-[#28a745] hover:bg-[#1a241a] transition-all"
              onClick={() => navigate("/dashboard")}
            >
              Create short link
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 rounded-lg blur-2xl opacity-20 animate-pulse"></div>
            <img
              src="/images/img2.png"
              alt="Minilink dashboard preview"
              className="relative w-[380px] sm:w-[440px] object-cover rounded-lg border border-[#272a27] shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="pt-24 pb-16 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center text-xl sm:text-2xl font-medium mb-12 bg-gradient-to-r from-green-200 via-green-400 to-green-600 bg-clip-text text-transparent"
        >
          Built for individuals and teams
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <Card
              title="Simple URL shortening"
              desc="Create short, readable links instantly with a clean and intuitive workflow.     "
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <Card
              title="Clear analytics"
              desc="Track clicks and engagement to understand how your links perform."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <Card
              title="Secure by default"
              desc="Links are protected with reliable security practices from the start."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            <Card
              title="Fast and reliable"
              desc="Built on dependable infrastructure for fast redirects and high uptime."
            />
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;