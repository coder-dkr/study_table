import BlueButton from "./ui/BlueButton"


const PseudoFooter = () => {
  return (
    <div className="min-h-[50vh] md:min-h-[100vh] w-full page_section md:flex  items-center justify-center">

        <div className="flex flex-col gap-5 items-center justify-center lg:gap-16">
            <h1 className="text-center text-[28px] md:text-3xl font-semibold instrument-sans-font lg:text-8xl">
            Carfted for your all <br />
            academic needs
            </h1>
            <BlueButton text="Get your Entry" />
        </div>
      
    </div>
  )
}

export default PseudoFooter
