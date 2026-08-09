import React from "react";
import InnoWare from "../../assets/animatedHeroImg.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-950 text-white">
      {/* Background Glow Effects */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"
        animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 left-[50%] w-84 h-84 bg-purple-500/30 rounded-full blur-3xl"
        animate={{ x: [0, -20, 20, 0], y: [0, 25, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl"
        animate={{ x: [0, -25, 25, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center md:justify-between md:gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight tracking-wider"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innoware{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-500 animate-gradient">
              Technology
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Smart Software, Simple Solution
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-lg border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-colors">
              Learn More
            </button>
          </motion.div>

          {/* Featured Highlights */}
          <motion.div
            className="mt-12 hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <FeatureBox
              icon="🚀"
              title="Optimized Performance"
              description="Blazing-fast speeds for a superior user experience."
            />
            <FeatureBox
              icon="✨"
              title="Intuitive UX/UI"
              description="Designs that are beautiful, accessible, and easy to use."
            />
            <FeatureBox
              icon="🔒"
              title="Enterprise-Grade Security"
              description="Robust protection for your data and your users."
            />
          </motion.div>
        </div>

        {/* Right Image/Animation */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Hero Image */}
          <img
            src={InnoWare}
            alt="InnoWare Logo"
            className="relative z-10 w-full h-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

// Feature Box
const FeatureBox = ({ icon, title, description }) => (
  <div className="flex flex-col items-start gap-4 p-5 border border-gray-700 rounded-xl bg-gray-800/40 backdrop-blur-md hover:scale-105 hover:shadow-lg hover:border-cyan-400 transition-all">
    <div className="flex justify-between items-center">
      <span className="text-2xl">{icon}</span>
      <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
    </div>
      <p className="text-gray-400 text-sm mt-1">{description}</p>
  </div>
);

export default Hero;
