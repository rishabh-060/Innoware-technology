import React from "react";
import { motion } from "framer-motion";
import ButtonAtom from "../components/ButtonAtom";
import notFound from "../assets/NotFound.svg";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-200 px-6 relative overflow-hidden">
    
      {/* Illustration */}
      <motion.div
        className="relative w-full max-w-lg mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="absolute -inset-12 bg-gradient-to-tr from-cyan-500 via-purple-500 to-blue-500 rounded-full blur-[180px] opacity-30 animate-pulse"></div>
        <motion.img
          src={notFound}
          alt="Not Found Illustration"
          className="relative z-10 w-full drop-shadow-2xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="text-gray-400 text-lg mb-6 text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Oops! The page you are looking for doesn’t exist or has been moved.
      </motion.p>

      {/* Actions */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xs"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <ButtonAtom
          type="button"
          variant="primary"
          size="md"
          fullWidth
          className="hover:scale-105 hover:shadow-xl transition-all duration-300"
          onClick={() => (window.location.href = "/")}
        >
          Return to Homepage
        </ButtonAtom>
      </motion.div>
    </div>
  );
};

export default NotFound;
