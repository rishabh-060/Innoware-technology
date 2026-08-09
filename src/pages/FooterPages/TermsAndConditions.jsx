import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  const terms = [
    {
      title: "Acceptance of Terms",
      desc: "By accessing or using our Project Management Software, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please discontinue use of our services.",
    },
    {
      title: "User Responsibilities",
      desc: "You are responsible for maintaining the confidentiality of your account credentials, providing accurate information, and using the software only for lawful purposes. Misuse, hacking attempts, or disruption of services is strictly prohibited.",
    },
    {
      title: "Intellectual Property",
      desc: "All features, designs, code, and content remain the intellectual property of InnoWare Technology. Unauthorized copying, distribution, or modification is prohibited.",
    },
    {
      title: "Limitation of Liability",
      desc: "We are not liable for damages, data loss, or business interruption resulting from the use or inability to use our services. You assume full responsibility when using the platform.",
    },
    {
      title: "Termination",
      desc: "We reserve the right to suspend or terminate accounts that violate our Terms & Conditions or engage in unlawful or harmful activities.",
    },
    {
      title: "Governing Law",
      desc: "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of your jurisdiction. Disputes will be resolved in accordance with applicable law.",
    },
  ];

  return (
    <section
      id="terms"
      className="relative w-full min-h-[90vh] py-20 overflow-x-hidden
      bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 
      text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Page Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Terms &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-500 animate-gradient">
              Conditions
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Please read these Terms & Conditions carefully before using our
            platform. By continuing, you acknowledge and agree to be bound by
            them.
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Last Updated: 28/09/2025
          </p>
        </div>

        {/* Terms Cards */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
          {terms.map((item, index) => (
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
                {item.title}
              </h3>
              <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
            Contact Us
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            For questions or concerns regarding these Terms & Conditions, please
            reach out to us at{" "}
            <a
              href="mailto:support@innoware.com"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              support@innoware.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;