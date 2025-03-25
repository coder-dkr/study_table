import NoticeFilters from "@/components/NoticeComp/NoticeFilters";
import Topbar from "@/components/Topbar";
import PseudoFooter from "@/components/PseudoFooter";


const NoticeBoard = () => {
  return (
    <div className="flex flex-col items-center px-6 py-9 space-y-12 relative">  
     <div className="absolute -z-1 w-48 h-48 bg-blue-100 blur-3xl -left-10 -top-4 " />
     <div className="absolute -z-1 w-48 h-48 bg-blue-100 blur-3xl right-0 top-1/2 " />
     <Topbar />
     <NoticeFilters />
     <PseudoFooter />
    </div>
  );
};

export default NoticeBoard;
