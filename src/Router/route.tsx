import { createBrowserRouter, createRoutesFromElements ,Route } from 'react-router-dom'
import Layout from '../Layout'
import { LandingPage , NoticeBoard} from '../pages'


 const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path="/" element={<Layout />}>
        <Route path="" element={<LandingPage />} />
        <Route path="/notice-board" element={<NoticeBoard />} />
     </Route>
    </>
  )
 )


 export default router