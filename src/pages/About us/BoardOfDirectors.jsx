import { Link } from "react-router-dom";
import { HeaderBg } from "../../images/imgs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoardOfDirectors } from "../../store/slices/Home/BoardOfDirectors";
import DirectorCard from "../../components/Cards/DirectorCard";
import parse from "html-react-parser";
import PageLoader from "../../utils/PageLoader";
import ScrollToTop from "../../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const BoardOfDirectors = () => {
  const [boardOfDirectorsMembers, setBoardOfDirectorsMembers] = useState(null);
  const { data } = useSelector((state) => state.BoardOfDirectors);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoardOfDirectors());
  }, []);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          setBoardOfDirectorsMembers(data.data.data);
        }
      }
    }
  }, [data]);

  return !boardOfDirectorsMembers ? (
    <PageLoader />
  ) : (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - أعضاء مجلس الإدارة</title>
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
                  أعضاء مجلس الإداراة
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <span>-</span>
                  <p className="underline">أعضاء مجلس االإدارة</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-[120px] container">
          <div className="container flex flex-col gap-4">
            <h1 className="text-[40px] max-xl:text-3xl text-secondryColor">
              أعضاء مجلس الإدارة
            </h1>
            <div className="flex flex-wrap justify-center gap-10 mt-20">
              {boardOfDirectorsMembers?.directors?.map((director) => (
                <DirectorCard key={director.id} director={director} />
              ))}
            </div>
            <p className="text-lg text-[#7e7e7e] font-medium mt-6">
              {boardOfDirectorsMembers
                ? parse(boardOfDirectorsMembers?.page_text)
                : null}
            </p>
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default BoardOfDirectors;
