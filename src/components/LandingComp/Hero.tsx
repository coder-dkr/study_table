"use client"
import { useEffect, useState } from "react";
import BlueButton from "@/components/ui/BlueButton";
import Header from "../Header";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import TutorButton from "../ui/TutorButton";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Hero = () => {
  const navigate = useNavigate();
  const [isTrue , setIstrue] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIstrue(true)
    },500)

    return () => {
      clearTimeout(timeout)
    }
  },[isTrue])
  return (
    <header className="relative min-h-screen flex justify-center page_section">
      <div className="absolute -z-1 w-48 h-48 lg:w-80 lg:h-80 bg-blue-100 blur-[50px] lg:blur-[70px] -left-10 -top-4 " />
      <div className="absolute -z-1 w-48 h-48 lg:w-80 lg:h-80 bg-blue-100 blur-[50px] lg:blur-[70px] -right-10 bottom-0 " />
      <div className="absolute mx-auto flex flex-col items-center py-9 px-6 pb-3 gap-y-16">
        <Header />
      </div>
      <div className="container mx-auto flex flex-col items-center py-9 px-6 pb-3 gap-y-16 justify-center relative">
        <div className="absolute top-[7.4rem] sm:top-1/5">
          <TutorButton text="AI-Home Tutor" />
        </div>
        <div className="space-y-6">
          <h2 className="text-center instrument-sans-font text-3xl md:text-[32px] lg:text-[3.5rem] font-semibold">
            <RoughNotationGroup  show={isTrue && true}>
            <span className="text-[#155DFC]"><RoughNotation type="underline" strokeWidth={4} show={true} order="1">Optimize</RoughNotation></span> Your
            <p>Performance For</p>
            <span className="text-[#155DFC]"><RoughNotation  type="highlight" color="#CCE5FE" show={true} order="2">JEE, NEET,</RoughNotation></span> and{" "}
            <span className="text-[#155DFC]"><RoughNotation  type="highlight" color="#CCE5FE" show={true}>Boards</RoughNotation></span>
            </RoughNotationGroup>
          </h2>

          <p className="text-[#7B7B7B] text-center text-lg instrument-sans-font leading-[139%] lg:max-w-2xl">
            Your personal AI-Tutor for all academic needs. Whether its school
            exam, boards or competitive exams we plan, manage, and help you
            clear your doubts instantly. For students of class 10th, 11th and
            12th (CBSE) and preparing for all medical or engineering entrance
            exams
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:gap-16 items-center gap-7">
          <BlueButton
            onClick={() => navigate("/sign-up")}
            text="Apply for admission"
          />
          <motion.button
            whileHover={{
              fontWeight: "600",
            }}
            onClick={() => navigate("/sign-in")}
            className="underline text-[#155DFC] text-lg inter-font font-normal"
          >
            Sign In -&gt;
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
