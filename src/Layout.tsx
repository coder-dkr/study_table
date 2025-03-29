import Footer from "@/components/Footer"
import { Outlet } from "react-router-dom"
import ScrollToTop from "./utils/ScrollToTop"
import PageDropWrapper from "./Wrappers/PageDropDown"


const Layout = () => {
  return (
    <>
     <PageDropWrapper imageSrc="/svgs/trophy.svg">
    <div className="w-full">
    <ScrollToTop />
     <main className="flex-1">
         <Outlet />
     </main>
      <Footer />
      </div>
      </PageDropWrapper>
    </>
  )
}

export default Layout
