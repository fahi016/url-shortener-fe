import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutPage = () => {
  const features = [
    {
      icon: FaLink,
      color: "text-green-400",
      title: "Effortless URL Shortening",
      desc: "Quickly generate short and clean URLs without unnecessary steps. Minilink keeps the process fast, simple, and intuitive.",
      delay: 0.1
    },
    {
      icon: FaShareAlt,
      color: "text-green-500",
      title: "Insightful Link Analytics",
      desc: "Track clicks, traffic sources, and user engagement to understand how your links perform and optimize your reach.",
      delay: 0.2
    },
    {
      icon: FaEdit,
      color: "text-green-600",
      title: "Secure & Flexible Management",
      desc: "Edit, manage, or disable links anytime while keeping your data protected with reliable security practices.",
      delay: 0.3
    },
    {
      icon: FaChartLine,
      color: "text-green-400",
      title: "Fast & Dependable Performance",
      desc: "Enjoy fast redirects and consistent uptime backed by a stable infrastructure that keeps your links always available.",
      delay: 0.4
    }
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#0a0f0a] lg:px-16 sm:px-10 px-5 py-10">
      <div className="max-w-5xl">
        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-extrabold text-[#e4f0e4] mb-4"
        >
          About <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Minilink</span>
        </motion.h1>

        {/* Intro */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-[#a1b0a1] text-base leading-relaxed mb-10 sm:w-[85%]"
        >
          Minilink is a simple and reliable URL shortening platform built to make
          link sharing effortless. Create short, meaningful links, manage them
          with ease, and track their performance through clear and actionable
          insights.
        </motion.p>

        {/* Features */}
        <div className="space-y-8 sm:w-[85%]">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: feature.delay, ease: "easeOut" }}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-5 rounded-lg bg-[#131a13] border border-[#272a27] hover:border-[#28a745] transition-all group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <IconComponent className={`${feature.color} text-2xl mt-1`} />
                </motion.div>
                <div>
                  <h2 className="text-xl font-semibold text-[#e4f0e4] mb-1 group-hover:text-[#28a745] transition-colors">
                    {feature.title}
                  </h2>
                  <p className="text-[#a1b0a1] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;