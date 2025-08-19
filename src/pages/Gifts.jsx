import { Link, useNavigate } from "react-router-dom";
import { HeaderBg } from "../images/imgs";
import GiftForm from "../components/About us/GiftForm";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ScrollToTop from "../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const Gifts = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const errorMsg = (msg) => toast.error(msg);

  useEffect(() => {
    if (token === null) {
      navigate("/");
      errorMsg("قم بتسجيل الدخول أولاً");
    }
  }, [token]);

  return (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - إهداء تبرع</title>
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
                  إهداء تبرع
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <span>-</span>
                  <p className="underline">إهداء تبرع</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-20 container">
          <div className="container flex flex-col gap-4">
            <GiftForm />
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default Gifts;
