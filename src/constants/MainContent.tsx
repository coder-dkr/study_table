import AcademicOrbitals from "@/components/LandingComp/graphics/Orbitals"
import {AnimatedBeamMultipleOutputDemo} from "@/components/LandingComp/graphics/Beam"
import SimpleChatBox from "@/components/LandingComp/graphics/Chat"
import { RoughNotation } from "react-rough-notation";


const MainInfoContent = [
    {
        "id" : 1,
        "title" : <>Unlimited <span className="text-[#155DFC]">Practice</span> session</>,
        "content": <>For topics and subjects you go through in your school and coaching every day, we create instant practice session specially made for your days need.<span className="font-medium"><RoughNotation animationDelay={10200} multiline={true} type="highlight" color="#CCE5FE" show={true}>Our innovative AI algorithm crafts batches of 20 questions, each accompanied by instant feedback and solutions - it's like having a Home tutor 24X7.</RoughNotation></span> </>,
       "component": <SimpleChatBox />
    },
    {
        "id" : 2,
        "title" : <>Personalized <span className="text-[#155DFC]">Assessment</span></>,
        "content": <>We measure your learning differently. Not just comparing you among your classmates and peers rather, how much you have learnt and how much have your skills in each subject have grown. We crate test based on your learning session and exam requirement to understand and modify study plan for you.<RoughNotation animationDelay={11000} multiline={true} type="highlight" color="#CCE5FE" show={true}>The test are unquietly created for each student improve and advance their respective knowledge.</RoughNotation></>,
        "component": <AnimatedBeamMultipleOutputDemo />
    },
    {
        "id" : 3,
        "title" : <><span className="text-[#155DFC]">Managing students</span> academic life</>,
        "content": <>There is more to study than just practicing giving test. To meet the requirement of exam, we need to carefully do the revision, repeatedly align our study plan and to understand students own learning curve. This all needs to be done along with schools test and other scholarship exams. We manage it all for you. So that you focus on learning and worry no more.</>,
        "component":  <AcademicOrbitals />
    },
]

export default MainInfoContent