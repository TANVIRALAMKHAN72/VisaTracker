import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MyApplicationPage = () => {
  const location = useLocation();

  const [name, setName] = useState("");
  const [passport, setPassport] = useState("");
  const [visaType, setVisaType] = useState("");
  const [step, setStep] = useState(1);

  useEffect(() => {
    // প্রথমে localStorage থেকে ডেটা লোড করার চেষ্টা করা হচ্ছে
    const savedData = JSON.parse(localStorage.getItem("visaApplication"));
    if (savedData) {
      setName(savedData.name || "");
      setPassport(savedData.passport || "");
      setVisaType(savedData.visaType || "");
      setStep(savedData.step || 1);
    }

    // যদি 'Apply Now' বাটন থেকে নতুন ভিসা আসে, সেটি সেট করা হচ্ছে
    const newVisa = location.state?.visaName;
    if (newVisa && newVisa !== visaType) {
      setVisaType(newVisa);
      localStorage.setItem("selectedVisa", newVisa);
    }

    // শুধুমাত্র ভিসা টাইপ পরিবর্তন হলে তা localStorage-এ সেভ করা হচ্ছে
    if (visaType && visaType !== localStorage.getItem("selectedVisa")) {
      localStorage.setItem("selectedVisa", visaType);
    }
  }, [location.state, visaType]); // 'location.state' এবং 'visaType' পরিবর্তনের উপর নজর রাখা হচ্ছে

  useEffect(() => {
    // পুরো ফর্মের ডেটা localStorage-এ সেভ করা হচ্ছে
    localStorage.setItem(
      "visaApplication",
      JSON.stringify({ name, passport, visaType, step })
    );
  }, [name, passport, visaType, step]);

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(3);
      toast.success("Application Complete! 🎉");
    }
  };

  const progressPercent = step === 3 ? 100 : step * 33;

  return (
    <div className="p-6 pt-24 bg-gray-50 min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-center">
        My Visa Application
      </h2>

      {/* Steps */}
      <div className="flex gap-4 mb-4">
        {["Submitted", "Processing", "Approved"].map((s, idx) => (
          <div
            key={s}
            className={`flex-1 text-center py-2 rounded ${
              step > idx ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {s}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="relative h-6 w-full bg-gray-200 rounded mb-6">
        <div
          className="h-6 bg-blue-500 rounded transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
        <span className="absolute inset-0 flex justify-center items-center text-white font-medium">
          {progressPercent}% Complete
        </span>
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleNextStep();
        }}
        className="max-w-md space-y-4 bg-white p-6 rounded shadow"
      >
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            className="border p-2 w-full rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Passport No</label>
          <input
            type="text"
            className="border p-2 w-full rounded"
            value={passport}
            onChange={(e) => setPassport(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Visa Type</label>
          <input
            type="text"
            className="border p-2 w-full rounded"
            value={visaType}
            readOnly
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {step < 3 ? "Next Step" : "Finish"}
        </button>
      </form>
    </div>
  );
};

export default MyApplicationPage;