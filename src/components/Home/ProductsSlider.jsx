import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ProductsCard from "../Cards/ProductsCard";
import { useDispatch, useSelector } from "react-redux";
import { getQuickServices } from "../../store/slices/Home/quickServices";


export default function ProductsSlider({getDonation, setShowDonatePopUp}) {
  const [allServices, setAllServices] = useState(null);
  const { data } = useSelector((state) => state.quickServices);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuickServices());
  }, []);


  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          setAllServices(data.data.data);
        }
      }
    }
  }, [data]);

  return (
    <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        className="mySwiper w-full xl:mt-20 mt-5"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
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
        {allServices?.map((service) => (
          <SwiperSlide key={service.id}>
            <ProductsCard getDonation={getDonation} setShowDonatePopUp={setShowDonatePopUp} service={service}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
