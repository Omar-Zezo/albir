import { Link, useParams } from "react-router-dom";
import { HeaderBg } from "../../images/imgs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faCircleCheck, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getMemberDetails } from "../../store/slices/friendsOfAlbir/memberDetails";
import PageLoader from "../../utils/PageLoader";

const MemberDetails = () => {
  const [member, setMember] = useState(null);

  const { data } = useSelector((state) => state.memberDetails);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getMemberDetails(id));
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          setMember(data.data.data);
        }
      }
    }
  }, [data]);

  return (
    !member ? (
      <PageLoader/>
    ):(
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
                تفاصيل العضوية
              </h2>
              <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                <Link to="/">الرئيسية</Link>
                <span>-</span>
                <p className="underline">تفاصيل العضوية</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container overflow-x-auto flex flex-col gap-10 rounded-xl p-10 max-xl:px-5">
        <div className="flex items-center gap-2">
          <p className="text-xl text-secondryColor font-semibold">
            {member?.first_name}
          </p>
          {member?.status === "active" && (
            <p className="px-2 py-1 text-sm text-white rounded-md bg-green-600 font-bold">
              مُفعل
            </p>
          )}
        </div>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-1 text-lg text-mainColor font-semibold">
            اسم المستخدم:{" "}
            <p className="text-secondryColor">{member?.username}</p>
          </li>
          <li className="flex items-center gap-1 text-lg text-mainColor font-semibold">
            البريد الإلكتروني:{" "}
            <p className="text-secondryColor">{member?.email}</p>
          </li>
          <li className="flex items-center gap-1 text-lg text-mainColor font-semibold">
            رقم الهاتف: <p className="text-secondryColor">{member?.phone}</p>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            className="text-xl text-green-700"
            icon={faCircleCheck}
          />
          <p className="text-lg text-secondryColor font-semibold">
            طرق الدفع : {member?.payment_ways === "bank_transfer" && "التحويل المصرفي"}
          </p>
        </div>
        <a
          download
          href={member?.cv_path}
          className="w-fit px-10 py-5 bg-mainColor hover:bg-secondryColor duration-300 rounded-l-full text-white text-lg font-bold"
        >
          <FontAwesomeIcon
            className="text-2xl text-white ml-2"
            icon={faDownload}
          />
          تحميل السيرة الذاتية
        </a>
      </div>
    </div>
    )
  );
};

export default MemberDetails;
