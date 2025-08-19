import { Link } from "react-router-dom";
import { HeaderBg } from "../../images/imgs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGovernanceMaterial } from "../../store/slices/Home/governanceMaterial";
import GovernanceMaterialCard from "../../components/Cards/GovernanceMaterialCard";
import PageLoader from "../../utils/PageLoader";
import ScrollToTop from "../../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const GovernanceMaterial = () => {
  const [materials, setMaterials] = useState(null);
  const { data } = useSelector((state) => state.governanceMaterial);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGovernanceMaterial());
  }, []);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          setMaterials(data.data.data);
        }
      }
    }
  }, [data]);

  return !materials ? (
    <PageLoader />
  ) : (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - مواد الحوكمة</title>
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
                  مواد الحوكمة
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <span>-</span>
                  <p className="underline">مواد الحوكمة</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-20 container">
          <div className="container flex flex-col gap-4">
            <div className="flex flex-wrap justify-center gap-10 mt-20">
              {materials?.map((material) => (
                <GovernanceMaterialCard key={material.id} material={material} />
              ))}
              <div />
            </div>
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default GovernanceMaterial;
