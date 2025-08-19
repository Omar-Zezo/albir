import { Link, useParams } from "react-router-dom";
import { HeaderBg } from "../../images/imgs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { getGovernanceMaterialDetails } from "../../store/slices/Home/governanceMaterialDetails";
import MaterialCard from "../../components/Cards/MaterialCard";
import PageLoader from "../../utils/PageLoader";
import ScrollToTop from "../../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const GovernanceMaterialDetails = () => {
  const [materials, setMaterials] = useState(null);
  const { data } = useSelector((state) => state.governanceMaterialDetails);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getGovernanceMaterialDetails(id));
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          console.log(data.data.data);
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
        <title>جمعية البر - تفاصيل مواد الحوكمة</title>
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
                  تفاصيل مواد الحوكمة
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <span>-</span>
                  <p className="underline">تفاصيل مواد الحوكمة</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-10 container">
          <div className="container flex flex-col gap-4">
            <div className="flex flex-wrap justify-between gap-10 mt-20">
              {materials?.map((material) => (
                <MaterialCard key={material?.id} material={material} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default GovernanceMaterialDetails;
