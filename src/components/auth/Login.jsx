import React, { useState } from "react";
import Input from "../form/Input";
import ButtonAtom from "../ButtonAtom";
import { Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import secure from "../../assets/secure.svg";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../services/auth.services";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validation
  const validate = () => {
    let newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
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
      const result = await dispatch(loginUser(formData));
      if (result.meta.requestStatus === "fulfilled") {
        toast.success("Login successful!");
        setFormData({ email: "", password: "" });
        navigate("/dashboard");
      } else {
        toast.error(result.error?.message || "Login failed!");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-200 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-6 flex flex-col lg:flex-row items-center gap-8 justify-around">
        
        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.6)]"
        >
          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-2 tracking-wide">
            Welcome Back 👋
          </h2>
          <p className="text-center text-gray-400 text-sm mb-8">
            Sign in to continue with{" "}
            <span className="text-blue-400">InnoWare</span>
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
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
                value={formData.password}
                onChange={handleChange}
                icon={Lock}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <ButtonAtom
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              className="mt-2"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Logging In...
                </span>
              ) : (
                "Login"
              )}
            </ButtonAtom>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-700"></div>
          </div>

          {/* Extra Links */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Not a member?{" "}
            <Link
              to="/signup"
              className="text-blue-400 hover:text-blue-300 font-medium transition"
            >
              Join Now
            </Link>
          </p>
        </motion.div>

        {/* Illustration */}
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
            src={secure}
            alt="Login Illustration"
            className="relative z-10 w-full drop-shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Login;
