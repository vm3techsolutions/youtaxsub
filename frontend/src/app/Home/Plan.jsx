"use client";

import { useState } from "react";
import { handleRazorpayPayment } from "../checkout/checkout";

export default function Plans() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const plans = [
    {
      title: "Daily Plan",
      price: "₹49",
      duration: "Per Day",
      features: ["1-Day Access", "Basic Support", "Instant Filing", "No Commitment"],
      amount: 49,
    },
    {
      title: "Monthly Plan",
      price: "₹499",
      duration: "Per Month",
      features: ["30-Day Access", "Priority Support", "GST & Tax Filing", "Save 20%"],
      amount: 499,
    },
    {
      title: "Yearly Plan",
      price: "₹4999",
      duration: "Per Year",
      features: [
        "365-Day Access",
        "Dedicated Compliance Manager",
        "ROC + GST + Tax Filing",
        "Save 60%",
      ],
      amount: 4999,
    },
  ];

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const handlePayment = () => {
    if (!userName || !userEmail) return alert("Please enter your name and email.");
    handleRazorpayPayment(selectedPlan.title, selectedPlan.amount, userName, userEmail);
    setModalOpen(false);
    setUserName("");
    setUserEmail("");
  };

  return (
    <section id="Plans" className="mx-auto px-5 sm:px-20 py-16 text-center">
      <h1 className="bg-[#E51D25] text-white px-4 py-1 rounded-lg text-xl font-semibold mb-10 inline-block">
        Our Plans
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="border border-[#E51D25] rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between bg-white"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#E51D25] mb-2">
                {plan.title}
              </h3>
              <p className="text-3xl font-bold text-black mb-1">{plan.price}</p>
              <p className="text-gray-600 mb-4">{plan.duration}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 font-medium">
                {plan.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => openModal(plan)}
              className="mt-6 bg-[#E51D25] text-white py-2 rounded-lg hover:bg-[#c9181f] transition"
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md text-left">
            <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 mb-3 border rounded"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 mb-4 border rounded"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <div className="flex justify-end space-x-2">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-[#E51D25] text-white px-4 py-2 rounded"
                onClick={handlePayment}
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
