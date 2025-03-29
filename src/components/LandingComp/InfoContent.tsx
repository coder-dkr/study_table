import { JSX, useEffect , useState , useRef } from "react";
import MainInfoContent from "@/constants/MainContent";
import { motion } from "motion/react";
import useScreen from "@/hooks/useScreen";
import { RoughNotation } from "react-rough-notation";

interface InfoContentProps {
  id: number;
  title: string | JSX.Element;
  content: string | JSX.Element;
  component: JSX.Element;
}

const InfoContent = () => {

  const {isDesktop} = useScreen()
  const componentRef = useRef<HTMLDivElement>(null)
  const [isInView , SetIsInView] = useState(false)

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
    <section className="px-6 max-w-xl lg:max-w-[90rem] mx-auto space-y-12 lg:space-y-32 page_section">
      {MainInfoContent.map((info: InfoContentProps, index : number) => (
        <div key={info.id} className={`lg:flex ${index % 2 !== 0 && 'flex-row-reverse'} lg:items-center lg:justify-between`}>
         <div className="text-left space-y-5">
         <h2 className="text-[22px] lg:text-4xl font-semibold instrument-sans-font">
            {info.title}
          </h2>
          <div className={`mt-6 ${isDesktop ? 'hidden' : 'block w-auto'}`}>
          {info.component}
         </div>
          <p className="text-[#7B7B7B] text-sm leading-[20.94px] lg:leading-8.5 font-normal instrument-sans-font lg:text-[22px] lg:max-w-xl">
            {info.content}
          </p>
         </div>

         <div className={`mt-6 ${!isDesktop ? 'hidden  w-auto' : 'hidden lg:block h-[300px]  w-[500px]'}`}>
          {info.component}
         </div>
        </div>
      ))}

      <div 
      ref={componentRef}
      className="py-3 px-4 border-[1.5px] border-[#155DFC] space-y-0 rounded-2xl mx-auto instrument-sans-font text-2xl lg:px-7 lg:py-10 lg:space-y-4">
     
        <h2 className="text-2xl font-semibold instrument-sans-font lg:text-[38px]">How we come to this?</h2>
        <p className="text-left text-sm font-normal text-[#333333] leading-[22.04px] lg:leading-[34px] instrument-sans-font mt-3 lg:text-[22px] max-w-xl">
        We observed and researched for three years in a variety of student. Where The best needs more attention to do better and the student struggling needs more attention to improve their own abilities. All students need personal attention. Based on the notion of <RoughNotation type="box"
         strokeWidth={2} animationDelay={500} color="#155DFC" show={isInView && true}>"Personal attention"</RoughNotation> we have built our algorithm and Ai tutor to cater each children uniquely…
        </p>

        <motion.button
          whileHover={{
            letterSpacing: "2px",
          }}
          className="font-medium text-[12.5px] lg:text-xl text-[#155DFC] border-b mt-2"
        >
          Read the full story -&gt;
        </motion.button>
      </div>
    </section>
  );
};

export default InfoContent;
