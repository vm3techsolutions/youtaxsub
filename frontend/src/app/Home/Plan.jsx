"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";


export default function Plans() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const plans = [
    {
      title: "Essential",
      price: 2000,
      duration: "Per Day",
      features: [
        "No system required",
        "No software needed",
        "Remote assistant",
        "1 Bookkeeping Officers",
        "1 Accountant",
        "Technical Team Support",
        "GST Return",
        "TDS Return",
        "Income Tax Return without Audit",
      ],
    },
    {
      title: "Pro",
      price: 7000,
      duration: "Per Month",
      features: [
        "No system required",
        "No software needed",
        "4-Day Visit",
        "1 Bookkeeping Officers (On site)",
        "1 Accountant",
        "Technical Team Support",
        "GST Return",
        "TDS Return",
        "Income Tax Return without Audit",
      ],
    },
    {
      title: "Elite",
      price: 72000,
      duration: "Per Year",
      features: [
        "No system required",
        "No software needed",
        "48-Day Visit",
        "1 Bookkeeping Officers (On site)",
        "1 Accountant",
        "Technical Team Support",
        "GST Return",
        "TDS Return",
        "Income Tax Return without Audit",
      ],
    },
  ];

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", phone: "" };
    let isValid = true;

    if (!formData.name.trim()) {
    newErrors.name = "Name is required.";
    isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
    newErrors.name = "Name must contain only letters and spaces.";
    isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handlePaymentSubmit = async () => {
    if (!validateForm()) return;

    setShowModal(false);
    const loaded = await loadRazorpay();
    if (!loaded) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/plan/submit-plan`,
        {
          ...formData,
          plan: selectedPlan.title,
          price: selectedPlan.price,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/payment/create-order`,
        { amount: selectedPlan.price },
        { headers: { "Content-Type": "application/json" } }
      );

      const data = res.data;
      if (!data?.order) {
        alert("Failed to create order");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Youtax",
        description: selectedPlan.title,
        order_id: data.order.id,
        handler: function (response) {
          alert("✅ Payment successful!");
          console.log(response);
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#003366",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment initiation error:", error);
      alert("❌ Something went wrong during payment.");
    }
  };

  return (
    <section id="Plans" className="mx-auto px-5 sm:px-20 py-16 text-center">
      <div>
        <h1 className="bg-[#003366] text-white px-4 py-1 rounded-lg text-xl font-semibold mb-10 inline-block">
          Our Plans
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border border-[#003366] rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between bg-white"
          >
            <div>
           <div className="flex justify-center">
  <h3 className="text-2xl font-semibold text-[#003366] mb-2 bg-[#ffbf00] px-4 py- rounded-lg inline-block">
    {plan.title}
  </h3>
</div>


              <p className="text-3xl font-bold text-black mb-1">
                ₹{plan.price}
              </p>
              <p className="text-gray-600 mb-4">{plan.duration}</p>

             <ul className="list-none list-inside space-y-4 text-[#231f20] font-medium text-lg">
  {plan.features.map((feature, i) => {
    let isCross = false;

    if (plan.title === "Essential" && i >= plan.features.length - 3) {
      isCross = true;
    } else if (plan.title === "Pro" && i === plan.features.length - 1) {
      isCross = true;
    }

    return (
      <li
  key={i}
  className={`flex items-center ${
    isCross
      ? "text-gray-400 hover:text-black"
      : "text-[#231f20]"
  }`}
>
  {isCross ? (
    <span className="w-5 h-5 flex justify-center items-center bg-red-500 text-[#f5f4f4] rounded-sm mr-3 font-bold">
      ✕
    </span>
  ) : (
    <span className="w-5 h-5 flex justify-center items-center bg-green-600 text-[#f5f4f4] rounded-sm mr-3 font-bold">
      ✓
    </span>
  )}
  {feature}
</li>

    );
  })}
</ul>
            </div>

            <button
              onClick={() => {
                setSelectedPlan(plan);
                setShowModal(true);
              }}
             className="mt-6 bg-[#ffbf00] text-white py-2 rounded-lg hover:bg-[#003366] transition"
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      <div className="text-left py-10">
        <p className="text-2xl font-semibold">Note -</p>
        <ul className="list-decimal pl-6 text-xl space-y-2 text-[#231f20]">
          <li>
            Entries include Sales Bills, Purchase Bills, and Bank Account
            Statements.
          </li>
          <li>
            The prices mentioned are subject to change. Please refer to our
            latest pricing details.
          </li>
        </ul>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)] flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl relative">
            <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>

            {selectedPlan && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Selected Plan
                </label>
                <input
                  type="text"
                  value={`${selectedPlan.title} - ₹${selectedPlan.price}`}
                  readOnly
                  className="w-full border px-3 py-2 rounded bg-gray-100 text-gray-800"
                />
              </div>
            )}

            <input
              type="text"
              placeholder="Name"
              className="w-full border px-3 py-2 mb-1 rounded"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && <p className="text-sm text-red-500 mb-2">{errors.name}</p>}

            <input
              type="email"
              placeholder="Email"
              className="w-full border px-3 py-2 mb-1 rounded"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && <p className="text-sm text-red-500 mb-2">{errors.email}</p>}

            <input
              type="tel"
              placeholder="Phone"
              className="w-full border px-3 py-2 mb-1 rounded"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            {errors.phone && <p className="text-sm text-red-500 mb-2">{errors.phone}</p>}

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded bg-gray-300 text-black"
              >
                Cancel
              </button>
              <button
                onClick={handlePaymentSubmit}
                className="px-4 py-2 rounded bg-[#003366] text-white"
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
