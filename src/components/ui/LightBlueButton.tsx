

const LightBlueButton = ({text , onClick , disabled = false} : {text : string, onClick? : () => void , disabled?: boolean}) => {
  return (
    <button disabled={disabled} onClick={onClick} className="bg-[#155DFC38] text-[#155DFC] font-medium text-lg rounded-md px-8 py-2.5 shadow-xl">
            {text}
            </button>
  )
}

export default LightBlueButton
