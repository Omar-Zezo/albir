import { faImage, faPlus, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GalleryCard = ({ item }) => {
  return (
    <div className="gallery-card h-[300px] rounded-[15px] relative">
      <img
        src={item?.image_path}
        alt="slide-1"
        className="object-cover size-full rounded-[15px]"
      />
      <div className="overlay absolute size-full bg-mainColor cursor-pointer rounded-[15px] opacity-95 flex items-center justify-center">
        <div className="flex items-center gap-2">
          {item?.photos_count ? (
            <FontAwesomeIcon className="text-4xl text-white" icon={faImage} />
          ) : (
            item?.videos_count ? (
              <FontAwesomeIcon className="text-4xl text-white" icon={faVideo} />
            ):(
              <FontAwesomeIcon className="text-4xl text-white" icon={faPlus} />
            )
          )}
          <p className="text-3xl text-white font-semibold pt-2">
            {item?.photos_count} {item?.videos_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
