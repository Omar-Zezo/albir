import { Link } from "react-router-dom";
import { HeaderBg } from "../../images/imgs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsSection } from "../../store/slices/media cnter/newsSection";
import NewsSectionsCard from "../../components/Cards/NewsSectionsCard";
import PageLoader from "../../utils/PageLoader";
import ScrollToTop from "../../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const NewsSections = () => {
  const [newsSectionData, setNewsSectionData] = useState(null);
  const { data } = useSelector((state) => state.newsSection);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsSection());
  }, []);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          if (data.data.data.sections) {
            if (data.data.data.sections.data) {
              setNewsSectionData(data.data.data.sections.data);
            }
          }
        }
      }
    }
  }, [data]);

  return !newsSectionData ? (
    <PageLoader />
  ) : (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - الأخبار</title>
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
                الأخبار
              </h2>
              <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                <Link to="/">الرئيسية</Link>
                <span>-</span>
                <p className="underline">الأخبار</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-20 container">
        <div className="container flex flex-col gap-4">
          <div className="flex flex-wrap justify-center gap-10">
            {newsSectionData?.map((section) => (
              <NewsSectionsCard key={section?.id} section={section} />
            ))}
            <div />
          </div>
        </div>
      </div>
    </div>
    </ScrollToTop>
    
  );
};

export default NewsSections;
