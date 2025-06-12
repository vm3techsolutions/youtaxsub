"use client";
import { useRouter } from "next/navigation";

export default function Plans() {
  const router = useRouter();

  const plans = [
    {
      title: "1-Day Visit",
      price: "₹2000",
      duration: "Per Day",
      features: [
        "1-Day Access",
        "Up to 250 entries/day",
        "1 Bookkeeping Officers (On site) ",
        "1 Accountant",
        "Technical Team",
        "Technical Team Support "
      ],
      link: "/checkout?plan=daily",
    },
    {
      title: "Monthly Plan",
      price: "₹7000",
      duration: "Per Month",
      features: [
        "4-Day Access",
        "Up to 1000 entries/month",
        "GST Return",
        "TDS Return",
        " Income Tax Return without Audit",
        "1 Bookkeeping Officers (On site) ",
        "1 Accountant",
        "Technical Team",
        "Technical Team Support "
      ],
      link: "/checkout?plan=monthly",
    },
    {
      title: "Yearly Plan",
      price: "₹60,000",
      duration: "Per Year",
      features: [
        "48-Day Access",
        "Up to 18,000 entries/year",
        "GST Return",
        "TDS Return",
        " Income Tax Return without Audit",
        "1 Bookkeeping Officers (On site) ",
        "1 Accountant",
        "Technical Team",
        "Technical Team Support "
      ],
      link: "/checkout?plan=yearly",
    },
  ];

  return (
    <section id="Plans" className="mx-auto px-5 sm:px-20 py-16 text-center ">
      <div>
        <h1 className="bg-[#E51D25] text-white px-4 py-1 rounded-lg text-xl font-semibold mb-10 inline-block ">
          Our Plans
        </h1>
      </div>

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

              <ul className="list-none list-inside space-y-4 text-gray-700 font-medium text-lg">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span
                      className="w-5 h-5 flex justify-center items-center bg-green-500 text-white rounded-sm mr-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {feature}
                  </li>
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
      <div className="text-left py-10">
  <p className="text-2xl font-semibold">
    Note -
  </p>
  <ul className="list-decimal pl-6 text-xl space-y-2">
    <li>
      Entries include Sales Bills, Purchase Bills, and Bank Account Statements.
    </li>
    <li>
      The prices mentioned are subject to change. Please refer to our latest pricing details.
    </li>
  </ul>
</div>

    </section>
  );
}