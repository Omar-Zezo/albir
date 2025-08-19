import {
  faCalendarDays,
  faEye,
  faFlag,
  faFontAwesome,
  faHandHoldingDollar,
  faMoneyBillWave,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SR } from "../../images/svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const BillCard = ({ item }) => {
  // const unpaidBillData = useSelector((state) => state.unpaidInvoice);

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // // handel unpaid
  // const handelUnpaid = (item) => {
  //   if (item?.payment_way === "bank_transfer") {
  //     navigate(`/bank_transfer/${item?.donation_code}`);
  //   } else {
  //     dispatch(
  //       makeUnpaidInvoice({
  //         donationCode: item?.donation_code,
  //         data: {
  //           payment_ways: item?.payment_way,
  //           payment_brand: "VISA MASTER MADA",
  //         },
  //       })
  //     );
  //   }
  // };

  // useEffect(() => {
  //   if (unpaidBillData) {
  //     if (unpaidBillData.data) {
  //       if (unpaidBillData.data.data) {
  //         if (unpaidBillData.data.data.data) {
  //           setPaymentObj(unpaidBillData.data.data.data);
  //           setShowHyperPayPopup(true);
  //         }
  //       }
  //     }
  //   }
  // }, [unpaidBillData]);

  return (
    <div className="w-[48%] max-xl:w-full mb-5 shadow-sm border border-black/30 p-5 hover:border-mainColor duration-300 rounded-lg">
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-2">
          <div className="size-8 flex items-center justify-center bg-secondryColor rounded-full">
            <FontAwesomeIcon
              className="text-base text-white"
              icon={faHandHoldingDollar}
            />
          </div>
          <p className="text-lg text-secondryColor font-semibold">
            كود التبرع:
          </p>
          <p className="text-lg text-mainColor font-semibold">
            {item?.donation_code} [
            {item?.donation_type === "gift" ? "إهداء" : "خدمة"}]
          </p>
          <div className="flex flex-col gap-5 mr-auto">
            <div className="rounded-full mr-auto text-lg bg-mainColor text-white hover:bg-secondryColor duration-300">
              <a
                href={item?.invoice_url}
                target="_blanck"
                className="size-10 flex items-center justify-center"
              >
                <FontAwesomeIcon className="text-lg" icon={faEye} />
              </a>
            </div>

            {item?.status !== "paid" ? (
              <div
                onClick={() => handelUnpaid(item)}
                className={`w-[100px] rounded-full flex cursor-pointer gap-1 py-2 px-3 items-center justify-center mr-auto text-lg bg-mainColor text-white hover:bg-secondryColor duration-300`}
              >
                <FontAwesomeIcon className="text-sm" icon={faFlag} />
                <p className="text-xs text-white font-medium">إكمال الدفع</p>
              </div>
            ) : null}
          </div>
        </li>

        <li className="flex items-center gap-2">
          <div className="size-8 flex items-center justify-center bg-secondryColor rounded-full">
            <FontAwesomeIcon
              className="text-base text-white"
              icon={faCalendarDays}
            />
          </div>
          <p className="text-lg text-secondryColor font-semibold">
            تاريخ الإضافة:
          </p>
          <p className="text-lg text-mainColor font-semibold">
            {item?.created_at}
          </p>
        </li>

        <li className="flex items-center gap-2">
          <div className="size-8 flex items-center justify-center bg-secondryColor rounded-full">
            <FontAwesomeIcon
              className="text-base text-white"
              icon={faMoneyBillWave}
            />
          </div>
          <p className="text-lg text-secondryColor font-semibold">
            طريقة الدفع:
          </p>
          <p className="text-lg text-mainColor font-semibold">
            {item?.payment_ways}
          </p>
          {item?.status === "paid" ? (
            <div
              className={`tool-parent size-8 mr-auto relative bg-green-600 text-white flex items-center justify-center rounded-full`}
            >
              <FontAwesomeIcon className="text-base" icon={faMoneyBillWave} />
              <span className="text-white font-medium hidden text-center text-[8px] bg-[#444] absolute top-[-21px] left-1/2 w-[45px] p-1">
                مدفوع
              </span>
            </div>
          ) : (
            <div
              className={`tool-parent size-8 mr-auto relative bg-red-600 text-white flex items-center justify-center rounded-full`}
            >
              <FontAwesomeIcon className="text-base" icon={faMoneyBillWave} />
              <span className="text-white font-medium hidden text-center text-[8px] bg-[#444] absolute top-[-21px] left-1/2 w-[45px] p-1">
                غير مدفوع
              </span>
            </div>
          )}
        </li>

        <li className="flex items-center gap-2">
          <div className="size-8 flex items-center justify-center bg-secondryColor rounded-full">
            <FontAwesomeIcon
              className="text-base text-white"
              icon={faFontAwesome}
            />
          </div>
          <p className="text-lg text-secondryColor font-semibold">النوع:</p>
          <p className="text-lg text-mainColor font-semibold">
            {item?.donation_type === "gift" ? "إهداء" : "خدمة"}
          </p>
          <div className="size-8 mr-auto font-bold bg-yellow-500 text-white flex items-center justify-center rounded-full">
            {item?.services_count}
          </div>
        </li>

        <li className="flex items-center gap-2">
          <div className="size-10 flex items-center justify-center bg-secondryColor rounded-full">
            <FontAwesomeIcon className="text-base text-white" icon={faWallet} />
          </div>
          <p className="text-lg text-secondryColor font-semibold">
            قيمة التبرع:
          </p>
          <p className="text-lg flex items-center gap-1 text-mainColor font-semibold">
            {item?.total_amount}
            <img width={14} src={SR} alt="saudi-ryal" />
          </p>
        </li>
      </ul>
    </div>
  );
};

export default BillCard;
