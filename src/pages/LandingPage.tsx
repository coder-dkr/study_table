import FAQs from "@/components/LandingComp/FAQs"; // Fixed case sensitivity
import Hero from "@/components/LandingComp/Hero";
import InfoContent from "@/components/LandingComp/InfoContent";
import PracticeBox from "@/components/LandingComp/PracticeBox";
import PseudoFooter from "@/components/PseudoFooter";

const LandingPage = () => {
  return (
   <div className="space-y-20 md:space-y-28 lg:space-y-44 overflow-hidden">
     <Hero />
     <PracticeBox />
     <InfoContent />
     <FAQs />
     <PseudoFooter />
   </div>
  )
}

export default LandingPage;