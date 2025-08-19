import { Link } from "react-router-dom";
import { HeaderBg } from "../../images/imgs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GalleryCard from "../../components/Cards/GalleryCard";
import { getViewVideos } from "../../store/slices/media cnter/viewVideos";
import PopVideoViwer from "../../utils/PopVideoViwer";
import PageLoader from "../../utils/PageLoader";
import ScrollToTop from "../../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const SaidAboutUs = () => {
  const [videos, setVideos] = useState(null);
  const [video, setVideo] = useState(null);
  const [showPopVideoViwer, setShowPopVideoViwer] = useState(false);

  const { data } = useSelector((state) => state.viewVideos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getViewVideos(4));
  }, []);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          if (data.data.data.videos) {
            if (data.data.data.videos.data) {
              setVideos(data.data.data.videos.data);
            }
          }
        }
      }
    }
  }, [data]);

  return !videos ? (
    <PageLoader />
  ) : (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - قالوا عنا</title>
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
                  قالوا عنا
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <span>-</span>
                  <p className="underline">قالوا عنا</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-20 container">
          <div className="container flex flex-col gap-4">
            <h3 className="text-[36px] max-xl:text-3xl text-secondryColor">
              الفيديو
            </h3>
            <div className="flex flex-wrap justify-center gap-10 mt-5">
              {videos?.map((video) => (
                <div
                  key={video?.id}
                  className="overflow-hidden w-[380px]"
                  onClick={() => {
                    setVideo(video);
                    setShowPopVideoViwer(true);
                  }}
                >
                  <GalleryCard item={video} />
                </div>
              ))}
              <div />
            </div>
          </div>
        </div>
        {showPopVideoViwer && (
          <PopVideoViwer
            video={video}
            setShowPopVideoViwer={setShowPopVideoViwer}
          />
        )}
      </div>
    </ScrollToTop>
  );
};

export default SaidAboutUs;
