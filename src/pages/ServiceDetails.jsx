import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { HeaderBg } from "../images/imgs";
import { getServiceDetails } from "../store/slices/Home/serviceDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { SR } from "../images/svg";
import DonateNowPopup from "../utils/DonateNowPopup";
import PageLoader from "../utils/PageLoader";
import { toast } from "react-toastify";
import ScrollToTop from "../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const ServiceDetails = () => {
  const [details, setDetails] = useState(null);
  const { data } = useSelector((state) => state.serviceDetails);
  const [price, setPrice] = useState(null);
  const [qty, setQty] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [showDonatePopUp, setShowDonatePopUp] = useState(false);
  const [donationDetails, setDonationDetails] = useState(null);
  const [multiPrice, setMultiPrice] = useState(null);

  const errorMsg = (msg) => toast.error(msg);

  useEffect(() => {
    if (
      details?.price_value === "fixed" ||
      details?.price_value === "percent"
    ) {
      setPrice(details?.basic_service_value);
    }
  }, [details]);

  //donate now
  const donateNow = () => {
    if (
      details?.price_value === "variable" ||
      details?.price_value === "multi"
    ) {
      if (price) {
        setShowDonatePopUp(true);
        getDonation(details, price);
      } else {
        errorMsg("من فضلك قم بتحديد قيمة التبرع أولاً");
      }
    } else {
      setShowDonatePopUp(true);
      getDonation(details, price);
    }
  };

  const getDonation = (data, price) => {
    setDonationDetails(data);
    setMultiPrice(price);
  };

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getServiceDetails(id));
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          setDetails(data.data.data);
        }
      }
    }
  }, [data]);

  return !details ? (
    <PageLoader />
  ) : (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - تفاصيل الخدمة</title>
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
                  تفاصيل الخدمة
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <span>-</span>
                  <p className="underline">{details?.title}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-20">
          <div className="container flex flex-col gap-4">
            <div className="w-full h-[300px] rounded-xl">
              <img
                src={details?.image_path}
                alt="project-img"
                className="size-full object-cover rounded-xl"
              />
            </div>
            <div className="flex max-xl:flex-col items-center bg-gray-100 xl:p-5 p-2 rounded-xl">
              <div className="w-[60%] max-xl:w-full flex flex-col gap-4 max-xl:order-2">
                <h3 className="text-[36px] max-xl:text-3xl mt-6 text-secondryColor font-bold">
                  {details?.title}
                </h3>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl text-[#444] font-bold">
                      وصف الخدمة:
                    </h3>
                    <p className="lg:w-[90%] text-lg text-[#7e7e7e] font-medium">
                      {details ? parse(details?.content) : null}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl text-[#444] font-bold">
                      طريقة عمل الخدمة:
                    </h3>
                    <p className="text-lg text-[#7e7e7e] font-medium">
                      {details
                        ? parse(details?.how_does_the_service_work)
                        : null}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-[38%] max-xl:w-full mr-auto flex flex-col gap-4 bg-white p-4 rounded-xl">
                <p
                  style={{ marginRight: `${Number(details?.percent)}%` }}
                  className={`w-fit px-2 py-1 mr-[15%] bg-mainColor relative text-white text-sm font-bold rounded-tr-[5px] rounded-tl-[5px] percentage-arrow`}
                >
                  {Math.round(details?.percent)}%
                </p>
                <div className="w-[90%] mx-auto h-[9px] bg-[#f1f1f1] relative rounded-md">
                  <div
                    style={{ width: `${Number(details?.percent)}%` }}
                    className={`h-full absolute top-0 right-0 bg-mainColor rounded-md`}
                  ></div>
                </div>
                <div className="w-[90%] mx-auto flex justify-between pb-[30px] border-b border-[#e4e4e4]">
                  <p className="w-fit flex font-bold items-center text-sm text-[#7e7e7e]">
                    <strong className={`text-black ml-1 text-[15px]`}>
                      تم جمع:
                    </strong>{" "}
                    {details?.collected_value}
                    <img width={15} src={SR} alt="ryal" className="mr-1" />
                  </p>
                  <p className="w-fit flex items-center text-sm font-bold text-[#7e7e7e]">
                    <strong className={`text-black ml-1 text-[15px]`}>
                      المبلغ الطلوب:
                    </strong>{" "}
                    {details?.target_value}
                    <img width={15} src={SR} alt="ryal" className="mr-1" />
                  </p>
                </div>
                <div className="w-[90%] mx-auto flex flex-col gap-5">
                  <h3 className="text-lg text-secondryColor font-bold duration-300">
                    {details?.title}
                  </h3>
                  <div dir="rtl" className="w-full flex">
                    <div className="w-full flex flex-col gap-2">
                      <ul className="w-full flex justify-between">
                        <li className="w-fit text-sm  text-[#7e7e7e]">السعر</li>
                        <li className="w-fit text-sm text-[#7e7e7e]">الكمية</li>
                      </ul>
                      <div className="flex items-center gap-2">
                        {details?.price_value === "fixed" ? (
                          <input
                            disabled
                            value={price}
                            type="text"
                            className="flex-1 p-1 text-center outline-none bg-[#e9ecef]"
                          />
                        ) : details?.price_value === "multi" ? (
                          <ul className="flex-1 flex justify-center gap-2 p-1 text-center outline-none bg-[#e9ecef]">
                            {details?.multiple_service_values?.map(
                              (value, index) => (
                                <li
                                  onClick={(e) => {
                                    setPrice(e.target.innerText);
                                    setSelectedIndex(index);
                                  }}
                                  key={value}
                                  className={`w-full px-1 rounded-sm border-secondryColor ${
                                    selectedIndex === index
                                      ? "w-full bg-green-600 text-white shrink"
                                      : "bg-mainColor text-white flex-1"
                                  } cursor-pointer font-semibold`}
                                >
                                  {value}
                                </li>
                              )
                            )}
                          </ul>
                        ) : details?.price_value === "variable" ? (
                          <input
                            value={price}
                            type="text"
                            className="flex-1 p-1 text-center outline-none bg-[#e9ecef] ml-2 rounded-r-md"
                            onChange={(e) => setPrice(e.target.value)}
                            onFocus={() => setPrice("")}
                          />
                        ) : null}
                        <FontAwesomeIcon
                          className={`text-base p-2 bg-mainColor rounded-br-md rounded-tr-md cursor-pointer text-white hover:bg-secondryColor duration-300`}
                          icon={faMinus}
                          onClick={() => {
                            if (qty > 1) {
                              setQty(qty - 1);
                            }
                          }}
                        />
                        <input
                          value={qty}
                          type="number"
                          className="w-[20%] p-1 text-center outline-none"
                          onChange={(e) => setQty(e.target.value)}
                          onFocus={() => setQty("")}
                        />
                        <FontAwesomeIcon
                          className="text-base p-2 bg-mainColor rounded-bl-md rounded-tl-md cursor-pointer text-white hover:bg-secondryColor duration-300"
                          icon={faPlus}
                          onClick={() => setQty(qty + 1)}
                        />
                      </div>
                      <div className="w-fit mr-auto">
                        <button
                          onClick={donateNow}
                          className="w-fit mt-5 py-3 px-6 rounded-tl-full rounded-bl-full bg-mainColor text-white text-lg font-bold"
                        >
                          تبرع الأن
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DonateNowPopup
          donationDetails={donationDetails}
          showDonatePopUp={showDonatePopUp}
          setShowDonatePopUp={setShowDonatePopUp}
          multiPrice={multiPrice}
          qty={qty}
          totalAmount={multiPrice * qty}
        />
      </div>
    </ScrollToTop>
  );
};

export default ServiceDetails;
