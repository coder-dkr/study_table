import FAQs from "@/components/LandingComp/FAQs"; // Fixed case sensitivity
import Header from "@/components/LandingComp/Header";
import InfoContent from "@/components/LandingComp/InfoContent";
import PracticeBox from "@/components/LandingComp/PracticeBox";
import PseudoFooter from "@/components/PseudoFooter";

const LandingPage = () => {
  return (
   <div className="space-y-20 overflow-hidden">
     <Header />
     <InfoContent />
     <PracticeBox />
     <FAQs />
     <PseudoFooter />
   </div>
  )
}

export default LandingPage;