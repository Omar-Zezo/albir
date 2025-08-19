import { useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import DonateNowPopup from "../../utils/DonateNowPopup";
import { SR } from "../../images/svg";
import { toast } from "react-toastify";

const ProjectCard = ({ service, categoryName }) => {
  console.log(service)
  const [price, setPrice] = useState(
    service?.basic_service_value ? service?.basic_service_value : 0
  );
  const [qty, setQty] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showDonatePopUp, setShowDonatePopUp] = useState(false);
  const [donationDetails, setDonationDetails] = useState(null);
  const [multiPrice, setMultiPrice] = useState(null);

  const errorMsg = (msg) => toast.error(msg);

  const getDonation = (data, price) => {
    setDonationDetails(data);
    setMultiPrice(price);
  };

  const donateNow = () => {
    if (service?.price_value === "variable" || service?.price_value === "multi") {
      if (price) {
        setShowDonatePopUp(true);
        getDonation(service, price);
      } else {
        errorMsg("من فضلك قم بتحديد مبلغ التبرع أولاً");
      }
    } else {
      setShowDonatePopUp(true);
      getDonation(service, price);
    }
  };

  return (
    <>
      <div className="flex flex-col mb-8 gap-5 shrink-0 shadow-md pb-5 rounded-b-xl">
        <div className="w-full h-[302px] relative rounded-tl-xl rounded-tr-xl">
          <span className="text-white text-[12px] font-bold bg-[#00833a] absolute z-10 py-[3px] px-[10px] rounded-lg top-[10px] right-[10px]">
            {service?.section?.title} {categoryName}
          </span>
          <Link to={`/services-sections/show/${service?.id}`}>
          <img
            className="size-full object-cover rounded-t-xl"
            src={service?.image_path}
            alt="img"
          />
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <p
            style={{ marginRight: `${Number(service?.percent)}%` }}
            className="w-fit px-2 py-1 mr-[15%] bg-mainColor relative text-white text-sm font-bold rounded-tr-[5px] rounded-tl-[5px] percentage-arrow"
          >
            {Math.round(service?.percent)}%
          </p>
          <div className="w-[90%] mx-auto h-[9px] bg-[#f1f1f1] relative rounded-md">
            <div
              style={{ width: `${Number(service?.percent)}%` }}
              className={`h-full absolute top-0 right-0 bg-mainColor rounded-md`}
            ></div>
          </div>
          <div className="w-[90%] mx-auto flex justify-between pb-[30px] border-b border-[#e4e4e4]">
            <p className="w-fit flex font-bold items-center text-sm text-[#7e7e7e]">
              <strong className={`text-black ml-1 text-[15px]`}>تم جمع:</strong>{" "}
              {service?.collected_value}
              <img width={16} src={SR} alt="sr" className="mr-1" />
            </p>
            <p className="w-fit flex items-center text-sm font-bold text-[#7e7e7e]">
              <strong className={`text-black ml-1 text-[15px]`}>
                المبلغ المطلوب:
              </strong>{" "}
              {service?.target_value}
              <img width={16} src={SR} alt="sr" className="mr-1" />
            </p>
          </div>
          <div className="w-[90%] mx-auto flex flex-col gap-5">
            <Link
              to={`/services-sections/show/${service?.id}`}
              className="text-lg text-secondryColor font-bold hover:text-mainColor duration-300"
            >
              {service?.title}
            </Link>
            <div className="w-full flex">
              <div className="w-full flex flex-col gap-2">
                <ul className="w-full flex justify-between">
                  <li className="w-fit text-sm  text-[#7e7e7e]">السعر</li>
                  <li className="w-fit text-sm text-[#7e7e7e]">الكمية</li>
                </ul>
                <div className="flex items-center">
                  {service?.price_value === "fixed" ? (
                    <input
                      disabled
                      value={price}
                      type="text"
                      className="flex-1 p-1 text-center outline-none bg-[#e9ecef] rounded-r-md"
                    />
                  ) : service?.price_value === "multi" ? (
                    <ul className="flex-1 flex justify-center gap-2 p-1 text-center outline-none bg-[#e9ecef] rounded-r-md">
                      {service?.multiple_service_values?.map((value, index) => (
                        <li
                          onClick={(e) => {
                            setPrice(e.target.innerText);
                            setSelectedIndex(index);
                          }}
                          key={value}
                          className={`w-full px-1 rounded-sm border-secondryColor ${selectedIndex === index ? 'w-full bg-green-600 text-white shrink':'bg-mainColor text-white flex-1'} cursor-pointer font-semibold`}
                        >
                          {value}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <input
                      value={price}
                      type="text"
                      className="flex-1 p-1 text-center outline-none rounded-r-md bg-[#e9ecef]"
                      onChange={(e) => setPrice(e.target.value)}
                      onFocus={() => setPrice("")}
                    />
                  )}
                  <FontAwesomeIcon
                    className={`text-base p-2 bg-mainColor rounded-r-md mr-1 cursor-pointer text-white hover:bg-secondryColor duration-300`}
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
                <div className="w-fit flex items-center gap-2 mr-auto">
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
        <DonateNowPopup
          donationDetails={donationDetails}
          showDonatePopUp={showDonatePopUp}
          setShowDonatePopUp={setShowDonatePopUp}
          multiPrice={multiPrice}
          qty={qty}
          totalAmount={multiPrice * qty}
        />
      </div>
    </>
  );
};

export default ProjectCard;
