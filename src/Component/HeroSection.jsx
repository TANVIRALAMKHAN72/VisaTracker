import React from "react";
import heroImage from "../assets/BLS-International-Spain-Visa-Application-Center.png";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Visa Services Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center text-white min-h-screen">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
          Explore Visa Services Effortlessly
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl">
          Track your application and stay updated with our simple portal.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/visa-services"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
          >
            View Services
          </a>
          <a
            href="/my-application"
            className="px-6 py-3 bg-white hover:bg-gray-100 rounded-lg text-blue-600 font-semibold transition"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
