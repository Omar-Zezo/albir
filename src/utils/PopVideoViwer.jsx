import ReactPlayer from "react-player/youtube";

const PopVideoViwer = ({ photo, setShowPopVideoViwer }) => {
  return (
    <div className="fixed size-full top-0 left-0 pt-20 z-50">
      <div
        className="size-full fixed top-0 left-0 bg-black/90"
        onClick={() => setShowPopVideoViwer(false)}
      ></div>
      <div className="w-[90%] h-[85%] flex pt-10 items-center absolute left-1/2 translate-x-[-50%] z-50 flex-col gap-4">
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url={video?.youtube_url}
          controls={true}
        />
        <h4 className="w-[90%] mx-auto text-white text-center py-2 text-2xl font-semibold">
          {video?.title}
        </h4>
      </div>
    </div>
  );
};

export default PopVideoViwer;
