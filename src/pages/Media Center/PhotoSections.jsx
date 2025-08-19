import { Link } from "react-router-dom";
import { HeaderBg } from "../../images/imgs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotoSection } from "../../store/slices/media cnter/photoSection";
import GalleryCard from "../../components/Cards/GalleryCard";
import PopSliderPhotos from "../../utils/PopSliderPhotos";
import PageLoader from "../../utils/PageLoader";
import ScrollToTop from "../../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const PhotoSections = () => {
  const [photoSectionData, setPhotoSectionData] = useState(null);
  const [id, setId] = useState(null);
  const [showPopSlider, setShowPopSlider] = useState(false);
  const { data } = useSelector((state) => state.photoSection);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotoSection());
  }, []);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          if (data.data.data.sections) {
            if (data.data.data.sections.data) {
              setPhotoSectionData(data.data.data.sections.data);
            }
          }
        }
      }
    }
  }, [data]);

  return !photoSectionData ? (
    <PageLoader />
  ) : (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - الصور</title>
      </Helmet>
      <div className="max-xl:pt-24">
        <header className="h-[270px] mt-[-35px] relative">
          <div
            className="size-full grayscale bg-fixed absolute top-0 left-0 z-[-1]"
            style={{
              background: `url('${HeaderBg}')`,
              backgroundPosition: "center",
            }}
          ></div>
          <div className="bg-black/70 size-full">
            <div className="container pt-16">
              <div className="flex flex-col gap-4 pr-5">
                <h2 className="text-[50px] max-xl:text-4xl text-white font-bold">
                  الصور
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <span>-</span>
                  <p className="underline">الصور</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-20 container">
          <div className="container flex flex-col gap-4">
            <h3 className="text-[36px] max-xl:text-3xl text-secondryColor">
              أقسام الصور
            </h3>
            <div className="flex flex-wrap justify-center gap-10 mt-5">
              {photoSectionData?.map((item) => (
                <div
                  className="overflow-hidden w-[380px]"
                  key={item?.id}
                  onClick={() => {
                    setId(item?.id);
                    setShowPopSlider(true);
                  }}
                >
                  <GalleryCard item={item} />
                </div>
              ))}
              <div />
            </div>
          </div>
        </div>
        {showPopSlider && (
          <PopSliderPhotos
            showPopSlider={showPopSlider}
            setShowPopSlider={setShowPopSlider}
            id={id}
          />
        )}
      </div>
    </ScrollToTop>
  );
};

export default PhotoSections;
