import React from "react";
import { motion } from "framer-motion";
import softwareDev from "../../assets/softwareDev.svg";

const CustomSoftwareDevelopment = () => {
  const features = [
    {
      title: "Scalable Architecture",
      desc: "Designs that grow with your business, ensuring long-term viability and performance.",
    },
    {
      title: "Robust Data Management",
      desc: "Secure and efficient data handling to protect your most valuable assets.",
    },
    {
      title: "Cloud-Native Solutions",
      desc: "Leveraging cloud for agility, scalability, and cost-effectiveness.",
    },
  ];

  const process = [
    { step: "Discovery & Planning", desc: "Understanding your needs and goals." },
    { step: "Design & Development", desc: "Crafting the solution with precision." },
    { step: "Testing & Deployment", desc: "Ensuring quality and a smooth launch." },
    { step: "Maintenance & Support", desc: "Ongoing support and future proofing." },
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-200 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side - Image */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ opacity: 0, scale: 0.9, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={softwareDev}
            alt="Custom Software Development"
            className="w-72 sm:w-80 md:w-[440px] lg:w-[500px] drop-shadow-2xl"
          />
        </motion.div>

        {/* Right Side - Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Custom{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
              Software Development
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto md:mx-0">
            InnoWare specializes in creating bespoke software solutions tailored to
            meet the unique needs of businesses across industries. We combine
            cutting-edge technology with agile methodologies to deliver scalable,
            secure, and innovative software.
          </p>

          {/* Features as Grid (no marquee, no overflow) */}
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 rounded-xl bg-gray-900/70 border border-gray-800 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-500 animate-gradient">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Timeline */}
      <div className="mt-20 text-center px-6">
        <h3 className="text-2xl sm:text-3xl font-bold">Our Process</h3>
        <div className="mt-12 relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 rounded-full"></div>

          <div className="space-y-12">
            {process.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="md:w-1/2 px-4 sm:px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-gray-900/80 border border-gray-800 p-6 rounded-xl shadow-lg"
                  >
                    <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-500 animate-gradient">
                      {item.step}
                    </h4>
                    <p className="mt-2 text-gray-400 text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
                {/* Circle Marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-4 border-gray-950"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSoftwareDevelopment;
