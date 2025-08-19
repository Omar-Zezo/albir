import CartItemsContainer from "../../components/Cart/CartItemsContainer";
import { getUserCart } from "../../store/slices/cart/cart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CheckoutPopup from "../../utils/checkoutPopup";
import { toast } from "react-toastify";
import { getCheckout } from "../../store/slices/cart/checkout";
import { useNavigate } from "react-router-dom";
import { faCoins, faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";

const Cart = () => {
  const [cartItems, setCartItems] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");
  const [checkout_id, setCheckout_id] = useState(null);
  const [order_id, setOrder_id] = useState(null);
  const [showCheckoutPopUp, setShowCheckoutPopUp] = useState(false);
  const { data } = useSelector((state) => state.cart);
  const checkoutData = useSelector((state) => state.checkout);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const errorMsg = (msg) => toast.error(msg);

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          setCartItems(data.data.data);
        }
      }
    }
  }, [data]);

  // handel checkout
  const handleCheckoutSubmit = () => {
    if (selectedValue !== "") {
      dispatch(
        getCheckout({
          payment_ways:
            selectedValue === "MADA" || selectedValue === "VISA MASTER"
              ? "credit_card"
              : "bank_transfer",
          payment_brand: "VISA MASTER",
        })
      );
    } else {
      errorMsg("من فضلك قم بتحديد طريقة الدفع");
    }
  };

  useEffect(() => {
    if (checkoutData) {
      if (checkoutData.data) {
        if (checkoutData.data.data) {
          if (checkoutData.data.data.data) {
            if (checkoutData.data.data.data.donation_code) {
              window.location = `/bank_transfer/${checkoutData.data.data.data.donation_code}`;
            }
            if (checkoutData.data.data.data.checkout_id) {
              setCheckout_id(checkoutData.data.data.data.checkout_id);
              setShowCheckoutPopUp(true);
              setOrder_id(checkoutData.data.data.data.order_id);
            }
          }
        }
      }
    }
  }, [checkoutData]);

  return cartItems ? (
    <div className="mt-5">
      <Helmet>
        <title>جمعية البر - سلة التبرعات</title>
      </Helmet>
      <div>
        <div className="w-full pb-5">
          <div className="flex justify-between">
            <h2 className="w-fit text-right text-xl font-medium">
              سلة التبرعات
            </h2>
          </div>
          <CartItemsContainer cartItems={cartItems} />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="total" className="text-lg text-[#777] font-bold">
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
                onChange={(e) => setSelectedValue(e.target.value)}
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
                selectedValue === "VISA MASTER" ? "bg-mainColor text-white" : ""
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
              <FontAwesomeIcon className="text-lg" icon={faCcMastercard} />
              بطاقة إئتمانية
            </label>
          </div>
        </div>
        <p className="text-base text-secondryColor font-medium">
          في حالة التحويل البنكي ولاتمام العملية قم بارفاق إيصال السداد وبيانات
          البنك من صفحة الفواتير
        </p>
        <button
          onClick={handleCheckoutSubmit}
          className="w-fit text-white px-10 py-5 text-base font-bold bg-mainColor hover:bg-secondryColor duration-300 rounded-l-full "
        >
          تبرع الأن
        </button>
      </div>

      {showCheckoutPopUp && (
        <CheckoutPopup
          showCheckoutPopUp={showCheckoutPopUp}
          setShowCheckoutPopUp={setShowCheckoutPopUp}
          checkout_id={checkout_id}
          payment_brand={selectedValue}
          order_id={order_id}
        />
      )}
    </div>
  ) : (
    <p className="text-lg text-secondryColor text-center font-semibold">
      لا يوجد اي عناصر
    </p>
  );
};

export default Cart;
