import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { HeaderBg } from "../../images/imgs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsSectionDetails } from "../../store/slices/media cnter/newsSectionDetails";
import NewsCard from "../../components/Cards/NewsCard";
import Pagination from "../../utils/Pagination";
import PageLoader from "../../utils/PageLoader";
import ScrollToTop from "../../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const NewsSectionsDetails = () => {
  const [details, setDetails] = useState(null);
  const [sectionTitle, setSectionTitle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(null);
  const { data } = useSelector((state) => state.newsSectionDetails);

  const dispatch = useDispatch();
  const { id } = useParams();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  const handlePageClick = (event) => {
    navigate(`?page=${event.selected + 1}`);
  };

  useEffect(() => {
    if (page) {
      setCurrentPage(page);
      dispatch(getNewsSectionDetails({ str: `page=${page}`, id }));
    } else {
      dispatch(getNewsSectionDetails({ str: `page=${currentPage}`, id }));
    }
  }, [page]);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          setSectionTitle(data.data.data.section_title);
          if (data.data.data.news) {
            if (data.data.data.news.meta) {
              setTotal(data.data.data.news.meta?.total);
            }
            if (data.data.data.news.data) {
              setDetails(data.data.data.news.data);
            }
          }
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
                  {sectionTitle}
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <span>-</span>
                  <p className="underline">{sectionTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-20 container">
          <div className="container flex flex-col gap-4">
            <div className="flex flex-wrap justify-center gap-10">
              {details?.map((art) => (
                <div key={art?.id} className="w-[380px]">
                  <NewsCard key={art?.id} art={art} />
                </div>
              ))}
              <div />
            </div>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          total={total}
          handlePageClick={handlePageClick}
        />
      </div>
    </ScrollToTop>
  );
};

export default NewsSectionsDetails;
