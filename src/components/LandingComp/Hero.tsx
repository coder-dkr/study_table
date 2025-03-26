import BlueButton from "@/components/ui/BlueButton";
import Header from "../Header";
import {motion} from 'motion/react'
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate =  useNavigate()
  return (
    <header className="relative">
      <div className="absolute -z-1 w-48 h-48 lg:w-80 lg:h-80 bg-blue-100 blur-[50px] lg:blur-[70px] -left-10 -top-4 " />
      <div className="absolute -z-1 w-48 h-48 lg:w-80 lg:h-80 bg-blue-100 blur-[50px] lg:blur-[70px] -right-10 bottom-0 " />
      <div className="container mx-auto flex flex-col items-center py-9 px-6 pb-3 gap-y-16">
        <Header/>

        <div className="space-y-6">
          <h2 className="text-center instrument-sans-font text-3xl md:text-[32px] lg:text-[3.5rem] font-semibold">
            <span className="text-[#155DFC]">Optimize</span> Your
            <p>Performance For</p>
            <span className="text-[#155DFC]">JEE, NEET,</span> and{" "}
            <span className="text-[#155DFC]">Boards</span>
          </h2>


        <p className="text-[#7B7B7B] text-center text-lg instrument-sans-font leading-[139%] lg:max-w-2xl">
          Your personal AI-Tutor for all academic needs. Whether its school
          exam, boards or competitive exams we plan, manage, and help you clear
          your doubts instantly. For students of class 10th, 11th and 12th
          (CBSE) and preparing for all medical or engineering entrance exams
        </p>
        </div>

        <div className="flex flex-col md:flex-row md:gap-16 items-center gap-7">
          <BlueButton 
          onClick={() => navigate('/sign-up')}
          text="Apply for admission" />
          <motion.button 
           whileHover={{
            fontWeight: "600",
          }}
          onClick={() => navigate('/sign-in')}
          className="underline text-[#155DFC] text-lg inter-font font-normal">
            Sign In -&gt;
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
