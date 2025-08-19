
const PopPhotoViwer = ({ photo, setShowPopup }) => {
    console.log(photo)
  return (
    <div className="fixed size-full top-0 left-0 pt-20 z-[999]">
      <div
        className="size-full fixed top-0 left-0 bg-black/90"
        onClick={() => setShowPopup(false)}
      ></div>
      <div className="w-[80%] h-[75%] flex pt-5 items-center absolute left-1/2 translate-x-[-50%] z-50 flex-col gap-4">
        <img src={photo?.image_path} alt="" className="size-full object-contain"/>
        <h4 className="w-[90%] mx-auto text-white text-center py-2 text-2xl font-semibold">
          {photo?.title}
        </h4>
      </div>
    </div>
  );
};

export default PopPhotoViwer;
