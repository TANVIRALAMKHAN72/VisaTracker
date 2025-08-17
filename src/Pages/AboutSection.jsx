import React from "react";
import { Button } from "antd";
import aboutImage from "../assets/Methods-to-Track-Your-Malaysia-Visa-Application-Status-1024x576.webp";

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20 my-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={aboutImage}
            alt="About Visa Services"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            About VisaTrack
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            VisaTrack is your trusted partner in making international travel
            easier and hassle-free. We provide detailed information about
            different visa types, processing times, and help you track your
            applications with ease.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-white rounded shadow hover:shadow-lg transition">
              <span className="text-blue-500 text-2xl">📄</span>
              <p className="text-gray-700 font-medium">Detailed Visa Info</p>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded shadow hover:shadow-lg transition">
              <span className="text-blue-500 text-2xl">⏱️</span>
              <p className="text-gray-700 font-medium">Processing Time Updates</p>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded shadow hover:shadow-lg transition">
              <span className="text-blue-500 text-2xl">💾</span>
              <p className="text-gray-700 font-medium">Track Applications</p>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded shadow hover:shadow-lg transition">
              <span className="text-blue-500 text-2xl">🔒</span>
              <p className="text-gray-700 font-medium">Secure & Reliable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
