import AboutCompany from "./Home/AboutCompany";
import HomeSimplify from "./Home/HomeSimplify";
import HomeWhatWeDo from "./Home/HomeWhatWeDo";
import Plan from "./Home/Plan";
import Testimonial from "./Home/Testimonial";
import WhyChooseUs from "./Home/WhyChooseUs";
import WhyUs from "./Home/WhyUs";

export const metadata = {
  title: "Trusted Tax & Accounting Experts in Pune",
  description: "Professional CA services in Pune—GST, ITR, TDS, bookkeeping. Trusted by SMEs. Book a consultation today!",
  other: {
    "google-site-verification": "6bFyyRDkmHW03sEwvV5QHCco-xMNhhcyxkJ1oIegQ8Y", 
  },
};

export default function Home(){
  return(
    <>

    <div>
      <HomeSimplify/>
      <HomeWhatWeDo/>
      <AboutCompany/>
      <WhyUs/>
      <WhyChooseUs/>
      <Testimonial/>
      <Plan/>
    </div>
    </>
    
  )
}