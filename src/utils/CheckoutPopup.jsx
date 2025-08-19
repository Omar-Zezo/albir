import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HyperPayWidget from "./HyperPayWidget";

const CheckoutPopup = ({ showCheckoutPopUp, setShowCheckoutPopUp, checkout_id, payment_brand, order_id }) => {

  return (
    <div
      onClick={() => setShowCheckoutPopUp(false)}
      className={`fixed top-0 left-0 z-[999] ${
        showCheckoutPopUp ? "flex" : "hidden"
      } justify-center items-center size-full bg-black/70`}
    >
      <div
        className="bg-transparent w-full lg:w-[600px] min-h-[90%] rounded-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hidden items-center justify-between px-4 py-5 rounded-t-xl">
          <p className="text-xl text-secondryColor font-bold">
            ادفع الآن - {"جمعية البر"}
          </p>
          <FontAwesomeIcon
            className="text-xl text-zinc-500 cursor-pointer"
            icon={faX}
            onClick={() => setShowCheckoutPopUp(false)}
          />
        </div>

        {true ? (
          <div className="size-full flex items-center justify-center absolute top-0 left-0">
            <HyperPayWidget paymentObj={{checkout_id:checkout_id, payment_brand: payment_brand, order_id: order_id}} />
          </div>
        ) : (
          <div className="flex flex-col p-5 gap-3">
            <h3 className="text-xl font-bold text-secondryColor">
              {"جمعةي البر"}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPopup;
