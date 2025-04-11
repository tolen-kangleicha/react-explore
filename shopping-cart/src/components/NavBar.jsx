import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const sections = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-white">
          🛒 MyCart
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {sections.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="hover:text-teal-400 transition-colors"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <HiOutlineMenuAlt3 size={26} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-end">
          <div className="w-2/3 sm:w-1/2 bg-gray-800 h-full p-6">
            <button
              className="text-white text-2xl mb-6"
              onClick={() => setSidebarOpen(false)}
            >
              ✕
            </button>
            <nav className="flex flex-col gap-4">
              {sections.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  className="text-white text-lg hover:text-teal-400"
                  onClick={() => setSidebarOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
