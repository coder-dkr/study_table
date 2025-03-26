import DeskstopSidebar from "../DesktopSideBar";
import BlogList from "@/constants/BlogList";
import Blog from "./Blog";

const BlogDeskstop = () => {
    return (
      <div className="mb-80">
         <DeskstopSidebar header="Overview" items={BlogList} />
         <Blog />
      </div>
    );
  };
  
  export default BlogDeskstop;
  