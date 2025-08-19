import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import NewsCard from "../Cards/NewsCard";

// import required modules

export default function NewsSlider({ news }) {
  return (
    <div className="container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper w-full xl:mt-10 mt-5"
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {news?.map((art) => (
          <SwiperSlide key={art?.id}>
            <NewsCard art={art}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
