import React, { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              VisaPortal
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link to="/visa-services" className="text-gray-700 hover:text-blue-500">
              Visa Services
            </Link>
            <Link to="/my-application" className="text-gray-700 hover:text-blue-500">
              My Application
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-500">
              About
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-3 space-y-2 shadow-lg">
          <Link to="/" className="block text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link to="/visa-services" className="block text-gray-700 hover:text-blue-500">
            Visa Services
          </Link>
          <Link to="/my-application" className="block text-gray-700 hover:text-blue-500">
            My Application
          </Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-500">
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
