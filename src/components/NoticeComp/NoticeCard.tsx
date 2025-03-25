const NoticeCard = () => {
  return (
    <div className="flex flex-col gap-y-4.5 border-b-[0.5px] border-b-[#A3A3A3] pb-6">
      <h3 className="instrument-sans-font font-semibold text-lg text-[#1B1B1B]">
        NEET 2025 Application Open
      </h3>

      <p className="instrument-sans-font text-lg leading-6.5 font-light text-[#1B1B1B]">
        The National Testing Agency (NTA) has released the NEET 2025 application
        form on February 7, 2025. The examination is scheduled for May 4, 2025.
        Candidates can apply online through the official NTA website.
      </p>

      <div className="flex flex-col items-start gap-y-1 mt-4">
        <p className="text-[#A3A3A3] instrument-sans-font text-lg font-normal leading-6.5">
          December 14, 2024
        </p>
        <div className="text-[#1B1B1B] instrument-sans-font text-lg font-normal leading-6.5">
          NEET | Application | 2025 Exam
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
