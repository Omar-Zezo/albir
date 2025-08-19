import { Link, Outlet, useNavigate } from "react-router-dom";
import { HeaderBg } from "../../images/imgs";
import NavigationProfile from "../../components/Profile/NavigationProfile";
import Navbar from "../../utils/Navbar";
import Footer from "../../utils/Footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactInfo } from "../../store/slices/Home/contactInfo";
import { getPages } from "../../store/slices/pages/pages";
import { getDonateOnline } from "../../store/slices/Home/donateOnline";
import MobileNav from "../../utils/MobileNav";
import MobileMenu from "../../utils/MobileMenu";
import BottomNavigation from "../../utils/BottomNavigation";
import Login from "../../utils/Login";
import StickyNavbar from "../../utils/StickyNavbar";
import { getLoggedUser } from "../../store/slices/auth/loggedUser";
import { ToastContainer } from "react-toastify";
import { SR } from "../../images/svg";
import PageLoader from "../../utils/PageLoader";

const ProfileLayout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loggedUserInfo, setLoggedUserInfo] = useState(null);
  const [showOtp, setShowOtp] = useState(false);
  const [contactInfo, setContactInfo] = useState(null);
  const [allPages, setAllPages] = useState(null);
  const [donateOnlineLinks, setDonateOnlineLinks] = useState(null);
  const { data } = useSelector((state) => state.contactInfo);
  const allPagesData = useSelector((state) => state.pages);
  const donateOnlineData = useSelector((state) => state.donateOnline);
  const loggedUserData = useSelector((state) => state.loggedUser);

  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getContactInfo());
  }, []);

  useEffect(() => {
    dispatch(getPages());
  }, []);

  useEffect(() => {
    dispatch(getDonateOnline());
  }, []);

  useEffect(() => {
    dispatch(getLoggedUser());
  }, []);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          setContactInfo(data.data.data[0]);
        }
      }
    }
  }, [data]);

  //get  loggeduser data
  useEffect(() => {
    if (loggedUserData) {
      if (loggedUserData.data) {
        if (loggedUserData.data.data) {
          if (loggedUserData.data.data) {
            if (loggedUserData.data.data.data) {
              setLoggedUserInfo(loggedUserData.data.data.data);
            }
          }
        }
      }
    }
  }, [loggedUserData]);

  useEffect(() => {
    if (allPagesData) {
      if (allPagesData.data) {
        if (allPagesData.data.data) {
          if (allPagesData.data.data.data) {
            setAllPages(allPagesData.data.data.data);
          }
        }
      }
    }
  }, [allPagesData]);

  useEffect(() => {
    if (donateOnlineData) {
      if (donateOnlineData.data) {
        if (donateOnlineData.data.data) {
          if (donateOnlineData.data.data.data) {
            setDonateOnlineLinks(donateOnlineData.data.data.data);
          }
        }
      }
    }
  }, [donateOnlineData]);

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
  }, [token]);

  return !loggedUserInfo ? (
    <PageLoader />
  ) : (
    <>
      <StickyNavbar allPages={allPages} />
      <Navbar
        loggedUserInfo={loggedUserInfo}
        contactInfo={contactInfo}
        allPages={allPages}
        setShowLogin={setShowLogin}
        donateOnlineLinks={donateOnlineLinks}
      />
      <Login
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        showOtp={showOtp}
        setShowOtp={setShowOtp}
      />
      {showOtp && <OtpCode showOtp={showOtp} setShowOtp={setShowOtp} />}
      <MobileNav showMenu={showMenu} setShowMenu={setShowMenu} />
      <BottomNavigation setShowLogin={setShowLogin} />
      <MobileMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        allPages={allPages}
      />
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
                  الصفحة الشخصية
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <span>-</span>
                  <p className="underline">الصفحة الشخصية</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mt-10">
          <NavigationProfile />
          <div className="mt-5 flex max-xl:flex-wrap gap-5">
            <div className="w-[30%] max-xl:order-2 max-xl:w-full h-fit bg-gray-50 p-5 rounded-md">
              <ul className="flex flex-col gap-5 items-center">
                <li className="text-xl text-mainColor font-semibold">
                  عضوية رقم: {loggedUserInfo?.membership_no}
                </li>
                <li className="flex flex-col items-center gap-2 text-xl text-secondryColor font-medium">
                  <p className="text-slate-900 text-lg font-semibold">
                    عدد التبرعات
                  </p>
                  <p className="text-slate-900 text-base font-semibold">
                    <small className="text-mainColor text-base font-bold">
                      {loggedUserInfo?.donations_count}
                    </small>{" "}
                    تبرع
                  </p>
                </li>
                <li className="flex flex-col items-center gap-2 text-xl text-secondryColor font-medium">
                  <p className="text-slate-900 text-lg font-semibold">
                    مجمل التبرعات
                  </p>
                  <p className="text-slate-900 flex items-center gap-1 text-base font-semibold">
                    <small className="text-mainColor text-base font-bold">
                      {loggedUserInfo?.donations_total}
                    </small>{" "}
                    <img width={14} src={SR} alt="saudi-ryal" />
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full max-xl:order-1 bg-gray-50 rounded-md px-5 py-10">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer contactInfo={contactInfo} />
      <ToastContainer position="top-center" className="z-[99999]" />
    </>
  );
};

export default ProfileLayout;
