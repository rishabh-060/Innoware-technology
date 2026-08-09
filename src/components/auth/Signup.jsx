import React, { useState } from "react";
import Input from "../form/Input";
import ButtonAtom from "../ButtonAtom";
import { Mail, Lock, User, Building, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../services/auth.services";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import signup from "../../assets/signUp.svg";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
    company: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  // Input Change
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validation
  const validate = () => {
    let newErrors = {};
    if (!userData.fullname.trim()) newErrors.fullname = "Full name is required";
    if (!userData.email.trim()) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(userData.email))
      newErrors.email = "Enter a valid email";
    if (!userData.password.trim()) newErrors.password = "Password is required";
    if (userData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!userData.company.trim()) newErrors.company = "Company is required";
    if (!userData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\+?[0-9]{10,15}$/.test(userData.phone))
      newErrors.phone = "Enter a valid phone number";
    return newErrors;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const result = await dispatch(registerUser(userData));
      if (result.meta.requestStatus === "fulfilled") {
        toast.success("Account created successfully!");
        setUserData({
          fullname: "",
          email: "",
          password: "",
          company: "",
          phone: "",
        })
        navigate("/login");
      } else {
        toast.error(result.error?.message || "Signup failed!");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-200 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-6 flex flex-col lg:flex-row items-center justify-around">
        {/* Illustration Left Side */}
        <motion.div
          className="hidden lg:flex justify-center relative w-full max-w-sm sm:max-w-md lg:max-w-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Glow Behind Image */}
          <div className="absolute -inset-16 bg-gradient-to-tr from-cyan-500 via-purple-500 to-blue-500 rounded-full blur-[180px] opacity-25 animate-pulse"></div>

          <motion.img
            src={signup}
            alt="Signup Illustration"
            className="relative z-10 w-full drop-shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Signup Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.6)]"
        >
          <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
          <p className="text-center text-gray-400 text-sm mb-6">
            Join InnoWare and build smarter solutions 🚀
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <Input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={userData.fullname}
                onChange={handleChange}
                icon={User}
              />
              {errors.fullname && (
                <p className="text-red-500 text-xs mt-1">{errors.fullname}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleChange}
                icon={Mail}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={userData.password}
                onChange={handleChange}
                icon={Lock}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Company */}
            <div>
              <Input
                type="text"
                name="company"
                placeholder="Company"
                value={userData.company}
                onChange={handleChange}
                icon={Building}
              />
              {errors.company && (
                <p className="text-red-500 text-xs mt-1">{errors.company}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={userData.phone}
                onChange={handleChange}
                icon={Phone}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Submit */}
            <ButtonAtom
              type="submit"
              variant="primary"
              size="md"
              fullWidth
              className="mt-4"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Signing Up...
                </span>
              ) : (
                "Sign Up"
              )}
            </ButtonAtom>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-700"></div>
            <span className="px-3 text-sm text-gray-500">or</span>
            <div className="flex-grow h-px bg-gray-700"></div>
          </div>

          {/* Redirect */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-400 hover:text-blue-300 font-medium transition"
            >
              Login
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Signup;
