"use client";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
export default function ServicesSection() {
  return (
    <section className="mx-auto px-5 sm:px-20 py-16 text-left" id="about">
      <div>
        {/* Service 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2  text-left h-full">
          {/* Card 1 */}
          <div className=" p-5 sm:p-6 ">
            {/* Heading */}
            <div className="mb-6 text-center sm:text-start">
              <span className="bg-[#003366] text-white px-4 py-1 rounded-lg text-xl font-semibold">
                About Company
              </span>
            </div>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-4xl font-light leading-tight mb-12 ">
              Simplifying Your Finances, <br />
              <span className="text-[#003366] font-bold">Empowering Your Growth!</span>
            </h2>

            <div className="flex space-x-10 ">
              <div>
                <h1 className="text-8xl font-bold text-[#003366]">8+</h1>
              </div>

              <div className="border-2 border-[#2B2A28] py-2 px-4 rounded-lg">
                <h2 className="text-lg sm:text-2xl md:text-3xl font-medium text-[#231f20]  ">
                  Year Of <br />
                  <span className="text-[#003366]">Expertise</span>
                </h2>
              </div>
            </div>
          </div>

          {/* Card 2 */}

          <div className="mt-2">
            <Image
              src="/assets/About2.png"
              alt="Corporate Audit Services"
              width={500}
              height={300}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="py-5">
  {/* Service 2 */}
  <div className="flex flex-col md:flex-row gap-8 text-left">
    
    {/* Text Section - Increased Width */}
    <div className="md:w-[65%] p-5 sm:p-6 ">
      <p className="text-xl text-[#231f20]">
        The team at the firm has dedicated and experienced professionals and associates like Chartered Accountants, Company Secretary and Consultants to provide end to end services to your business.
        Founded in 2018 by Mr. Nandkishor And Mrs. Sonali Devadnye, YOUTAX INDIA CONSULTING PRIVATE LIMITED has come a long way from its beginnings in Hadapsar Pune. When they first started out, their passion for providing in time delivery of quality services in the field of TAX so that YOUTAX INDIA CONSULTING PRIVATE LIMITED can offer you quality services for your business for future growth. We now serve customers all over Maharashtra.
      </p>

      <div className="flex flex-wrap gap-16 items-center text-lg font-medium text-[#231f20] mt-20">
        <div className="flex items-center gap-2">
          <FaCheck className="text-white white bg-[#003366] rounded-full py-1 px-1" />
          <span>Consistency</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCheck className="text-white bg-[#003366]  rounded-full py-1 px-1" />
          <span>Strategy</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCheck className="text-white bg-[#003366]  rounded-full py-1 px-1" />
          <span>Investment</span>
        </div>
      </div>
    </div>

    {/* Image Section - Reduced Width & Height */}
    <div className="md:w-[35%] mt-2 flex justify-center items-start">
      <Image
        src="/assets/About1.png"
        alt="Financial Audit for Companies"
        width={300}
        height={250}
        className="rounded-xl object-cover h-[60vh] 2xl:h-[50vh] w-full"
      />
    </div>
  </div>
</div>

    </section>
  );
}
