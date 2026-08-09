import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Server } from "lucide-react"; // icons
import aboutImg from "../../assets/aboutUs.svg"; // replace with your team image

const Aboutus = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-[90vh] py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top section - Image + Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={aboutImg}
              alt="InnoWare Team"
              className="w-80 md:w-[620px] rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-500 animate-gradient">
                InnoWare
              </span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              InnoWare is a leading software development company dedicated to
              crafting innovative solutions that empower businesses to thrive in
              the digital age. With a team of seasoned experts and a passion for
              cutting-edge technology, we deliver tailored software solutions
              that drive growth, efficiency, and competitive advantage.
            </p>

            {/* Bottom Info Cards */}
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
              <InfoCard
                icon={<Lightbulb className="w-6 h-6 text-cyan-400" />}
                title="Innovation"
                description="Driving innovation through research, development, and strategic partnerships."
                delay={0.4}
              />
              <InfoCard
                icon={<Server className="w-6 h-6 text-cyan-400" />}
                title="Solutions"
                description="Providing comprehensive solutions to address your most pressing challenges."
                delay={0.5}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="p-8 rounded-xl bg-gray-900/60 backdrop-blur-md border border-gray-800 hover:border-cyan-500 transition-all shadow-lg"
  >
    <div className="flex items-center gap-3">
      {icon}
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="mt-3 text-gray-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default Aboutus;
