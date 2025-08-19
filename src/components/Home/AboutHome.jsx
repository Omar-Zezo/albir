import React from "react";
import { AboutUs } from "../../images/imgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { HandsHolding } from "../../images/svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrief } from "../../store/slices/Home/brief";
import parse from "html-react-parser";

const AboutHome = () => {
  const [brief, setBrief] = useState(null);
  const { data } = useSelector((state) => state.brief);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrief());
  }, []);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data.brief) {
          setBrief(data.data.data.brief)
        }
      }
    }
  }, [data]);
  return (
    <section className="bg-[#e1e1e1] py-[25px]">
      <div className="container flex max-xl:flex-col justify-between">
        <div className="w-[45%] max-xl:w-full max-h-[500px] rounded-xl">
          <img
            src={AboutUs}
            alt="about-us"
            className="size-full object-cover rounded-xl"
          />
        </div>
        <div className="w-1/2 max-xl:w-full flex flex-col gap-5 px-4 max-xl:mt-10">
          <h3 className="text-lg text-[#aaa] font-medium">عن جمعية البر</h3>
          <p className="text-[36px] max-lg:text-3xl text-secondryColor font-bold">
            أهلا بكم في جمعية البر بجدة
          </p>
          <div className="text-lg text-[#7e7e7e] font-medium">
            {brief ? parse(brief) : null}
          </div>
          <div className="flex gap-5 mt-10">
            <div className="w-1/2 max-xl:w-full flex flex-col gap-3">
              <div>
                <div className="flex items-center gap-[10px] font-bold">
                  <FontAwesomeIcon
                    className="text-xl text-mainColor"
                    icon={faCircleCheck}
                  />
                  <h3 className="text-lg text-secondryColor">كن متبرعا</h3>
                </div>
                <p className="text-lg text-[#7e7e7e]">
                  تعدّ منصة جمعية البر بجدة الحل الأسهل والأمثل لإيصال تبرعاتكم
                  إلى محتاجيها من خلال عملية تبرع آمنة وشفافة
                </p>
              </div>

              <div className="mt-10">
                <div className="flex items-center gap-[10px] font-bold">
                  <FontAwesomeIcon
                    className="text-xl text-mainColor"
                    icon={faCircleCheck}
                  />
                  <h3 className="text-lg text-secondryColor">تبرع سريع</h3>
                </div>
                <p className="text-lg text-[#7e7e7e]">
                  بدون جهد و عناء وعبر قنواتنا الرقمية اسرع حلول التبرع واوثقها
                </p>
              </div>
              <Link to="/about-the-association/brief" className="w-[170px] bg-mainColor text-white py-4 px-9 rounded-tl-full rounded-bl-full text-base font-bold hover:bg-secondryColor hover:text-mainColor duration-300">أكتشف المزيد</Link>
            </div>
            <div className="h-fit max-xl:hidden flex flex-col items-center gap-5 p-[60px] rounded-[15px] mr-auto bg-[#f0f0f0] text-lg">
              <img width={50} height={50} src={HandsHolding} alt="support" />
              <h3 className="text-lg text-secondryColor font-bold text-center">
                بامكانك ان تحدث فرقا في حياة شخص ما
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
