import { Link } from "react-router-dom";
import { HeaderBg } from "../../images/imgs";
import DonorForm from "../../components/About us/DonorForm";
import ScrollToTop from "../../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const DonorJoin = () => {
  return (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - عضوية المتبرعين</title>
      </Helmet>
      <div className="max-xl:pt-24 pb-10">
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
                  عضوية المتبرعين
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <Link to="/albir-friends">أصدقاء البر</Link>
                  <span>-</span>
                  <p className="underline">عضوية المتبرعين</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mt-20">
          <DonorForm />
        </div>
      </div>
    </ScrollToTop>
  );
};

export default DonorJoin;
