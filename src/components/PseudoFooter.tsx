import BlueButton from "./ui/BlueButton"
import { RoughNotation } from "react-rough-notation"
import { useEffect, useRef , useState } from "react";

const PseudoFooter = () => {
    const componentRef = useRef(null)
    const [ isInView , SetIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        SetIsInView(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    const varibale = componentRef.current

    if (varibale) {
      observer.observe(varibale);
    }

    return () => {
      if (varibale) {
        observer.unobserve(varibale);
      }
    };
  }, [componentRef]);
  return (
    <div className="min-h-[50vh] md:min-h-[100vh] w-full page_section md:flex  items-center justify-center">

        <div className="flex flex-col gap-5 items-center justify-center lg:gap-16">
            <h1 
            ref={componentRef}
            className="text-center text-[28px] md:text-3xl font-semibold instrument-sans-font lg:text-8xl">
              <RoughNotation multiline={true} type="highlight" color="#155DFC15" strokeWidth={4} animationDelay={500} order="1" show={isInView && true}>
               Carfted 
            </RoughNotation>{" "}
            for your all <br />
            <RoughNotation multiline={true} type="highlight" color="#155DFC15" strokeWidth={4} animationDelay={500} show={isInView && true}>
            academic needs
            </RoughNotation>
           
            </h1>
            <BlueButton text="Get your Entry" />
        </div>
      
    </div>
  )
}

export default PseudoFooter
