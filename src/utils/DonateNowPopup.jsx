import { faCoins, faMoneyCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getDonationPayment } from "../store/slices/donation/donationPayment";
import HyperPayWidget from "./HyperPayWidget";
import { getLoggedUser } from "../store/slices/auth/loggedUser";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";

const DonateNowPopup = ({
  showDonatePopUp,
  setShowDonatePopUp,
  donationDetails,
  multiPrice,
  qty,
  totalAmount,
}) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [paymentObj, setPaymentObj] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [phone, setPhone] = useState("");
  const [total_amount, setTotal_amount] = useState(null);
  const [loggedUserInfo, setLoggedUserInfo] = useState(null);
  const { data } = useSelector((state) => state.donationPayment);
  const loggedUserData = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();

  const errorMsg = (msg) => toast.error(msg);

  useEffect(() => {
    setTotal_amount(multiPrice);
  }, [multiPrice]);

  useEffect(() => {
    qty ? setQuantity(qty) : setQuantity(1)
  }, [qty]);

  useEffect(() => {
    setTotal_amount(totalAmount);
  }, [totalAmount]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (quantity >= 1 && phone !== "" && selectedValue !== "") {
      if (selectedValue === "MADA" || selectedValue === "VISA MASTER") {
        dispatch(
          getDonationPayment({
            service_id: donationDetails?.id,
            total_amount: total_amount,
            quantity,
            phone,
            payment_ways:
              selectedValue === "MADA" || selectedValue === "VISA MASTER"
                ? "credit_card"
                : "bank_transfer",
            payment_brand:
              selectedValue === "MADA" || selectedValue === "VISA MASTER"
                ? selectedValue
                : "VISA MASTER",
            order_type: "service",
          })
        );
      }

      if (selectedValue === "bank_transfer") {
        dispatch(
          getDonationPayment({
            service_id: donationDetails?.id,
            total_amount: total_amount,
            quantity,
            phone,
            payment_ways: "bank_transfer",
            payment_brand: "VISA MASTER",
            order_type: "service",
          })
        );
      }
    } else {
      errorMsg("من فضلك قم بإستكمال جميع الحقول");
    }
  };

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          if (data.data.data.checkout_id) {
            setPaymentObj(data.data.data);
          }
          if (data.data.data.donation_code) {
            window.location = `/bank_transfer/${data.data.data.donation_code}`;
          }
        }
      }
    }
  }, [data]);

  //get  loggeduser data

  useEffect(() => {
    dispatch(getLoggedUser());
  }, []);

  useEffect(() => {
    if (loggedUserData) {
      if (loggedUserData.data) {
        if (loggedUserData.data.data) {
          if (loggedUserData.data.data) {
            if (loggedUserData.data.data.data) {
              setLoggedUserInfo(loggedUserData.data.data.data);
              setPhone(loggedUserData.data.data.data?.phone);
            }
          }
        }
      }
    }
  }, [loggedUserData]);

  return (
    <div
      onClick={() => {
        setShowDonatePopUp(false);
        document.body.style.direction = "rtl";
      }}
      className={`fixed top-0 left-0 z-[999] ${
        showDonatePopUp ? "flex" : "hidden"
      } justify-center items-center size-full bg-black/70`}
    >
      <div
        className={`w-full lg:w-[670px] rounded-xl relative ${paymentObj ? 'bg-transparent':'bg-white'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`${paymentObj ? 'hidden':'flex'} bg-gray-200 items-center justify-between px-4 py-5 rounded-t-xl`}>
          <p className="text-xl text-secondryColor font-bold">
            ادفع الآن - {donationDetails?.title}
          </p>
          <FontAwesomeIcon
            className="text-xl text-zinc-500 cursor-pointer"
            icon={faX}
            onClick={() => setShowDonatePopUp(false)}
          />
        </div>

        {paymentObj ? (
          <div className="size-full flex items-center justify-center absolute top-0 left-0">
            <HyperPayWidget paymentObj={paymentObj} />
          </div>
        ) : (
          <div className="flex flex-col p-5 gap-3">
            <h3 className="text-xl font-bold text-secondryColor">
              {donationDetails?.title}
            </h3>
            <form className="flex flex-col gap-5" onSubmit={handleFormSubmit}>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="price"
                  className="text-lg text-mainColor font-semibold"
                >
                  المبلغ
                </label>
                <div className="flex justify-between items-center bg-gray-300 pl-5 rounded-md">
                  <input
                    id="price"
                    value={multiPrice}
                    disabled
                    className="h-full w-[90%] py-2 pr-5 outline-none text-base font-semibold bg-transparent"
                  />
                  <small className="text-sm font-bold text-secondryColor">
                    ر.س
                  </small>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="qty"
                  className="text-lg text-mainColor font-semibold"
                >
                  الكمية
                </label>
                <div className="flex justify-between items-center bg-gray-300 rounded-md">
                  <input
                    type="numbr"
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                      setTotal_amount(e.target.value * multiPrice);
                    }}
                    id="qty"
                    className="h-full w-full py-2 pr-5 outline-none text-base font-semibold bg-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="total"
                  className="text-lg text-mainColor font-semibold"
                >
                  القيمة الإجمالية
                </label>
                <div className="flex justify-between items-center bg-gray-300 pl-5 rounded-md">
                  <input
                    id="total"
                    disabled
                    value={total_amount}
                    className="h-full w-[90%] py-2 pr-5 text-base outline-none font-semibold bg-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="total"
                  className="text-lg text-mainColor font-semibold"
                >
                  رقم الهاتف
                </label>
                <div className="flex justify-between items-center bg-gray-300 rounded-md">
                  <input
                    id="phone"
                    disabled={loggedUserInfo ? true : false}
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    className="h-full w-full py-2 pr-5 text-base outline-none font-semibold bg-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="total"
                  className="text-lg text-mainColor font-semibold"
                >
                  أختر طريقة الدفع:
                </label>
                <div className="flex flex-wrap gap-5 items-center rounded-md">
                  <label
                    className={`w-fit flex items-center gap-2 text-mainColor text-lg font-semibold cursor-pointer border border-mainColor hover:bg-mainColor hover:text-white duration-300 rounded-[50px] px-5 py-2 ${
                      selectedValue === "bank_transfer"
                        ? "bg-mainColor text-white"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment_ways"
                      value="bank_transfer"
                      checked={selectedValue === "bank_transfer"}
                      onChange={(e) => {
                        setSelectedValue(e.target.value);
                        localStorage.setItem("payment_brand", e.target.value);
                      }}
                      className="mr-2 hidden"
                    />
                    <FontAwesomeIcon className="lg" icon={faCoins} />
                    تحويل بنكي
                  </label>

                  <label
                    className={`w-fit flex items-center gap-2 text-mainColor text-lg font-semibold cursor-pointer border border-mainColor hover:bg-mainColor hover:text-white duration-300 rounded-[50px] px-5 py-2 ${
                      selectedValue === "MADA" ? "bg-mainColor text-white" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment_ways"
                      value="MADA"
                      checked={selectedValue === "MADA"}
                      onChange={(e) => {
                        setSelectedValue(e.target.value);
                        localStorage.setItem("payment_brand", e.target.value);
                      }}
                      className="mr-2 hidden"
                    />
                    <FontAwesomeIcon className="text-lg" icon={faMoneyCheck} />
                    بطاقة مدى
                  </label>

                  <label
                    className={`w-fit flex items-center gap-2 text-mainColor text-lg font-semibold cursor-pointer border border-mainColor hover:bg-mainColor hover:text-white duration-300 rounded-[50px] px-5 py-2 ${
                      selectedValue === "VISA MASTER"
                        ? "bg-mainColor text-white"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment_ways"
                      value="VISA MASTER"
                      checked={selectedValue === "VISA MASTER"}
                      onChange={(e) => {
                        setSelectedValue(e.target.value);
                        localStorage.setItem("payment_brand", e.target.value);
                      }}
                      className="mr-2 hidden"
                    />
                    <FontAwesomeIcon
                      className="text-lg"
                      icon={faCcMastercard}
                    />
                    بطاقة إئتمانية
                  </label>
                </div>
              </div>
              <input
                type="submit"
                value="أدفع الان"
                className="bg-mainColor py-2 cursor-pointer hover:bg-secondryColor hover:text-white duration-300 text-white font-semibold"
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonateNowPopup;
