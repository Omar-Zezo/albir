import { Link } from "react-router-dom";

const NewsSectionsCard = ({ section }) => {
  return (
    <div>
      <Link to={`/news-sections/${section?.id}`} className="w-[570px] max-xl:w-full grow flex items-center gap-16 p-10 bg-white rounded-xl shadow-md">
        <div className="size-[130px] rounded-full bg-mainColor relative">
          <img
            src={section?.img}
            className="size-full object-cover rounded-full"
          />
          <div className="size-[50px] absolute left-[-25px] top-1/2 translate-y-[-50%] text-base text-center font-bold bg-mainColor text-white flex items-center justify-center rounded-full">
            {section?.blogs_count}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            to={`/news-sections/${section?.id}`}
            className="text-2xl text-secondryColor hover:text-mainColor duration-500 font-bold"
          >
            {section?.title}
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default NewsSectionsCard;
