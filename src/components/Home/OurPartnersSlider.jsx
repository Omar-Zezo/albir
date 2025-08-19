import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import OurPartnersCard from "../Cards/OurPartnersCard";
import { useDispatch, useSelector } from "react-redux";
import { getOurPartners } from "../../store/slices/Home/ourPartners";

// import required modules

export default function OurPartnersSlider() {
  const [details, setDetails] = useState(null);
  const { data } = useSelector((state) => state.ourPartners);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOurPartners());
  }, []);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          setDetails(data.data.data);
        }
      }
    }
  }, [data]);

  return (
    <div className="container">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        className="mySwiper w-full"
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1028: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {details?.map((partner) => (
          <SwiperSlide key={partner.id}>
            <OurPartnersCard partner={partner}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
