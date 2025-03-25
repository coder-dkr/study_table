import { createBrowserRouter, createRoutesFromElements ,Route } from 'react-router-dom'
import Layout from '../Layout'
import { LandingPage , NoticeBoard , BlogPage} from '../pages'


 const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path="/" element={<Layout />}>
        <Route path="" element={<LandingPage />} />
        <Route path="/notice-board" element={<NoticeBoard />} />
        <Route path="/blog" element={<BlogPage />} />
     </Route>
    </>
  )
 )


 export default router