// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getViewPhotos } from "../store/slices/media cnter/viewPhotos";

const PopSliderPhotos = ({ showPopSlider, setShowPopSlider, id }) => {
  const [photos, setPhotos] = useState(null);
  const { data } = useSelector((state) => state.viewPhotos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getViewPhotos(id));
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          if (data.data.data.photos) {
            if (data.data.data.photos.data) {
              setPhotos(data.data.data.photos.data);
              console.log(data.data.data.photos.data);
            }
          }
        }
      }
    }
  }, [data]);

  return (
    <div className="fixed size-full top-0 left-0 pt-20 z-50">
      <div
        className="size-full fixed top-0 left-0 bg-black/90"
        onClick={() => setShowPopSlider(false)}
      ></div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper container h-[90%] gallery"
      >
        {photos?.map((photo) => (
          <SwiperSlide key={photo?.id}>
            <div className="size-full flex flex-col gap-4">
              <img src={photo?.img} alt="" className="w-full h-[90%] object-cover" />
              <h4 className="w-[90%] mx-auto text-white mt-auto text-center py-2 text-2xl font-semibold">
                {photo?.title}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopSliderPhotos;
