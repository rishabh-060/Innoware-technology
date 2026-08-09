import React from "react";
import service from "../../assets/services.svg";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Landing Pages",
      desc: "Modern, responsive, and engaging landing pages designed to capture attention and convert visitors.",
    },
    {
      title: "Full-Stack Web Apps",
      desc: "Scalable and secure web applications built with the latest technologies to fit your business needs.",
    },
    {
      title: "Custom Development",
      desc: "Tailored solutions for your unique requirements, from idea to deployment with clean, maintainable code.",
    },
    {
      title: "Mobile Solutions",
      desc: "Cross-platform mobile apps with smooth UI/UX and high performance to reach users anywhere.",
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full min-h-[90vh] py-20 overflow-x-hidden
      bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 
      text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* mobile screen Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:hidden flex justify-center"
          >
            <img
              src={service}
              alt="InnoWare Services"
              className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] xl:w-[600px] max-w-full drop-shadow-2xl"
            />
          </motion.div>

          {/* Left Content */}
          <div className="text-center md:text-left">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-500 animate-gradient">
                Services
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto md:mx-0">
              From concept to deployment, we offer comprehensive digital
              solutions designed to elevate your business, engage your audience,
              and drive measurable growth.
            </p>
            <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto md:mx-0">
              Whether it’s building modern web applications, mobile experiences,
              or custom solutions, our team ensures high performance,
              scalability, and stunning design.
            </p>

            {/* Service Cards */}
            <div className="mt-14 grid gap-6 sm:gap-8 sm:grid-cols-2">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group p-6 sm:p-8 rounded-2xl bg-gray-900/60 dark:bg-gray-800/60 
                    backdrop-blur-md border border-gray-700 hover:border-cyan-500 
                    transition-all shadow-lg"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-500 animate-gradient">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex justify-center"
          >
            <img
              src={service}
              alt="InnoWare Services"
              className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] xl:w-[600px] max-w-full drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
