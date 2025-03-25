import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
     <main className="flex-1">
         <Outlet />
     </main>
      <Footer />
    </>
  )
}

export default Layout
