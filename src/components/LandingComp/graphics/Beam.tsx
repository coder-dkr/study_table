import React, { forwardRef, useRef, useEffect, memo } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Icontton = memo(forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        `z-10 flex ${ children === "STUDYtable" ? "max-w-52" : "max-w-24" } items-center justify-center border border-[#155DFC] px-3 py-1.5 bg-[#E5EDFF] text-[#155DFC] font-medium rounded-md text-center text-sm`,
        className,
      )}
    >
      {children}
    </div>
  );
}));

const LastIcontton = memo(forwardRef<
HTMLDivElement,
{ className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
        ref={ref}
        className={cn(
            "z-10 flex max-w-24 items-center justify-center border border-border px-3 py-2 bg-[#155DFC] text-[#E5E5E5] font-medium rounded-md text-center text-sm",
            className,
        )}
        >
      {children}
    </div>
  );
}));

Icontton.displayName = "Icontton";
LastIcontton.displayName = "LastIcontton";

export function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const comporef = useRef<HTMLDivElement>(null);

  // const [shouldshow,setShouldShow] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // setShouldShow(true)
          console.log("Component is in view");
        }
        // else{
        //   setShouldShow(false)
        // }
      },
      { threshold: 0.5 }
    );

    const variable = comporef.current

    if (variable) {
      observer.observe(variable);
    }

    return () => {
      if (variable) {
        observer.unobserve(variable);
      }
    };
  }, []);

  return (
    <div
      className={cn(
        "relative flex h-[300px]  items-center justify-center overflow-hidden sm:p-10 scale- sm:scale-100",
        className,
      )}
      ref={containerRef}
    >
      <div
        ref={comporef}
        className="flex size-full max-w-lg flex-row items-stretch justify-between gap-2 sm:gap-16"
      >
        <div className="flex flex-col justify-center gap-9">
          <Icontton ref={div1Ref}>
            JEE/NEET Exam
          </Icontton>
          <Icontton ref={div2Ref}>
            Board Exam
          </Icontton>
          <Icontton ref={div3Ref}>
            Other Exam
          </Icontton>
        </div>
        <div className="flex flex-col justify-center">
          <Icontton ref={div4Ref}>
            STUDYtable
          </Icontton>
        </div>
        <div className="flex flex-col justify-center">
          <LastIcontton ref={div5Ref}>
            Student
          </LastIcontton>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        showLight={false}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
        showLight={false}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        showLight={false}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div5Ref}
        showLight={false}
      />
    </div>
  );
}
