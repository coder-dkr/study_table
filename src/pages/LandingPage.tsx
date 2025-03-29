import FAQs from "@/components/LandingComp/FAQs"; // Fixed case sensitivity
import Hero from "@/components/LandingComp/Hero";
import InfoContent from "@/components/LandingComp/InfoContent";
import PracticeBox from "@/components/LandingComp/PracticeBox";
import PseudoFooter from "@/components/PseudoFooter";


const LandingPage = () => {
  return (
   <div className="page overflow-hidden w-full">
     <Hero />
     <PracticeBox />
     <InfoContent />
     <FAQs />
     <PseudoFooter />
   </div>

  )
}

export default LandingPage;