import BlueButton from "@/components/ui/BlueButton";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";


const Topbar = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between lg:max-w-7xl items-center gap-5">
        <Header />
        <BlueButton 
        onClick={() => navigate('/sign-up')}
        text="Apply for admission" />
    </div>
  )
}

export default Topbar
