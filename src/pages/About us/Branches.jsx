import { Link } from "react-router-dom";
import { HeaderBg } from "../../images/imgs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBranches } from "../../store/slices/Home/branches";
import BrancheCard from "../../components/Cards/BrancheCard";
import PageLoader from "../../utils/PageLoader";
import ScrollToTop from "../../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const Branches = () => {
  const [branchesData, setBranchesData] = useState(null);
  const { data } = useSelector((state) => state.branches);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBranches());
  }, []);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          setBranchesData(data.data.data);
        }
      }
    }
  }, [data]);

  return !branchesData ? (
    <PageLoader />
  ) : (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - فروعنا</title>
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
                  فروعنا
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <span>-</span>
                  <p className="underline">فروعنا</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-[120px]">
          <div className="container flex flex-col gap-5">
            <h1 className="text-[40px] max-xl:text-3xl text-secondryColor">
              فروع الجمعية
            </h1>
            <div className="flex flex-col gap-5">
              {branchesData?.map((branche) => (
                <BrancheCard key={branche?.id} branche={branche} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default Branches;
