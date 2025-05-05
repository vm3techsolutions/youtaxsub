"use client";

import { useRouter } from "next/navigation";

export default function Plans() {
  const router = useRouter();

  const plans = [
    {
      title: "Daily Plan",
      price: "₹49",
      duration: "Per Day",
      features: [
        "1-Day Access",
        "Basic Support",
        "Instant Filing",
        "No Commitment",
      ],
      link: "/checkout?plan=daily",
    },
    {
      title: "Monthly Plan",
      price: "₹499",
      duration: "Per Month",
      features: [
        "30-Day Access",
        "Priority Support",
        "GST & Tax Filing",
        "Save 20%",
      ],
      link: "/checkout?plan=monthly",
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
      link: "/checkout?plan=yearly",
    },
  ];

  return (
    <section className="mx-auto px-5 sm:px-20 py-16 text-center " id="plan">
        <div>
        <h1 className="bg-[#E51D25] text-white px-4 py-1 rounded-lg text-xl font-semibold mb-10 inline-block ">
          Our Plans
        </h1>
      </div>
      {/* <h2 className="text-3xl font-bold text-gray-800 mb-3">Simple, Transparent Pricing</h2>
      <p className="text-lg text-gray-600 mb-12">No hidden fees. No surprises.</p> */}

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
              onClick={() => router.push(plan.link)}
              className="mt-6 bg-[#E51D25] text-white py-2 rounded-lg hover:bg-[#c9181f] transition"
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
