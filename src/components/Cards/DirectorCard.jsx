const DirectorCard = ({director}) => {
    return (
      <div className="flex flex-col">
        <div className="w-[90%] flex flex-col gap-2 mx-auto px-[30px] py-5 mt-[-20px] rounded-lg bg-mainColor">
          <h5 className="text-secondryColor text-xl font-medium text-center">
          {director?.adjective}
          </h5>
          <p className="text-white text-center text-lg font-bold">
          {director?.name}
          </p>
          <p className="text-white text-center text-base font-medium">
          {director?.job_title}
          </p>
        </div>
        <div className="w-[370px] h-[300px]">
          <img
            src={director?.image_path}
            alt="profile-img"
            className="size-full rounded-t-[183px] object-cover"
          />
        </div>
      </div>
    );
  };
  
  export default DirectorCard;
  