import { JSX } from "react";
import MainInfoContent from "@/constants/MainContent";
import { motion } from "motion/react";

interface InfoContentProps {
  id: number;
  title: string | JSX.Element;
  content: string | JSX.Element;
  image_url: string;
}

const InfoContent = () => {
  return (
    <section className="px-6 space-y-12">
      {MainInfoContent.map((info: InfoContentProps) => (
        <div key={info.id} className="text-left space-y-5">
          <h2 className="text-[22px] font-semibold instrument-sans-font">
            {info.title}
          </h2>
          <img src={info.image_url} alt="chat svg" />
          <p className="text-[#7B7B7B] text-sm leading-[20.94px] font-normal instrument-sans-font">
            {info.content}
          </p>
        </div>
      ))}

      <div className="py-3 px-4 border-[1.5px] border-[#155DFC] space-y-0 rounded-2xl mx-auto instrument-sans-font text-2xl">
        <h2 className="text-2xl font-semibold instrument-sans-font">How we come to this?</h2>
        <p className="text-left text-sm font-normal text-[#333333] leading-[22.04px]  instrument-sans-font mt-3">
        We observed and researched for three years in a variety of student. Where The best needs more attention to do better and the student struggling needs more attention to improve their own abilities. All students need personal attention. Based on the notion of “Personal attention” we have built our algorithm and Ai tutor to cater each children uniquely…
        </p>

        <motion.button
          whileHover={{
            letterSpacing: "2px",
          }}
          className="font-medium text-[12.5px] text-[#155DFC] border-b mt-2"
        >
          Read the full story -&gt;
        </motion.button>
      </div>
    </section>
  );
};

export default InfoContent;
