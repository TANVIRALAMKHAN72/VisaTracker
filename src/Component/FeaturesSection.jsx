import React from "react";
import { FaRocket, FaLock, FaHeadset } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaRocket className="text-5xl text-blue-500 mb-4" />,
      title: "Fast Processing",
      description: "Get your visa updates quickly with our real-time tracking system.",
    },
    {
      icon: <FaLock className="text-5xl text-green-500 mb-4" />,
      title: "Secure Application",
      description: "Your personal data is protected with advanced security measures.",
    },
    {
      icon: <FaHeadset className="text-5xl text-purple-500 mb-4" />,
      title: "24/7 Support",
      description: "Our support team is always available to assist you anytime.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center justify-center text-center"
            >
              {/* Icon centered */}
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
