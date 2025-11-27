"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative mx-auto px-5 md:px-16 py-16 flex flex-col md:flex-row gap-8 items-center md:items-start">
      
      {/* Left Background Vertical Text */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-4xl font-bold text-gray-500/10 tracking-widest hidden md:block ml-20 md:ml-64 2xl:ml-72 -mt-8 ">
        YOUTAX INDIA <br/> CONSULTING PVT. LTD.
      </div>

     

      {/* Left Column */}
      <div className="w-full md:w-[40%] sm:px-6 relative z-10">
        <h1 className="text-2xl md:text-4xl font-light leading-tight ">
          Simplify Your <br />
          <span className="text-[#003366] font-bold">Needs in Minutes!</span>
        </h1>

        <div className="mt-10">
          <Image
            src="/assets/simplify-left.png"
            alt="Affordable Corporate Audit Services"
            width={240}
            height={288}
            className="rounded-xl h-72 w-80 object-cover "
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-[60%] sm:px-10 relative z-10">
        <p className="text-[#231f20] text-xl">
          
        Welcome to  <strong>YOUTAX INDIA CONSULTING PVT. LTD. </strong>.
          your number one source for all types of  <strong>taxation services.</strong>We're dedicated to giving you the best of service for the <strong>growth of your business, </strong>with a professional team.
        </p>

        <div className="mt-7">
          <Image
            src="/assets/simplify-right.png"
            alt="Accountants in Baramati"
            width={500}
            height={300}
            className="rounded-xl object-cover w-full h-[50vh]"
          />
        </div>
      </div>
    </section>
  );
}
