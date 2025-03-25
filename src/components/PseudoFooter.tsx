import BlueButton from "./ui/BlueButton"


const PseudoFooter = () => {
  return (
    <div className="h-[55vh] w-ful flex items-center justify-center lg:h-[85vh]">

        <div className="flex flex-col gap-5 items-center justify-center lg:gap-9">
            <h1 className="text-center text-[28px] md:text-3xl font-semibold instrument-sans-font lg:text-7xl">
            Carfted for your all <br />
            academic needs
            </h1>
            <BlueButton text="Get your Entry" />
        </div>
      
    </div>
  )
}

export default PseudoFooter
