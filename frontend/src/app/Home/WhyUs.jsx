"use client";
export default function ServicesSection() {
  return (
    <section className="mx-auto bg-[#f5f4f4] px-5 sm:px-20 py-16 text-center">
      <div>
  {/* Service 2 */}
  <div className="flex flex-col md:flex-row gap-8 text-left">
    
    {/* Text Section - Increased Width */}
    <div className="md:w-[65%] p-5 sm:p-6">
       {/* Heading */}
       <div className="mb-6 text-center sm:text-start">
              <span className="bg-[#003366] text-white px-4 py-1 rounded-lg text-xl font-semibold">
                Why Us ?
              </span>
            </div>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-2xl md:text-3xl font-medium text-[#231f29] mb-12 ">
            Tired Of <br />
              <span className="text-[#003366]">Late Fees ? </span>
            </h2>

            <p className="text-lg">Late fees are frustrating, unnecessary, and often completely avoidable. Whether it’s a missed tax deadline, overdue GST filing, or forgotten ROC compliance, one thing’s for sure: they hurt your cash flow and peace of mind.</p>

            <h2 className="text-[#003366] text-2xl font-semibold mt-4">Here’s how we help you:</h2>
            
            <ul className="list-disc list-inside text-black text-lg leading-relaxed mt-3 font-semibold">
  <li>Automated Compliance Calendar</li>
  <li>  Proactive Alerts</li>
  <li>Full-Service Filing</li>
  <li>Personalized Compliance Plans</li>
  <li>Penalty Protection</li>
</ul>

    </div>

    {/* Image Section - Reduced Width & Height */}
    <div className="md:w-[35%] p-5 sm:p-6 flex justify-center items-start">
  <div className="flex flex-col items-center text-center">
    {/* Heading */}
    <span className="bg-[#003366] text-white px-4 py-1 rounded-lg text-xl font-semibold mb-3">
      How It Works
    </span>
    
    <span className="bg-[#003366] text-white w-10 h-10 flex items-center justify-center rounded-full text-sm sm:text-base my-5">
      01
    </span>
    
    <h3 className="text-[#003366] text-2xl font-semibold">Consult</h3>

    <span className="bg-[#003366] text-white w-10 h-10 flex items-center justify-center rounded-full text-sm sm:text-base my-5">
      02
    </span>
    
    <h3 className="text-[#003366] text-2xl font-semibold">Document Collection</h3>

    <span className="bg-[#003366] text-white w-10 h-10 flex items-center justify-center rounded-full text-sm sm:text-base my-5">
      03
    </span>
    
    <h3 className="text-[#003366] text-2xl font-semibold">Filing</h3>

    <span className="bg-[#003366] text-white w-10 h-10 flex items-center justify-center rounded-full text-sm sm:text-base my-5">
      04
    </span>
    
    <h3 className="text-[#003366] text-2xl font-semibold">Delivery</h3>
  </div>
</div>

  </div>
</div>

    </section>
  );
}
