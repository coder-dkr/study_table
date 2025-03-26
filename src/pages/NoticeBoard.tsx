import NoticeFilters from "@/components/NoticeComp/NoticeFilters";
import NoticeFiltersDeskstop from "@/components/NoticeComp/NoticeFiltersDeskstop";
import Topbar from "@/components/Topbar";
import PseudoFooter from "@/components/PseudoFooter";
import useScreen from "@/hooks/useScreen";


const NoticeBoard = () => {
  const {isDesktop} = useScreen()
  return (
    <div className="flex flex-col items-center px-6 py-9 space-y-12 relative">  
     <div className="absolute -z-1 w-48 h-48 bg-blue-100 blur-3xl -left-10 -top-4 " />
     <div className="absolute -z-1 w-48 h-48 bg-blue-100 blur-3xl right-0 top-1/3 " />
     <Topbar />
    {isDesktop ? <NoticeFiltersDeskstop /> : <NoticeFilters />}
    {!isDesktop &&  <PseudoFooter />}
    </div>
  );
};

export default NoticeBoard;
