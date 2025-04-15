import AboutCompany from "./Home/AboutCompany";
import HomeSimplify from "./Home/HomeSimplify";
import HomeWhatWeDo from "./Home/HomeWhatWeDo";
import Testimonial from "./Home/Testimonial";
import WhyChooseUs from "./Home/WhyChooseUs";
import WhyUs from "./Home/WhyUs";

export default function Home(){
  return(
    <div>
      <HomeSimplify/>
      <HomeWhatWeDo/>
      <AboutCompany/>
      <WhyUs/>
      <WhyChooseUs/>
      <Testimonial/>
    </div>
  )
}