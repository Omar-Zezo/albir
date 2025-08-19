import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import QuickDonation from "../../utils/QuickDonation";

export default function HeroSlider({ showDonatePopUp, setShowDonatePopUp, getDonation, slides }) {
  
  return (
    <div className="max-md:h-[250px] md:h-[400px] xl:h-[600px] xl:mt-[-35px]">
      <Swiper className="mySwiper size-full">
        {slides?.map((slide) => (
          <SwiperSlide key={slide.id} className="size-full">
            <div
              style={{
                background: `url('${slide.img}')`,
                backgroundSize: "cover",
              }}
              className="size-full relative"
            >
              {slide?.quick_donation === "yes" ? (
                <div className="absolute bottom-20 right-36 shadow-md">
                  <QuickDonation
                    getDonation = {getDonation}
                    service={slide?.service}
                    showDonatePopUp={showDonatePopUp}
                    setShowDonatePopUp={setShowDonatePopUp}
                  />
                </div>
              ) : null}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
