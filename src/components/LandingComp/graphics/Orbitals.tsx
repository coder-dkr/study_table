

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

enum Icons  {
    homework = "Homework",
    revision = "Revision",
    break = "Break",
    time = "Time",
    school = "School",
    exam = "Exam"
}

const Icotton = ({text} : {text : Icons}) => {
    return (
        <div className="border-[0.7px] border-[#155DFC] text-[#155DFC] bg-[#E5EDFF] rounded-3xl text-sm px-3 py-2">
            {text}
        </div>
    )
}

function AcademicOrbitals() {
  return (
    <div className="relative flex h-[370px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles radius={160} iconSize={40}>
        <Icotton text={Icons.homework} />
        <Icotton text={Icons.break} />
        <Icotton text={Icons.revision} />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={90} reverse speed={2}>
      <Icotton text={Icons.exam} />
        <Icotton text={Icons.time} />
        <Icotton text={Icons.school} />
      </OrbitingCircles>
    </div>
  );
}

export default AcademicOrbitals

