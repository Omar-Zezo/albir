import { Link } from "react-router-dom";
import { HeaderBg } from "../../images/imgs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import Faq from "../../components/About us/Faq";
import { getQuestion } from "../../store/slices/friendsOfAlbir/question";
import MembershipType from "../../components/About us/MembershipType";
import PageLoader from "../../utils/PageLoader";
import ScrollToTop from "../../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const AlbirFriends = () => {
  const [friendsAlbir, setFriendsAlbir] = useState(null);
  const [showMembershipType, setShowMembershipType] = useState(false);
  const [fqList, setFqList] = useState(null);
  const { data } = useSelector((state) => state.question);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestion());
  }, []);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          setFriendsAlbir(data.data.data);
          if (data.data.data.general_assembly_members) {
            setFqList(data.data.data.general_assembly_members);
          }
        }
      }
    }
  }, [data]);

  return !friendsAlbir ? (
    <PageLoader />
  ) : (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - أصدقاء البر</title>
      </Helmet>
      <div className="max-xl:pt-24 bg-[#e1e1e1] pb-10">
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
                  أصدقاء البر
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <span>-</span>
                  <p className="underline">أصدقاء البر</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-20 container">
          <div className="flex flex-wrap max-xl:gap-5 justify-between">
            <div className="w-[48%] max-xl:w-full bg-gray-50 h-[400px] rounded-md">
              <img
                src={fqList?.image_path}
                alt="albir-friends"
                className="object-cover size-full rounded-md"
              />
            </div>
            <div className="w-[48%] max-xl:w-full">
              <h2 className="text-[36px] max-xl:text-3xl text-secondryColor font-bold">
                اعضاء الجمعية العمومية
              </h2>
              <div className="flex flex-col gap-2 mt-10">
                <p className="text-lg text-[#7e7e7e] font-semibold">
                  قيمة الإشتراك :
                </p>
                {friendsAlbir?.packages?.map((pack) => (
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      className="text-lg text-mainColor"
                      icon={faAward}
                    />
                    <p className="text-lg text-[#7e7e7e] font-semibold">
                      {`${pack.title} ( ${pack.price} ) ريال سعودي سنوياً`}
                    </p>
                  </div>
                ))}
                <div className="bg-white rounded-xl pb-5 mt-10">
                  <Faq fqList={fqList} />
                </div>
                <div className="mt-12 flex flex-wrap items-center lg:gap-10 gap-5">
                  <Link
                    to="/about-the-association/list-of-members-of-the-general-assembly"
                    className="px-10 py-5 bg-mainColor hover:bg-secondryColor duration-300 rounded-l-full text-white text-base font-bold"
                  >
                    عرض القائمة
                  </Link>
                  <div
                    onClick={() => setShowMembershipType(true)}
                    className="w-fit px-10 py-5 bg-mainColor hover:bg-secondryColor duration-300 cursor-pointer rounded-l-full text-white text-base font-bold"
                  >
                    أنضم إلى القائمة
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showMembershipType && (
          <MembershipType
            showMembershipType={showMembershipType}
            setShowMembershipType={setShowMembershipType}
          />
        )}
      </div>
    </ScrollToTop>
  );
};

export default AlbirFriends;
