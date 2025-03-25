import BlueButton from "@/components/ui/BlueButton"
import useScreen from "@/hooks/useScreen"

const PracticeBox = () => {

  const {isMobile , isTablet} = useScreen()

  return (
    <div className="px-6 flex items-center flex-col gap-y-4.5">

      <div className="flex items-center gap-3">
        <img src="./svgs/pen.svg" alt="pen svg" />
        <span className="text-[#155DFC] font-semibold text-[40px] instrument-sans-font">+</span>
        <img src="./svgs/trophy.svg" alt="trophy svg" />
      </div>

      <h1 className="instrument-sans-font text-3xl lg:text-[44px] font-semibold text-center max-w-[38rem]">
      Practice Previous Year 
      {isMobile && <br />}
      Paper {isTablet && <br />} & Win Prices
      </h1>

      <p className="text-[#646464] text-base font-normal instrument-sans-font lg:text-[26px]">35 year JEE and NEET 15 year Boards paper</p>
      <BlueButton text="Practice for Free" />
    </div>
  )
}

export default PracticeBox
