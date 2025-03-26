import {motion} from 'motion/react'

const BlueButton = ({text , onClick} : {text : string, onClick? : () => void}) => {
  return (
    <motion.button 
    whileHover={{
      rotate : 2,
      scale : 1.05
    }} onClick={onClick} className="bg-[#155DFC] text-[#E5E5E5] font-medium text-lg rounded-md px-9 lg:px-7 py-2.5 lg:py-2 shadow-xl">
    {text}          
     </motion.button>
  )
}

export default BlueButton
