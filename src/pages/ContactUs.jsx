import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { HeaderBg } from "../images/imgs";
import { getContactInfo } from "../store/slices/Home/contactInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faSnapchat,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import PageLoader from "../utils/PageLoader";
import BtnLoader from "../utils/BtnLoader";
import { contactusMsg } from "../store/slices/Home/contactus";
import ScrollToTop from "../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const [contactInfo, setContactInfo] = useState(null);
  const [showBtnLoader, setShowBtnLoader] = useState(false);
  const contactInfoData = useSelector((state) => state.contactInfo);
  const { data, error } = useSelector((state) => state.contactus);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactInfo());
  }, []);

  useEffect(() => {
    if (contactInfoData?.data?.data?.data) {
      setContactInfo(contactInfoData?.data?.data?.data[0]);
    }
  }, [contactInfoData]);

  const formSubmit = (data) => {
    setShowBtnLoader(true);
    dispatch(contactusMsg(data));
  };

  // handel btn loader
  useEffect(() => {
    if (data) {
      setShowBtnLoader(false);
    }
    if (error) {
      setShowBtnLoader(false);
    }
  }, [data, error]);

  return !contactInfo ? (
    <PageLoader />
  ) : (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - اتصل بنا</title>
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
                  اتصل بنا
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <span>-</span>
                  <p className="underline">اتصل بنا</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-20 container">
          <div className="container flex max-xl:flex-col gap-4">
            <div className="w-1/2 max-xl:w-full flex flex-col gap-4">
              <h3 className="text-lg text-[#aaa] font-medium">اتصل بنا</h3>
              <p className="text-[36px] max-xl:text-3xl text-secondryColor font-bold">
                لا تتردد في الإتصال بنا
              </p>
              <p className="lg:w-[70%] mt-8 text-lg text-[#7e7e7e] font-medium">
                فأنت محط اهتمامنا خذ مساحة لآرءائك أو شكواك و اكتب مايجول في
                خاطرك وشاركنا اهتماماتك و مقترحاتك في أي مجال
              </p>

              <div className={`flex gap-3 items-center mt-10`}>
                <a
                  href={contactInfo?.facebook}
                  target="_blanck"
                  className="size-12 rounded-full flex justify-center items-center bg-[#4867aa] hover:bg-secondryColor duration-300"
                >
                  <FontAwesomeIcon
                    className="text-lg text-white"
                    icon={faFacebookF}
                  />
                </a>
                <a
                  href={contactInfo?.twitter}
                  target="_blanck"
                  className="size-12 rounded-full flex justify-center items-center bg-[#5da9dd] hover:bg-secondryColor duration-300"
                >
                  <FontAwesomeIcon
                    className="text-lg text-white"
                    icon={faTwitter}
                  />
                </a>
                <a
                  href={contactInfo?.snapchat}
                  target="_blanck"
                  className="size-12 rounded-full flex justify-center items-center bg-yellow-400 hover:bg-secondryColor duration-300"
                >
                  <FontAwesomeIcon
                    className="text-lg text-white duration-300"
                    icon={faSnapchat}
                  />
                </a>
                <a
                  href={contactInfo?.youtube}
                  target="_blanck"
                  className="size-12 rounded-full flex justify-center items-center bg-[#ff0000] hover:bg-secondryColor duration-300"
                >
                  <FontAwesomeIcon
                    className="text-lg text-white duration-300"
                    icon={faYoutube}
                  />
                </a>
                <a
                  href={contactInfo?.instagram}
                  target="_blanck"
                  className="size-12 rounded-full flex justify-center items-center bg-[#f3c661] hover:bg-secondryColor duration-300"
                >
                  <FontAwesomeIcon
                    className="text-lg text-white duration-300"
                    icon={faInstagram}
                  />
                </a>
                <a
                  href={contactInfo?.whatsapp_number}
                  target="_blanck"
                  className="size-12 rounded-full flex justify-center items-center bg-green-700 hover:bg-secondryColor duration-300"
                >
                  <FontAwesomeIcon
                    className="text-lg text-white"
                    icon={faWhatsapp}
                  />
                </a>
              </div>
            </div>

            <div className="w-1/2 max-xl:w-full max-xl:mt-10">
              <form className="w-full" onSubmit={handleSubmit(formSubmit)}>
                <div className="w-full flex justify-between flex-wrap">
                  <div className="w-[49%] max-md:w-full mb-8 flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-base pr-4 text-secondryColor font-semibold"
                    >
                      الاسم
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full outline-none p-4 text-base text-secondryColor rounded-[50px] border border-black/10"
                      placeholder="الاسم"
                      {...register("name", {
                        required: "هذا الحقل مطلوب",
                        minLength: {
                          value: 3,
                          message: "يجب ان يكون الاسم 3 حروف أو أكثر",
                        },
                      })}
                    />
                    <p className="mt-1 pr-2 text-red-600 text-sm">
                      {errors.name?.message}
                    </p>
                  </div>

                  <div className="w-[49%] max-md:w-full mb-8 flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-base pr-4 text-secondryColor font-semibold"
                    >
                      البريد الإلكتروني
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full outline-none p-4 text-base text-secondryColor rounded-[50px] border border-black/10"
                      placeholder="البريد الإلكتروني"
                      {...register("email", {
                        required: "هذا الحقل مطلوب",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "البريد الإلكتروني غير صالح",
                        },
                      })}
                    />
                    <p className="mt-1 pr-2 text-red-600 text-sm">
                      {errors.email?.message}
                    </p>
                  </div>

                  <div className="w-[49%] max-md:w-full mb-8 flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="text-base pr-4 text-secondryColor font-semibold"
                    >
                      رقم الهاتف
                    </label>
                    <input
                      id="phone"
                      type="phone"
                      className="w-full outline-none p-4 text-base text-secondryColor rounded-[50px] border border-black/10"
                      placeholder="رقم الهاتف"
                      {...register("phone", {
                        required: "هذا الحقل مطلوب",
                        pattern: {
                          value: /^(05\d{8})$/,
                          message: "نقبل الأرقام السعودية فقط",
                        },
                      })}
                    />
                    <p className="mt-1 pr-2 text-red-600 text-sm">
                      {errors.phone?.message}
                    </p>
                  </div>

                  <div className="w-[49%] max-md:w-full mb-8 flex flex-col gap-2">
                    <label
                      htmlFor="subject"
                      className="text-base pr-4 text-secondryColor font-semibold"
                    >
                      الموضوع
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full outline-none p-4 text-base text-secondryColor rounded-[50px] border border-black/10"
                      placeholder="الموضوع"
                      {...register("subject", {
                        required: "هذا الحقل مطلوب",
                      })}
                    />
                    <p className="mt-1 pr-2 text-red-600 text-sm">
                      {errors.subject?.message}
                    </p>
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-base pr-4 text-secondryColor font-semibold"
                    >
                      الرسالة
                    </label>
                    <textarea
                      id="message"
                      type="text"
                      className="w-full outline-none h-[200px] p-4 text-base text-secondryColor rounded-md resize-none border border-black/10"
                      placeholder="الرسالة"
                      {...register("message", {
                        required: "هذا الحقل مطلوب",
                        minLength: {
                          value: 20,
                          message: "يجب ان يكون طول النص 20 حرف أو أكثر",
                        },
                      })}
                    />
                    <p className="mt-1 pr-2 text-red-600 text-sm">
                      {errors.message?.message}
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-[15%] flex justify-center items-center relative h-[60px] mt-8 px-10 py-5 bg-mainColor hover:bg-green-700 duration-300 cursor-pointer rounded-l-full text-white text-base font-bold"
                  >
                    {showBtnLoader ? <BtnLoader /> : "إرسال"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-14">
            <div className="w-[70%] hover:bg-secondryColor duration-300 shadow-md max-lg:w-full flex items-center gap-8 p-5 rounded-lg lg:rounded-l-full bg-[#72C17C]">
              <div className="size-[100px] flex justify-center items-center lg:bg-white rounded-full">
                <FontAwesomeIcon
                  className="text-5xl max-lg:text-white text-[#72C17C]"
                  icon={faLocationDot}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl text-white font-bold">العنوان</h4>
                <p className="text-xl text-white font-medium">
                  جمعية البر بجدة الادارة العامة، الزهراء، 3413 6780 البترجي،
                  جدة 23521
                </p>
              </div>
            </div>

            <div className="w-[60%] hover:bg-secondryColor duration-300 shadow-md max-lg:w-full flex items-center gap-8 p-5 rounded-lg lg:rounded-l-full bg-[#00833a]">
              <div className="size-[100px] flex justify-center items-center lg:bg-white rounded-full">
                <FontAwesomeIcon
                  className="text-5xl max-lg:text-white text-[#00833a]"
                  icon={faPeopleGroup}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl text-white font-bold">من نحن</h4>
                <p className="text-xl text-white font-medium">
                  جمعية خيرية تسعى للمساهمة في سد حاجة المعوزين بدعم المانحين
                </p>
              </div>
            </div>

            <div className="w-[50%] hover:bg-secondryColor duration-300 shadow-md max-lg:w-full flex items-center gap-8 p-5 rounded-lg lg:rounded-l-full bg-orange-500">
              <div className="size-[100px] flex justify-center items-center lg:bg-white rounded-full">
                <FontAwesomeIcon
                  className="text-5xl max-lg:text-white text-mainColor"
                  icon={faAddressCard}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl text-white font-bold">تواصل معنا</h4>
                <a
                  href="mailto:info@albir.sa"
                  className="text-xl text-white font-medium"
                >
                  info@albir.sa
                </a>
                <a
                  href="tel:920005757"
                  className="text-xl text-white font-medium"
                >
                  920005757
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default ContactUs;
