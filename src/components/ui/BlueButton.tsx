const BlueButton = ({text , onClick} : {text : string, onClick? : () => void}) => {
  return (
    <button onClick={onClick} className="bg-[#155DFC] text-[#E5E5E5] font-medium text-lg rounded-md px-9 lg:px-7 py-2.5 lg:py-2 shadow-xl">
    {text}          
     </button>
  )
}

export default BlueButton
