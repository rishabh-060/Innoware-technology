import { Github, LucideLinkedin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import teams from "../../assets/teams2.svg";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Rishabh Verma",
    role: "Development Engineer",
    img: "https://avatars.githubusercontent.com/u/145150811?v=4",
    linkedin: "https://www.linkedin.com/in/rishabh-verma-277530223",
    github: "https://github.com/rishabh-060",
  },
  {
    name: "Pratham Kumar",
    role: "Testing Engineer",
    img: "https://avatars.githubusercontent.com/u/168889262?v=4",
    linkedin: "https://www.linkedin.com/in/pratham-kumar-majhwar-45793627b",
    github: "https://github.com/pratham-15",
  },
  {
    name: "Rohit Shah",
    role: "Marketing Head",
    img: "https://randomuser.me/api/portraits/men/89.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Vipin Kumar",
    role: "Head of Design",
    img: "https://avatars.githubusercontent.com/u/121837069?v=4",
    linkedin: "https://www.linkedin.com/in/vipin-kumar8896",
    github: "#",
  },
];

const Team = () => {
  return (
    <section className="relative w-full min-h-[90vh] py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <motion.div
          className="flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glow Background */}
          <div className="absolute -inset-10 bg-gradient-to-tr from-cyan-500 via-purple-500 
            to-blue-500 rounded-full blur-[150px] opacity-30"></div>

          <img
            src={teams}
            alt="Team Illustration"
            className="relative z-10 w-full max-w-md lg:max-w-lg drop-shadow-2xl"
          />
        </motion.div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center lg:text-left">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r 
              from-cyan-400 via-purple-400 to-blue-500 animate-gradient">
              Innovators
            </span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl text-center lg:text-left">
            We are a collective of thinkers, creators, and builders, united by a
            passion for technology and a drive to create impactful solutions.
          </p>

          {/* Team Grid */}
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 bg-white/10 dark:bg-gray-800/40 
                  backdrop-blur-xl border border-gray-700/40 rounded-2xl p-5 
                  shadow-md hover:shadow-cyan-500/30 hover:-translate-y-2 
                  transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Profile Image */}
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-cyan-500 shadow-lg flex-shrink-0">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r 
                    from-cyan-400 via-purple-400 to-blue-500 animate-gradient 
                    text-sm font-medium">
                    {member.role}
                  </p>

                  {/* Social Links */}
                  <div className="mt-2 flex gap-3">
                    {member.linkedin && (
                      <Link
                        to={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-cyan-500/10 border 
                          border-cyan-500/20 hover:bg-cyan-500/20 
                          transition-all duration-300"
                      >
                        <LucideLinkedin className="w-4 h-4 text-cyan-400" />
                      </Link>
                    )}

                    {member.github && (
                      <Link
                        to={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-cyan-500/10 border 
                          border-cyan-500/20 hover:bg-cyan-500/20 
                          transition-all duration-300"
                      >
                        <Github className="w-4 h-4 text-cyan-400" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;