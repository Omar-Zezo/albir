import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { HeaderBg } from "../../images/imgs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSurveys } from "../../store/slices/Home/surveys";
import SurveyCard from "../../components/Cards/SurveyCard";
import Pagination from "../../utils/Pagination";
import PageLoader from "../../utils/PageLoader";
import ScrollToTop from "../../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const Surveys = () => {
  const [allSurveys, setAllSurveys] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(null);
  const { data } = useSelector((state) => state.surveys);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  const handlePageClick = (event) => {
    navigate(`?page=${event.selected + 1}`);
  };

  useEffect(() => {
    if (page) {
      setCurrentPage(page);
      dispatch(getSurveys({ str: `page=${page}` }));
    } else {
      dispatch(getSurveys({ str: `page=${currentPage}` }));
    }
  }, [page]);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          if (data.data.data.total) {
            setTotal(data.data.data.total);
          }
          if (data.data.data.data) {
            setAllSurveys(data.data.data.data);
          }
        }
      }
    }
  }, [data]);

  return !allSurveys ? (
    <PageLoader />
  ) : (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - الاستبيانات</title>
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
                  الإستبيانات
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <span>-</span>
                  <p className="underline">الإستبيانات</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-20 container">
          <div className="flex flex-col gap-8">
            <h1 className="text-[40px] max-xl:text-3xl text-secondryColor">
              الإستبيانات
            </h1>
            <div className="flex flex-wrap justify-between">
              {allSurveys?.map((survey) => (
                <SurveyCard key={survey?.id} survey={survey} />
              ))}
            </div>
            <Pagination
              handlePageClick={handlePageClick}
              currentPage={currentPage}
              total={total}
            />
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default Surveys;
