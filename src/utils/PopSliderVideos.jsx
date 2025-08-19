// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getViewVideos } from "../store/slices/media cnter/viewVideos";

import ReactPlayer from "react-player/youtube";

const PopSliderVideos = ({ showPopSlider, setShowPopSlider, id }) => {
  const [videos, setVideos] = useState(null);
  const { data } = useSelector((state) => state.viewVideos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getViewVideos(id));
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          if (data.data.data.videos) {
            if (data.data.data.videos.data) {
              setVideos(data.data.data.videos.data);
              console.log(data.data.data.videos.data);
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
        {videos?.map((video) => (
          <>
            <SwiperSlide key={video?.id}>
              <div className="size-full flex flex-col gap-4">
                <ReactPlayer
                  width={"100%"}
                  height={"100%"}
                  url={video?.youtube_url}
                  controls={true}
                />
                <h4 className="w-[90%] mx-auto text-white text-center py-2 text-2xl font-semibold">{video?.title}</h4>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default PopSliderVideos;
