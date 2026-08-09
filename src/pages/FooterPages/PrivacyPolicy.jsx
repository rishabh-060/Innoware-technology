import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const policies = [
    {
      title: "Information We Collect",
      desc: "We collect personal information such as name, email, and usage data when you interact with our software. This data is used only to improve services and user experience.",
    },
    {
      title: "How We Use Your Information",
      desc: "Your information is used for providing, maintaining, and improving our services. We never sell your data to third parties.",
    },
    {
      title: "Data Security",
      desc: "We implement strict security measures to protect your personal data from unauthorized access, alteration, or disclosure.",
    },
    {
      title: "Third-Party Services",
      desc: "Our platform may include integrations with third-party services. Their privacy practices are governed by their own policies.",
    },
    {
      title: "Your Rights",
      desc: "You have the right to access, update, or delete your personal data. Contact us anytime to exercise your rights.",
    },
    {
      title: "Changes to This Policy",
      desc: "We may update this Privacy Policy periodically. Any changes will be communicated via our website.",
    },
  ];

  return (
    <section
      id="privacy-policy"
      className="relative w-full min-h-[90vh] py-20 overflow-x-hidden
      bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 
      text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center md:text-left">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-500 animate-gradient">
              Policy
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-center">
            Your privacy is important to us. Please read our policy carefully to
            understand how we handle your personal information.
          </p>

          {/* Policy Cards */}
          <div className="mt-14 grid gap-6 sm:gap-8 sm:grid-cols-2">
            {policies.map((policy, index) => (
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
                  {policy.title}
                </h3>
                <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                  {policy.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section Footer */}
        <div className="mt-16 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
            Contact Us
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            For questions or concerns regarding this Privacy Policy, please
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

export default PrivacyPolicy;