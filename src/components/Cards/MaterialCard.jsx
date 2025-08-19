import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MaterialCard = ({material}) => {
  return (
    <div className="w-[48%] max-xl:w-full flex flex-col gap-4 p-10 bg-gray-50 shadow-md rounded-lg">
      <h3 className="text-xl text-secondryColor font-bold">{material?.title}</h3>
      <a href={material?.file_path} target="_blanck" className="flex items-center gap-3">
      <FontAwesomeIcon className="text-xl text-mainColor" icon={faFile} />
      <p className="text-base text-blue-600 font-semibold">عرض الملف</p>
      </a>
    </div>
  );
};

export default MaterialCard;
