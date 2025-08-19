import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { HeaderBg } from "../images/imgs";
import { getNewsDetails } from "../store/slices/Home/newsDetails";
import PageLoader from "../utils/PageLoader";
import ScrollToTop from "../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const NewsDetails = () => {
  const [details, setDetails] = useState(null);
  const { data } = useSelector((state) => state.newsDetails);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getNewsDetails(id));
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          setDetails(data.data.data);
        }
      }
    }
  }, [data]);

  return !details ? (
    <PageLoader />
  ) : (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - تفاصيل الخبر</title>
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
                  تفاصيل الخبر
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <span>-</span>
                  <p className="underline">تفاصيل الخبر</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-20 container">
          <div className="container flex flex-col gap-4">
            <div className="w-full h-[300px] rounded-xl">
              <img
                src={details?.image_path}
                alt="project-img"
                className="size-full object-cover rounded-xl"
              />
            </div>
            <h3 className="text-[36px] max-xl:text-3xl max-xl:leading-10 mt-6 text-secondryColor font-bold">
              {details?.title}
            </h3>
            <div className="text-lg text-[#7e7e7e] font-medium mt-6">
              {details ? parse(details?.content) : null}
            </div>
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default NewsDetails;
