import NoticeCard from "./NoticeCard";

const NoticeFilters = () => {
  return (
    <div className="w-full flex flex-col items-start gap-5">
      <div className="w-full flex flex-col md:flex-row md:justify-between items-start gap-5">
        <h1 className="font-semibold text-[#155DFC] text-2xl inter-font">
          Notice Board
        </h1>
        <div className="w-full  md:w-fit  relative">
          <select className="w-full px-4 py-2 text-black bg-white border border-[#A3A3A3] outline-0 appearance-none instrument-sans-font font-semibold">
            <option>All Updates</option>
            <option>Recent Updates</option>
            <option>Older Updates</option>
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <img
              className="w-5 h-5 rotate-180 shrink-0 duration-150"
              src="/svgs/downarrow.svg"
              alt="arrow"
            />
          </div>
        </div>
      </div>

      <div className="space-y-8 mt-12 max-w-xl mx-auto">
        {[1, 2, 3].map((item: number) => (
          <NoticeCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default NoticeFilters;
