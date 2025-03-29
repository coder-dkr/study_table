
import { motion } from 'motion/react';;
import {  useRef } from 'react';

const PageDropWrapper = ({ children, imageSrc } : { children : React.ReactNode , imageSrc : string}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
  
    const handleAnimationComplete = () => {
      if (contentRef.current) {
        contentRef.current.className = '';
      }
      if (imageRef.current) {
        imageRef.current.className = '';
      }
    };
  return (
    <div className="relative w-full min-h-screen">
    <motion.div
      ref={contentRef}
      onAnimationComplete={handleAnimationComplete}
      className="absolute inset-0 flex flex-col"
    >
      {children}
    </motion.div>
    <motion.div
      ref={imageRef}
      initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      animate={{ clipPath: 'inset(0% 50% 0% 50%)' }}
      transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
      onAnimationComplete={handleAnimationComplete}
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${imageSrc})` }}
    />
  </div>
  )
};

export default PageDropWrapper;
