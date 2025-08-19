import { Link } from "react-router-dom";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SeasonalProjectCard = ({ project }) => {
  return (
    <div className="w-[350px] rounded-xl">
      <div className="h-[275px] rounded-xl relative">
        <Link
          to={`/about-the-association/seasonal-projects/details/${project.id}`}
        >
          <img
            src={project?.img}
            alt="news-img"
            className="object-cover size-full rounded-t-xl"
          />
        </Link>
      </div>
      <div className="pt-8 pb-3 border-b border-mainColor">
        <Link
          to={`/about-the-association/seasonal-projects/details/${project.id}`}
          className="block w-[90%] mx-auto text-lg text-center text-secondryColor hover:text-mainColor duration-300 font-bold"
        >
          {project?.title}
        </Link>
      </div>
      <div className="bg-[#f1f1f1] flex justify-center items-center py-5">
        <Link
          to={`/about-the-association/seasonal-projects/details/${project.id}`}
          className="text-[#7e7e7e] hover:text-mainColor duration-300 text-base font-medium flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faAngleRight} />
          <p>المزيد</p>
        </Link>
      </div>
    </div>
  );
};

export default SeasonalProjectCard;
