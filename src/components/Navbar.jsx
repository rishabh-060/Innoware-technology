import InnowareLogo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const user = useSelector(state => state.auth.user);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 backdrop-blur-xl transition-all duration-500 
        ${isScrolled ? "shadow-lg bg-white/80 dark:bg-black/70" : "bg-white/40 dark:bg-black/50 shadow-sm"}
      `}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
        {/* Left: Logo + Name */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
        >
          <img
            src={InnowareLogo}
            alt="InnoWare"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <h1 className="text-xl md:text-3xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 group-hover:opacity-90 transition-all">
            InnoWare
          </h1>
        </Link>

        {/* Right: Actions */}
        {user?.user?._id ? (
          <div>
            {/* <Link
              to="/dashboard"
              className={`
                relative inline-block px-6 py-1.5 rounded font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600
                shadow-lg hover:scale-105 hover:shadow-xl hover:from-cyan-400 hover:to-blue-500
                transition-all duration-300 transform
              `}
            >
              Dashboard
            </Link> */}
          </div>
        ) : (
          <div className="flex items-center gap-4">
            {/* Login */}
            {/* <Link
              to="/login"
              className={`
                relative inline-block px-6 py-1.5 rounded-md font-semibold text-cyan-500 border border-cyan-500
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-400 before:to-blue-500 before:rounded before:opacity-0 before:transition-opacity before:duration-300
                hover:before:opacity-30
                hover:text-white hover:scale-105 hover:shadow-lg
                transition-all duration-300
              `}
            >
              Login
            </Link> */}

            {/* Signup */}
            {/* <Link
              to="/signup"
              className={`
                relative inline-block px-6 py-1.5 rounded font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600
                shadow-lg hover:scale-105 hover:shadow-xl hover:from-cyan-400 hover:to-blue-500
                transition-all duration-300 transform
              `}
            >
              Signup
            </Link> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
