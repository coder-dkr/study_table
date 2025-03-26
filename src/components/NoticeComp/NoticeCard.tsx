interface NoticeProps {
  id: string,
  title : string,
  content : string,
  date : string,
  tags : string,
}

const NoticeCard = ({notice} : {notice : NoticeProps}) => {
  return (
    <div id={notice.id} className="flex flex-col gap-y-4.5 border-b-[0.5px] border-b-[#A3A3A3] pb-6">
      <h3 className="instrument-sans-font font-semibold text-lg text-[#1B1B1B]">
       {notice.title}
      </h3>

      <p className="instrument-sans-font text-lg leading-6.5 font-light text-[#1B1B1B]">
        {notice.content}
      </p>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center items-start gap-y-1 mt-4">
        <p className="text-[#A3A3A3] instrument-sans-font text-lg font-normal leading-6.5">
          {notice.date}
        </p>
        <div className="text-[#1B1B1B] instrument-sans-font text-lg font-normal leading-6.5">
          {notice.tags}
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
