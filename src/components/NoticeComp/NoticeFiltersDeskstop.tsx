import NoticeCard from "./NoticeCard";
import DeskstopSidebar from "@/components/DesktopSideBar";
import NoticeList from "@/constants/NoticeSideBarList";
import { notice } from "@/constants/Notices";
import useScreen from "@/hooks/useScreen";


const NoticeFiltersDeskstop = () => {
    const {isLargest} = useScreen()
  return (
    <div className={`${isLargest ? 'max-w-3xl' : "max-w-2xl" } relative`}>
      <DeskstopSidebar header="Notice Board" items={NoticeList} />
      <h1 id="AllUpdatesTitle" className="inter-font text-[28px] font-semibold text-center" >All Updates</h1>
      <div className="space-y-14 mt-12 mx-10 mb-80">
        {notice.map((item) => (
          <NoticeCard key={item.id} notice={item} />
        ))}
      </div>
    </div>
  );
};

export default NoticeFiltersDeskstop;
