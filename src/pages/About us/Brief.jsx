import { Link } from "react-router-dom";
import { HeaderBg } from "../../images/imgs";
import MemberCard from "../../components/Cards/MemberCard";
import BriefMessage from "../../components/About us/BriefMessage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrief } from "../../store/slices/Home/brief";
import parse from "html-react-parser";
import PageLoader from "../../utils/PageLoader";
import ScrollToTop from "../../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const Brief = () => {
  const [briefData, setBriefData] = useState(null);
  const [founders, setFounders] = useState(null);
  const { data } = useSelector((state) => state.brief);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrief());
  }, []);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          setBriefData(data.data.data);
          setFounders(data.data.data.founders);
        }
      }
    }
  }, [data]);

  return !founders ? (
    <PageLoader />
  ) : (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - البر في سطور</title>
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
                  البر في السطور
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <span>-</span>
                  <p className="underline">البر في سطور</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-[120px]">
          <div className="container flex flex-col gap-4">
            <p className="w-[90%] mx-auto text-lg text-[#7e7e7e] text-center font-medium leading-9">
              {briefData ? parse(briefData?.brief) : null}
            </p>
            <h1 className="text-[30px] text-mainColor text-center font-medium">
              مؤسسو جمعية البر بجدة
            </h1>
          </div>
          <div className="container flex flex-wrap justify-center gap-10 mt-20">
            {founders?.map((founder) => (
              <MemberCard key={founder.id} founder={founder} />
            ))}
          </div>
          <BriefMessage />
        </div>
      </div>
    </ScrollToTop>
  );
};

export default Brief;
