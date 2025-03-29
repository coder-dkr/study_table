import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { memo, useRef, useState, useEffect } from "react";
import useScreen from "@/hooks/useScreen";

enum Icons {
  homework = "Homework",
  revision = "Revision",
  break = "Break",
  time = "Time",
  school = "School",
  exam = "Exam"
}

const Icotton = memo(({ text }: { text: Icons }) => {
  return (
    <div className="border-[0.7px] border-[#155DFC] text-[#155DFC] bg-[#E5EDFF] rounded-3xl text-xs sm:text-sm px-1.5 py-1 sm:px-3 sm:py-2">
      {text}
    </div>
  );
});

Icotton.displayName = 'Icotton';

const AcademicOrbitals = memo(() => {
  const componentRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
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

  useEffect(() => {
    console.log("Component is in view:", isInView);
  }, [isInView]);

  const {isMobile} = useScreen()

  return (
    <div
      ref={componentRef}
      className="relative flex h-[370px] flex-col items-center justify-center overflow-hidden"
    >
      <OrbitingCircles 
      willRotate={isInView}
      radius={isMobile ? 120 : 160}>
        <Icotton text={Icons.homework} />
        <Icotton text={Icons.break} />
        <Icotton text={Icons.revision} />
      </OrbitingCircles>
      <OrbitingCircles
       willRotate={isInView}
       radius={isMobile ? 50 : 90} reverse speed={2}>
        <Icotton text={Icons.exam} />
        <Icotton text={Icons.time} />
        <Icotton text={Icons.school} />
      </OrbitingCircles>
    </div>
  );
});

AcademicOrbitals.displayName = 'AcademicOrbitals';

export default AcademicOrbitals ;

