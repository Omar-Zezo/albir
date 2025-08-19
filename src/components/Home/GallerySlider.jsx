import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import GalleryCard from "../Cards/GalleryCard";
import { useDispatch, useSelector } from "react-redux";
import { getGallery } from "../../store/slices/Home/gallery";
import PopPhotoViwer from "../../utils/PopPhotoViwer";

// import required modules

export default function GallerySlider() {
  const [gallery, setGallery] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [photo, setPhoto] = useState(null);
  const { data } = useSelector((state) => state.gallery);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGallery());
  }, []);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          setGallery(data.data.data);
        }
      }
    }
  }, [data]);
  return (
    <div className="container">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        className="mySwiper w-full mt-20"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1028: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {gallery?.map((item) => (
          <SwiperSlide key={item.id}>
            <div onClick={() =>{
              setShowPopup(true)
              setPhoto(item)
            }}>
              <GalleryCard showPopup={showPopup} item={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {showPopup && <PopPhotoViwer photo={photo} setShowPopup={setShowPopup}/>}
    </div>
  );
}
