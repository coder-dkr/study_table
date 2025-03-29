
import { SparklesText } from "@/components/magicui/sparkles-text";

const TutorButton = ({text} : {text : string}) => {
  return (
    <button className="text-[#155DFC] border border-[#155DFC] bg-[#155DFC26] flex items-center gap-1 px-3 py-2 rounded-full instrument-sans-font text-base">
        <img className="w-5 h-5" src="/svgs/stars.svg" />
        <SparklesText className="text-sm sm:text-lg font-light transition-all duration-150" text={text} />
    </button>
  )
}

export default TutorButton
