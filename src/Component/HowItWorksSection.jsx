import React from "react";
import { FaFileAlt, FaSearch, FaCheckCircle } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <FaFileAlt className="text-5xl text-white" />,
      title: "Submit Application",
      description: "Fill out your visa application and submit your documents securely.",
      bg: "bg-blue-500",
    },
    {
      icon: <FaSearch className="text-5xl text-white" />,
      title: "Track Status",
      description: "Check your visa application status in real-time anytime, anywhere.",
      bg: "bg-green-500",
    },
    {
      icon: <FaCheckCircle className="text-5xl text-white" />,
      title: "Get Approval",
      description: "Receive notifications once your visa is approved successfully.",
      bg: "bg-purple-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Fade key={index} direction="up" triggerOnce>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center">
                <div className={`w-20 h-20 flex items-center justify-center rounded-full mb-4 ${step.bg}`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
