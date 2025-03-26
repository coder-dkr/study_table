import Blog from "@/components/BlogComp/Blog";
import BlogDeskstop from "@/components/BlogComp/BlogDeskstop";
import PseudoFooter from "@/components/PseudoFooter";
import Topbar from "@/components/Topbar";
import useScreen from "@/hooks/useScreen";

const BlogPage = () => {
  const {isDesktop} = useScreen()
  return (
    <div className="flex flex-col items-center px-6 py-9 space-y-12 relative">
      <div className="absolute -z-1 w-48 h-48 bg-blue-100 blur-3xl -left-10 -top-4 " />
      <div className="absolute -z-1 w-48 h-48 bg-blue-100 blur-3xl right-0 top-[90vh] " />
      <Topbar />
     {isDesktop ? <BlogDeskstop /> : <Blog />}
     {!isDesktop &&  <PseudoFooter />}
    </div>
  );
};

export default BlogPage;
