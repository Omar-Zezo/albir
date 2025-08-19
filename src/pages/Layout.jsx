import { Outlet } from "react-router-dom";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import SocialMediaIcons from "../utils/SocialMediaIcons";
import MobileNav from "../utils/MobileNav";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactInfo } from "../store/slices/Home/contactInfo";
import MobileMenu from "../utils/MobileMenu";
import { getPages } from "../store/slices/pages/pages";
import Login from "../utils/Login";
import BottomNavigation from "../utils/BottomNavigation";
import StickyNavbar from "../utils/StickyNavbar";
import { getDonateOnline } from "../store/slices/Home/donateOnline";
import { getLoggedUser } from "../store/slices/auth/loggedUser";
import { ToastContainer } from "react-toastify";
import { Favicon } from "../images/imgs";
import { Helmet } from "react-helmet";

const Layout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loggedUserInfo, setLoggedUserInfo] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);
  const [allPages, setAllPages] = useState(null);
  const [donateOnlineLinks, setDonateOnlineLinks] = useState(null);
  const { data } = useSelector((state) => state.contactInfo);
  const allPagesData = useSelector((state) => state.pages);
  const donateOnlineData = useSelector((state) => state.donateOnline);
  const loggedUserData = useSelector((state) => state.loggedUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactInfo());
  }, []);

  useEffect(() => {
    dispatch(getLoggedUser());
  }, []);

  useEffect(() => {
    dispatch(getPages());
  }, []);

  useEffect(() => {
    dispatch(getDonateOnline());
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

  return (
    <>
      <Helmet>
        {/* <meta name="description" content={settings?.description} />
        <meta name="keywords" content={settings?.keywords} /> */}
        <link rel="icon" type="image/png" href={Favicon}></link>
      </Helmet>
      <StickyNavbar
        allPages={allPages}
        donateOnlineLinks={donateOnlineLinks}
        setShowLogin={setShowLogin}
      />
      <Navbar
        loggedUserInfo={loggedUserInfo}
        contactInfo={contactInfo}
        allPages={allPages}
        setShowLogin={setShowLogin}
        donateOnlineLinks={donateOnlineLinks}
      />
      <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      <MobileNav showMenu={showMenu} setShowMenu={setShowMenu} />
      <BottomNavigation setShowLogin={setShowLogin} />
      <MobileMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        allPages={allPages}
        donateOnlineLinks={donateOnlineLinks}
      />
      {/* <SocialMediaIcons contactInfo={contactInfo}/> */}
      <Outlet />
      <Footer contactInfo={contactInfo} />
      <ToastContainer position="top-center" className="z-[99999]" />
    </>
  );
};

export default Layout;
