"use client";

import BlueButton from "@/components/ui/BlueButton"
import useScreen from "@/hooks/useScreen"
import { useRef , useEffect} from "react";
import { useInView } from "motion/react";
import { Confetti, type ConfettiRef } from "@/components/magicui/confetti";
import { RoughNotation } from "react-rough-notation";


const PracticeBox = () => {
  const confettiRef = useRef<ConfettiRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isMobile, isTablet } = useScreen();
  
  const isInView = useInView(containerRef, {
    margin: "0px 0px -60% 0px", // Triggers when 40% of component is visible
    once: false // Allows it to trigger every time it comes into view
  });

  useEffect(() => {
    if (isInView && confettiRef.current) {
      confettiRef.current.fire({});
    }
  }, [isInView]);

  return (
    <div 
    ref={containerRef}
    className="relative min-h-screen md:min-h-aut flex items-center flex-col gap-y-4.5 justify-center page_section">

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-50 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
          }
        }
      />
      <div className="flex items-center gap-3">
        <img src="./svgs/pen.svg" alt="pen svg" />
        <span className="text-[#155DFC] font-semibold text-[40px] instrument-sans-font">+</span>
        <img src="./svgs/trophy.svg" alt="trophy svg" />
      </div>

      <h1 className="instrument-sans-font text-3xl lg:text-[44px] font-semibold text-center max-w-[38rem]">
      Practice Previous Year 
      {isMobile && <br />}
      Paper {isTablet && <br />}<RoughNotation type="underline" color="hotpink" strokeWidth={5} animationDelay={500} order="1" show={isInView && true}>
            & Win Prices
            </RoughNotation>{" "} 
      </h1>

      <p className="text-[#646464] text-base font-normal instrument-sans-font lg:text-[26px]">35 year JEE and NEET 15 year Boards paper</p>
      <BlueButton text="Practice for Free" />
    </div>
  )
}

export default PracticeBox