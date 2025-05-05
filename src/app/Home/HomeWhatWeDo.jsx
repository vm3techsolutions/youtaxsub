"use client";
import Link from "next/link"; // Import Link from next/link

export default function ServicesSection() {
  return (
    <section className="mx-auto px-5 sm:px-16 py-16 text-center">
      
      {/* Heading */}
      <div className="mb-6">
        <span className="bg-[#E51D25] text-white px-4 py-1 rounded-lg text-xl font-semibold">
          What We Do
        </span>
      </div>

      {/* Subtitle */}
      <h2 className="text-lg sm:text-2xl md:text-3xl font-medium text-gray-700 mb-12 px-2">
        Expert Help | Zero Stress | Maximum Savings
      </h2>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 text-left">
        
        {/* Card 1 */}
        <div className="bg-[#E51D25] rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
          <div>
            <div className="mb-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <span className="bg-white text-[#E51D25] w-10 h-10 flex items-center justify-center rounded-full font-bold border-2 text-sm sm:text-base">
                  01
                </span>
                <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl">
                  Hire An Accountant
                </h3>
              </div>
              <div className="w-28 sm:w-40 md:w-64 h-[1px] bg-white mt-2 ml-14 sm:ml-12 md:ml-14" />
            </div>

            <p className="text-white text-base sm:text-lg leading-relaxed mb-6">
              Managing your business finances efficiently is crucial for growth and compliance.
              Our flexible accountant hiring services allow you to acquire professional financial help
              based on your needs and financial constraints. Our staff of seasoned Chartered Accountants (CAs)
              is available to assist you, whether you need an accountant for a day, for a month or yearly basis.
            </p>
          </div>
         
        </div>

        {/* Card 2 */}
        <div className="bg-[#E51D25] rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
          <div>
            <div className="mb-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <span className="bg-white text-[#E51D25] w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm sm:text-base">
                  02
                </span>
                <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl">
                  End-To-End Business Consulting
                </h3>
              </div>
              <div className="w-28 sm:w-40 md:w-64 h-[2px] bg-white mt-2 ml-14 sm:ml-12 md:ml-14" />
            </div>

            <p className="text-white text-base sm:text-lg leading-relaxed mb-6">
              Our comprehensive business consulting services are designed to support entrepreneurs and established businesses throughout their journey. From initial registration to ongoing compliance, we offer a range of solutions tailored to your needs.
              Our team of experienced professionals is committed to providing personalized solutions to meet your business's unique requirements. Whether you're starting a new venture or looking to optimize your existing operations, we're here to help you achieve your goals.
            </p>
          </div>
         
        </div>
        <Link href="#Plans">
            <button className="mt-auto text-center bg-white text-[#E51D25] font-semibold py-2 px-4 rounded-lg hover:bg-[#E51D25] hover:text-white transition w-fit border-2">
              Book Now
            </button>
          </Link>
          </div>
    </section>
  );
}
