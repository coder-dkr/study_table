import BlueButton from "@/components/ui/BlueButton";
import Header from "@/components/Header";


const Topbar = () => {
  return (
    <div className="flex flex-col items-center gap-5">
        <Header />
        <BlueButton text="Apply for admission" />
    </div>
  )
}

export default Topbar
