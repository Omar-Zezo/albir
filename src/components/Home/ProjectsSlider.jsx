import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import ProjectCard from "../Cards/ProjectCard";
import DonateNowPopup from "../../utils/DonateNowPopup";

export default function ProjectsSlider({ allProjects, getDonation, setShowDonatePopUp }) {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        className="mySwiper projects w-full"
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
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
        {allProjects?.map((service) => (
            <SwiperSlide key={service.id}>
              <ProjectCard getDonation={getDonation} service={service} setShowDonatePopUp={setShowDonatePopUp} />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
