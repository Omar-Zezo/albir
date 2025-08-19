import { Link } from "react-router-dom";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewsCard = ({ art }) => {
  return (
    <div className="rounded-xl">
      <div className="h-[275px] rounded-xl relative">
        <Link to={`/news-sections/news/${art?.id}`}>
          <img
            src={art?.image_path}
            alt="news-img"
            className="object-cover size-full rounded-t-xl"
          />
        </Link>
        <div className="rounded-t-full size-[70px] absolute right-5 bottom-0 bg-mainColor text-white font-semibold flex justify-center items-center">
          {art?.created_at}
        </div>
      </div>
      <div className="pt-8 pb-3 border-b border-mainColor">
        <Link
          to={`/news-sections/news/${art?.id}`}
          className="block w-[90%] min-h-[56px] mx-auto text-lg text-center text-secondryColor hover:text-mainColor duration-300 font-bold relative description2"
        >
          {art?.title}
        </Link>
      </div>
      <div className="bg-[#f1f1f1] flex justify-center items-center py-5">
        <Link
          to={`/news-sections/news/${art?.id}`}
          className="text-[#7e7e7e] hover:text-mainColor duration-300 text-base font-medium flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faAngleRight} />
          <p>المزيد</p>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
