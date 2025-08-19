import {
  faCalendarDays,
  faEye,
  faHandHoldingDollar,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SR } from "../../images/svg";

const DonationRecordCard = ({ item }) => {
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
          <div className="rounded-full mr-auto text-lg bg-mainColor text-white hover:bg-secondryColor duration-300">
            <a
              href={item?.invoice_url}
              target="_blanck"
              className="size-10 flex items-center justify-center"
            >
              <FontAwesomeIcon className="text-lg" icon={faEye} />
            </a>
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
            تاريخ التبرع:
          </p>
          <p className="text-lg text-mainColor font-semibold">
            {item?.created_at}
          </p>
        </li>

        <li className="flex items-center gap-2">
          <div className="size-8 flex items-center justify-center bg-secondryColor rounded-full">
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

export default DonationRecordCard;
