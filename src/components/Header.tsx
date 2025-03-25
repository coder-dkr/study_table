import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
  return (
    <h1 
    onClick={() => {
        navigate('/')
    }}
    className="inter-font text-2xl">
     STUDY<b>table</b>
     </h1>
  )
}

export default Header
