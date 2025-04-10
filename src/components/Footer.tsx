import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react"
import { Link, useNavigate } from "react-router-dom";

function Footer() {

  const navigate = useNavigate()

  return (
    <footer className="bg-[#070707] flex items-center justify-center py-7 text-white">
      <div className="w-full mx-8 sm:mx-24 max-w-[74rem] flex flex-col lg:flex-row justify-between gap-7 items-start lg:items-start">
        
        <div>
            <h1 className="inter-font text-3xl sm:text-[2.5rem] text-[#A3A3A3]">
          <Link to="/">
            STUDY<span className="font-semibold">table</span>
          </Link>
        </h1>
        <p className="text-sm instrument-sans-font text-[#A3A3A3] font-normal">© Copyright 2025 Studytable</p>
        </div>

        <div className="flex flex-col lg:flex-row items-start sm:items-start gap-8 mt-12 lg:mt-2">
          <motion.button 
          whileHover={{
            rotate : 2,
            scale : 1.05
          }}
          onClick={()=>{
            navigate('/notice-board')
          }}
          className="bg-white flex items-center gap-2 px-5 py-2">
            <img alt="pin" src="/svgs/pin.svg" />
            <span className="instrument-sans-font font-semibold text-[#155DFC]">
              Notice Board
            </span>
          </motion.button>


        <div className="flex flex-col sm:flex-row items-start sm:items-start gap-8 sm:gap-14 lg:gap-8">
          <div>
            <p className="text-[20px] font-semibold text-left sm:text-left">Socials</p>
            <ul className="space-y-2">
              <li key="a">
                <a href="/instagram" className="flex items-center gap-2">
                  <IoLogoInstagram />
                  <span>Instagram</span>
                </a>
              </li>
              <li key="b">
                <a href="/whatsapp" className="flex items-center gap-2">
                  <FaWhatsapp />
                  <span>What&apos;s App</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[20px] font-semibold text-left sm:text-left">Blogs</p>
            <ul 
            onClick={() => {
              navigate('/blog')
            }}
            className="text-lg text-[#EDEDED] font-normal">
                <li key="1" className="cursor-pointer hover:border-b">How we plan learning session ?</li>
                <li key="2" className="cursor-pointer hover:border-b">How we plan assessment session ?</li>
                <li key="3" className="cursor-pointer hover:border-b">How we manage student life ?</li>
                <li key="4" className="cursor-pointer hover:border-b">The effective student</li>
            </ul>
          </div>
          </div>  
        </div>
      </div>
    </footer>
  );
}

export default Footer;