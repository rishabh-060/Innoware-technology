import React from "react";
import { Facebook, Instagram, Linkedin, Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">InnoWare</h2>
          <p className="text-sm mb-4">
            Powering the future of software development with innovative
            solutions.
          </p>
          <div className="flex space-x-4">
            <Link
              to="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 transition"
            >
              <Facebook size={18} />
            </Link>
            <Link
              to="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 transition"
            >
              <Instagram size={18} />
            </Link>
            <Link
              to="https://www.linkedin.com/in/innoware-bb1889382/"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-700 transition"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              to="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-neutral-900 transition"
            >
              <Github size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="#" className="hover:text-white">Home</Link></li>
            <li><Link to="#" className="hover:text-white">About Us</Link></li>
            <li><Link to="#" className="hover:text-white">Services</Link></li>
            <li><Link to="#" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms-condition" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li>Noida Sector-62</li>
            <li>Uttar Pradesh, India</li>
            <li>(+91) 8881343585</li>
            <li>innoware108@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} InnoWare. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
