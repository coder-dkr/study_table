import BlueButton from "@/components/ui/BlueButton";
import Header from "../Header";

const Hero = () => {
  return (
    <header className="relative">
      <div className="absolute -z-1 w-48 h-48 bg-blue-100 blur-[50px] -left-10 -top-4 " />
      <div className="absolute -z-1 w-48 h-48 bg-blue-100 blur-[50px] -right-10 -bottom-4 " />
      <div className="container mx-auto flex flex-col items-center py-9 px-6 gap-y-16">
        <Header/>

        <div>
          <h2 className="text-center instrument-sans-font text-3xl font-semibold">
            <span className="text-[#155DFC]">Optimize</span> Your
            <p>Performance For</p>
            <span className="text-[#155DFC]">JEE, NEET,</span> and{" "}
            <span className="text-[#155DFC]">Boards</span>
          </h2>
        </div>

        <p className="text-[#7B7B7B] text-center text-lg instrument-sans-font leading-[139%]">
          Your personal AI-Tutor for all academic needs. Whether its school
          exam, boards or competitive exams we plan, manage, and help you clear
          your doubts instantly. For students of class 10th, 11th and 12th
          (CBSE) and preparing for all medical or engineering entrance exams
        </p>

        <div className="flex flex-col items-center gap-7">
          <BlueButton text="Apply for admission  " />
          <button className="underline text-[#155DFC] text-lg inter-font font-normal">
            Sign In -&gt;
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
