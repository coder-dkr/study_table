import Footer from "@/components/Footer"
import { Outlet } from "react-router-dom"
import ScrollToTop from "./utils/ScrollToTop"


const Layout = () => {
  return (
    <>
    <ScrollToTop />
     <main className="flex-1">
         <Outlet />
     </main>
      <Footer />
    </>
  )
}

export default Layout
