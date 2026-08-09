import React from "react";
import construction from "../assets/construction.svg";
import { motion } from "framer-motion";
import ButtonAtom from "../components/ButtonAtom";

const NotBuilt = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-200 px-6">
      
      {/* Illustration */}
      <motion.img
        src={construction}
        alt="Under Construction"
        className="w-64 md:w-96 mb-8 drop-shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Message */}
      <motion.h1
        className="text-2xl md:text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Page Under Construction
      </motion.h1>

      <motion.p
        className="text-gray-400 text-center mb-6 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        We are working hard to bring this page to life. Stay tuned!
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <ButtonAtom
          type="button"
          variant="primary"
          size="md"
          onClick={() => (window.location.href = "/")}
          className="hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Go Back Home
        </ButtonAtom>
      </motion.div>
    </div>
  );
};

export default NotBuilt;
