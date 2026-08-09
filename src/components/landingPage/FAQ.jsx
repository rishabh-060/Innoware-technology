import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the typical timeline for a custom software project?",
      answer:
        "Timelines vary depending on complexity and requirements. A basic project may take 6–8 weeks, while larger enterprise solutions can take several months with multiple milestones.",
    },
    {
      question: "How do you ensure the quality of the software?",
      answer:
        "We follow agile methodologies, conduct unit and integration testing, and perform user acceptance testing (UAT). We also involve clients in feedback cycles to ensure the product meets expectations.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "Yes. We provide ongoing support plans that include bug fixes, updates, performance monitoring, and scaling as your business grows.",
    },
    {
      question: "Can you integrate the new software with our existing systems?",
      answer:
        "Absolutely. We specialize in API integrations, database migrations, and connecting with third-party tools to ensure smooth workflows.",
    },
    {
      question: "How do you handle data security and compliance?",
      answer:
        "We follow best practices such as encryption, secure authentication, and GDPR/ISO compliance to ensure your data is safe and regulatory standards are met.",
    },
    {
      question: "Do you offer flexible pricing models?",
      answer:
        "Yes, we provide fixed-price, milestone-based, and hourly pricing models depending on the scope and flexibility needed for your project.",
    },
    {
      question: "Can you scale the software as our business grows?",
      answer:
        "Yes. We design scalable solutions with cloud-native technologies that allow you to handle increasing workloads without performance issues.",
    },
    {
      question: "Will you train our team to use the new software?",
      answer:
        "Of course. We provide detailed documentation, training sessions, and continuous support so your team can adopt the system smoothly.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-20 bg-gray-950 text-gray-200 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-20 -left-32 w-80 h-80 bg-cyan-500/20 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]"></div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold">
          Frequently Asked{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-500 animate-gradient">
            Questions
          </span>
        </h2>

        {/* FAQ Accordion */}
        <div className="mt-12 space-y-4 text-left">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl bg-gray-900/60 border border-gray-800 backdrop-blur-md shadow-md hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-lg font-medium text-gray-200 hover:text-cyan-400 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <motion.div
                  initial={false}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-cyan-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-cyan-500" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 pb-5 text-gray-400 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
