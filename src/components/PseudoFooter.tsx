import BlueButton from "./ui/BlueButton"


const PseudoFooter = () => {
  return (
    <div className="h-[55vh] w-ful flex items-center justify-center">

        <div className="flex flex-col gap-5 items-center justify-center">
            <h1 className="text-center text-[28px] font-semibold instrument-sans-font">
            Carfted for your all academic needs
            </h1>
            <BlueButton text="Get your Entry" />
        </div>
      
    </div>
  )
}

export default PseudoFooter
