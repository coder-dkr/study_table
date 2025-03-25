import BlueButton from "@/components/ui/BlueButton"


const PracticeBox = () => {
  return (
    <div className="px-6 flex items-center flex-col gap-y-4.5">

      <div className="flex items-center gap-3">
        <img src="./svgs/pen.svg" alt="pen svg" />
        <span className="text-[#155DFC] font-semibold text-[40px] instrument-sans-font">+</span>
        <img src="./svgs/trophy.svg" alt="trophy svg" />
      </div>

      <h1 className="instrument-sans-font text-3xl font-semibold text-center">
      Practice Previous Year Paper & Win Prices
      </h1>

      <p className="text-[#646464] text-base font-normal instrument-sans-font">35 year JEE and NEET 15 year Boards paper</p>
      <BlueButton text="Practice for Free" />
    </div>
  )
}

export default PracticeBox
