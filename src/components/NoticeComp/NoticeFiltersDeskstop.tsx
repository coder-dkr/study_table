import NoticeCard from "./NoticeCard";
import DeskstopSidebar from "@/components/DesktopSideBar";
import NoticeList from "@/constants/NoticeSideBarList";
import { notice } from "@/constants/Notices";
import useScreen from "@/hooks/useScreen";
import BlueButton from "../ui/BlueButton";
import { useNavigate } from "react-router-dom";


const NoticeFiltersDeskstop = () => {
    const {isLargest} = useScreen()
    const navigate = useNavigate();
  return (
    <div className={`${isLargest ? 'max-w-3xl' : "max-w-2xl" } relative`}>
      <DeskstopSidebar header="Notice Board" items={NoticeList} />
      <h1 id="AllUpdatesTitle" className="inter-font text-[28px] font-semibold text-center" >All Updates</h1>
      <div className="absolute -right-60 -top-0.5">
      <BlueButton
            onClick={() => navigate("/sign-up")}
            text="Apply for admission"
          />
      </div>
      <div className="space-y-14 mt-12 mx-10 mb-80">
        {notice.map((item) => (
          <NoticeCard key={item.id} notice={item} />
        ))}
      </div>
    </div>
  );
};

export default NoticeFiltersDeskstop;
