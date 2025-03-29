import { createBrowserRouter, createRoutesFromElements ,Route } from 'react-router-dom'
import Layout from '../Layout'
import { LandingPage , NoticeBoard , BlogPage , SignUp , SignIn , NotFound} from '../pages'



 const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path="/" element={<Layout />}>
        <Route path="" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/notice-board" element={<NoticeBoard />} />
        <Route path="/blog" element={<BlogPage />} />
     </Route>
     <Route path="*" element={<NotFound />} />
    </>
  )
 )


 export default router