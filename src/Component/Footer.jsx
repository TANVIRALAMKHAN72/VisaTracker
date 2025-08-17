import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold text-white mb-4">VisaTracker</h1>
          <p className="text-gray-400">
            Track your visa application easily and securely with real-time updates.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p>Email: visa@tracker.com</p>
          <p>Phone: +880 123 456 789</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700 transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 w-full">
        &copy; {new Date().getFullYear()} VisaTracker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
