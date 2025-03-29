
import {motion} from 'motion/react'

const LightBlueButton = ({text , onClick , disabled = false} : {text : string, onClick? : () => void , disabled?: boolean}) => {
  return (
    <motion.button 
    whileHover={{
      rotate : -2,
      scale : 1.05}}
     disabled={disabled} onClick={onClick} className="bg-[#155DFC38] text-[#155DFC] font-medium text-lg rounded-md px-8 lg:px-6 py-2.5 lg:py-2 shadow-xl">
            {text}
    </motion.button>
  )
}

export default LightBlueButton
