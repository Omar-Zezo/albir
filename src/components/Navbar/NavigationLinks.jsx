import React from "react";
import { Link, NavLink } from "react-router-dom";
import { aboutLinks, mediaCenter } from "../../constant";

const NavigationLinks = ({
  allPages,
  setShowLogin,
  donateOnlineLinks,
  loggedUserInfo,
}) => {

  const token = localStorage.getItem('token')

  return (
    <div className="container flex items-center gap-[10px]">
      <div className="w-[calc(100%-223px)] pr-[85px] bg-secondryColor rounded-tr-full rounded-br-full">
        <ul className="navbar flex items-center gap-5">
          <li>
            <NavLink
              to="/"
              className="block py-6 text-[#9e9e9e] text-[15px] font-medium hover:text-white duration-300"
            >
              الرئيسية
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about-the-association"
              onClick={(e) => e.preventDefault()}
              className="sub-menu block py-6 text-[#9e9e9e] text-[15px] font-medium hover:text-white duration-300 relative pl-4 link-arrow hover:after:border-white"
            >
              تعرف علينا
              <ul className="inner-sub-menu w-[250px] pt-6 hidden bg-white absolute z-[-1] rounded-b-lg">
                {aboutLinks.map((link) => (
                  <li key={link.name} className="w-full">
                    <Link
                      to={link.link}
                      className="block pr-5 pl-2 py-3 text-base text-secondryColor font-semibold hover:bg-mainColor hover:text-white duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                {allPages?.map((link) => (
                  <li key={link.id} className="w-full">
                    <Link
                      to={`/pages/${link.id}`}
                      className="block pr-5 pl-2 py-3 text-base text-secondryColor font-semibold hover:bg-mainColor hover:text-white duration-300"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/albir-friends"
              className="block py-6 text-[#9e9e9e] text-[15px] font-medium hover:text-white duration-300"
            >
              أصدقاء البر
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/c"
              className="sub-menu block py-6 text-[#9e9e9e] text-[15px] font-medium hover:text-white duration-300 relative pl-4 link-arrow hover:after:border-white"
            >
              تبرع أونلاين
              <ul className="inner-sub-menu w-[250px] pt-6 hidden bg-white absolute z-[-1] rounded-b-lg">
                {donateOnlineLinks?.map((link) => (
                  <li key={link?.id} className="w-full">
                    <Link
                      to={`/donate-online/show/${link?.id}`}
                      className="block pr-5 pl-2 py-3 text-base text-secondryColor font-semibold hover:bg-mainColor hover:text-white duration-300"
                    >
                      {link?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={(e)=> {
                e.stopPropagation()
                token === null ? setShowLogin(true): navigate('/add-gift')
              }}
              to="/add-gift"
              className="block py-6 text-[#9e9e9e] text-[15px] font-medium hover:text-white duration-300"
            >
              إهداء تبرع
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/c"
              className="sub-menu block py-6 text-[#9e9e9e] text-[15px] font-medium hover:text-white duration-300 relative pl-4 link-arrow hover:after:border-white"
            >
              المركز الإعلامي
              <ul className="inner-sub-menu w-[250px] pt-6 hidden bg-white absolute z-[-1] rounded-b-lg">
                {mediaCenter.map((link) => (
                  <li key={link.name} className="w-full">
                    <Link
                      to={link.link}
                      className="block pr-5 pl-2 py-3 text-base text-secondryColor font-semibold hover:bg-mainColor hover:text-white duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/f"
              className="block py-6 text-[#9e9e9e] text-[15px] font-medium hover:text-white duration-300"
            >
              خدمات المُستفيدين
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact-us"
              className="block py-6 text-[#9e9e9e] text-[15px] font-medium hover:text-white duration-300"
            >
              إتصل بنا
            </NavLink>
          </li>
        </ul>
      </div>
      {loggedUserInfo ? (
        <Link
          to={`/profile`}
          onClick={()=> setShowLogin(false)}
          className="flex-1 h-[70.5px] text-lg flex items-center justify-center bg-mainColor text-white font-bold rounded-bl-full rounded-tl-full hover:bg-green-700 duration-300"
        >
          {loggedUserInfo ? `مرحباً ${loggedUserInfo?.phone}` : "تسجيل الدخول"}
        </Link>
      ) : (
        <div
          className="flex-1 h-[70.5px] cursor-pointer text-lg flex items-center justify-center bg-mainColor text-white font-bold rounded-bl-full rounded-tl-full hover:bg-green-700 duration-300"
          onClick={(e) => {
            setShowLogin(true);
          }}
        >
          {loggedUserInfo ? `مرحباً ${loggedUserInfo?.phone}` : "تسجيل الدخول"}
        </div>
      )}
    </div>
  );
};

export default NavigationLinks;
