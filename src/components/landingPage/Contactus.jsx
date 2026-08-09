import React, { useState } from "react";
import contactUsImg from "../../assets/contactUs.svg";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { contactUs } from "../../services/guest.services";
import { CheckCircle } from "lucide-react"; // ✅ success icon

const ContactUs = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  // Handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form
  const validateForm = () => {
    if (!formData.fullname.trim()) return "Full name is required.";
    if (!formData.email.trim()) return "Email is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return "Enter a valid email address.";
    if (!formData.subject.trim()) return "Subject is required.";
    if (formData.message.trim().length < 10)
      return "Message must be at least 10 characters long.";
    return null;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    const errorMsg = validateForm();
    if (errorMsg) {
      setStatus(errorMsg);
      return;
    }

    setLoading(true);

    try {
      const res = await dispatch(contactUs(formData));
      if (res.meta?.requestStatus === "fulfilled") {
        setFormData({ fullname: "", email: "", subject: "", message: "" });
        setSuccess(true);

        // Hide success animation after 3s
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black px-6 py-20 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[200px] animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[200px] animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Illustration */}
        <motion.div
          className="hidden md:flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -inset-12 bg-gradient-to-tr from-cyan-500 via-purple-500 to-blue-500 rounded-full blur-[180px] opacity-30 animate-pulse"></div>
          <motion.img
            src={contactUsImg}
            alt="Contact Illustration"
            className="relative z-10 w-full max-w-md lg:max-w-lg drop-shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Contact Form / Success Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-lg"
        >
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-blue-500/30 blur-sm"></div>

          <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-10 border border-white/10 shadow-md">
            {success ? (
              // ✅ Success Animation
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex flex-col items-center justify-center text-center space-y-4"
              >
                <CheckCircle className="w-16 h-16 text-green-400" />
                <h2 className="text-xl font-semibold text-gray-200">
                  Message Sent Successfully 🎉
                </h2>
              </motion.div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-500 mb-3">
                  Contact Us
                </h2>
                <p className="text-gray-400 text-center text-sm mb-8">
                  Have a project in mind? Let’s build something amazing together.
                </p>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Your Full Name"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 text-gray-200 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 text-gray-200 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Idea"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 text-gray-200 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <textarea
                    rows="4"
                    name="message"
                    maxLength={500}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="scrollbar-hide w-full px-4 py-3 bg-black/40 border border-white/10 text-gray-200 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                  ></textarea>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
                  >
                    {loading ? (
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                      />
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>

                {status && (
                  <p className="mt-4 text-center text-sm text-red-400">{status}</p>
                )}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;