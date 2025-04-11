import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:px-32 md:py-14">
        {/* Brand Info */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-teal-400">MyCart</h1>
          <p className="text-gray-400 text-sm">
            Your one-stop shop for everything awesome. Browse, buy, and enjoy! 🛒
          </p>
        </div>

        {/* Support Links */}
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-2xl">Support</h1>
          <Link to="/contact">
            <p className="text-gray-400 text-sm hover:text-white">Contact Us</p>
          </Link>
          <Link to="/faq">
            <p className="text-gray-400 text-sm hover:text-white">FAQ</p>
          </Link>
          <Link to="/terms">
            <p className="text-gray-400 text-sm hover:text-white">Terms & Conditions</p>
          </Link>
        </div>

        {/* About Links */}
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-2xl">About</h1>
          <Link to="/about">
            <p className="text-gray-400 text-sm hover:text-white">About Us</p>
          </Link>
          <Link to="/project">
            <p className="text-gray-400 text-sm hover:text-white">About This Project</p>
          </Link>
          <Link to="#">
            <p className="text-gray-400 text-sm hover:text-white">Want to Contribute?</p>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full mx-auto h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

      {/* Bottom Bar */}
      <div className="flex justify-between items-center px-6 md:px-32 py-6 text-gray-400">
        <p>© 2025 MyCart. All rights reserved.</p>
        <div className="flex gap-4">
          <FaWhatsapp size={22} className="hover:text-green-500 cursor-pointer" />
          <CiMail size={22} className="hover:text-blue-400 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
