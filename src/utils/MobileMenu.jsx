import { Link, NavLink } from "react-router-dom";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Close, LogoV } from "../images/svg";
import { aboutLinks, mediaCenter } from "../constant/index";
import { useState } from "react";

const MobileMenu = ({ showMenu, setShowMenu, allPages, donateOnlineLinks }) => {
  const [aboutLinksMenu, setAboutLinksMenu] = useState(false);
  const [mediaCenterMenu, setMediaCenterMenu] = useState(false);
  const [donationMenu, setDonationMenu] = useState(false);

  return (
    <div
      className={`fixed right-0 top-0 z-50 w-full h-screen bg-white flex flex-col gap-5 items-center justify-start pt-5 ${
        showMenu ? "mr-0" : "mr-[-100%]"
      } duration-300`}
    >
      <div className="w-full pr-5 pl-10 flex items-center justify-between">
      <img width={200} src={LogoV} alt="logo" />
      <div className="p-2 border border-black/50 rounded-lg">
      <img
        width={15}
        height={15}
        src={Close}
        alt="close"
        onClick={() => setShowMenu(false)}
      />
      </div>
      </div>
      <ul className="w-full h-screen overflow-y-auto pt-5 flex mobile-menu flex-col mt-10 items-center gap-5">
        <li className="text-black-200 text-xl">
          <NavLink
            className="px-8 pt-3 pb-2 font-semibold rounded-lg"
            to={"/"}
            onClick={() => setShowMenu(false)}
          >
            الرئيسية
          </NavLink>
        </li>

        <li className="text-black-200 text-xl">
          <NavLink
            to="/about-the-association"
            onClick={(e) => {
              e.preventDefault();
              setAboutLinksMenu(!aboutLinksMenu);
            }}
            className="px-8 pt-3 flex items-center gap-2 pb-2 flex-col font-semibold rounded-lg"
          >
            <div className="flex items-center gap-2">
              <h4>تعرف علينا</h4>
              <div className="size-fit text-lg font-semibold">{aboutLinksMenu ? "-":"+"}</div>
            </div>
            <ul
              className={`w-full overflow-y-auto pt-2 ${
                aboutLinksMenu ? "flex" : "hidden"
              } flex-col rounded-b-lg`}
            >
              {aboutLinks.map((link) => (
                <li key={link.name} className="max-w-[200px] text-center">
                  <NavLink
                    to={link.link}
                    className="block pr-5 pl-2 py-3 text-base text-secondryColor font-semibold hover:bg-mainColor hover:text-white duration-300"
                    onClick={() => setShowMenu(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              {allPages?.map((link) => (
                <li key={link.id} className="w-full max-w-[200px] text-center">
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

        <li className="text-black-200 text-xl">
          <NavLink
            className="px-8 pt-3 pb-2 font-semibold rounded-lg"
            to={"/albir-friends"}
            onClick={() => setShowMenu(false)}
          >
            أصدقاء البر
          </NavLink>
        </li>

        <li className="text-black-200 text-xl">
          <NavLink
            to="/d-o"
            onClick={(e) => {
              e.preventDefault();
              setDonationMenu(!donationMenu);
            }}
            className="px-8 pt-3 flex items-center gap-2 pb-2 flex-col font-semibold rounded-lg"
          >
            <div className="flex items-center gap-2">
              <h4>تبرع أونلاين</h4>
              <div className="size-fit text-lg font-semibold">{donationMenu ? "-":"+"}</div>
            </div>
            <ul
              className={`w-full overflow-y-auto pt-2 ${
              donationMenu ? "flex" : "hidden"
              } flex-col rounded-b-lg`}
            >
              {donateOnlineLinks?.map((link) => (
                <li key={link.id} className="max-w-[200px] text-center">
                  <NavLink
                    to={`/donate-online/show/${link?.id}`}
                    className="block pr-5 pl-2 py-3 text-base text-secondryColor font-semibold hover:bg-mainColor hover:text-white duration-300"
                    onClick={() => setShowMenu(false)}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </NavLink>
        </li>

        <li className="text-black-200 text-xl">
          <NavLink
            className="px-8 pt-3 pb-2 font-semibold rounded-lg"
            to={"/add-gift"}
            onClick={() => setShowMenu(false)}
          >
            إهداء تبرع
          </NavLink>
        </li>

        <li className="text-black-200 text-xl">
          <NavLink
            to="/m-c"
            onClick={(e) => {
              e.preventDefault();
              setMediaCenterMenu(!mediaCenterMenu);
            }}
            className="px-8 pt-3 flex items-center gap-2 pb-2 flex-col font-semibold rounded-lg"
          >
            <div className="flex items-center gap-2">
              <h4>المركز الأعلامي</h4>
              <div className="size-fit text-lg font-semibold">{mediaCenterMenu ? "-":"+"}</div>
            </div>
            <ul
              className={`w-full overflow-y-auto pt-2 ${
                mediaCenterMenu ? "flex" : "hidden"
              } flex-col rounded-b-lg`}
            >
              {mediaCenter.map((link) => (
                <li key={link.name} className="max-w-[200px] text-center">
                  <NavLink
                    to={link.link}
                    className="block pr-5 pl-2 py-3 text-base text-secondryColor font-semibold hover:bg-mainColor hover:text-white duration-300"
                    onClick={() => setShowMenu(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </NavLink>
        </li>

        <li className="text-black-200 text-xl">
          <NavLink
            className="px-8 pt-3 pb-2 font-semibold rounded-lg"
            to={"/a"}
            onClick={() => setShowMenu(false)}
          >
            خدمات المُستفيدين
          </NavLink>
        </li>

        <li className="text-black-200 text-xl">
          <NavLink
            className="px-8 pt-3 pb-2 font-semibold rounded-lg"
            to={"/contact-us"}
            onClick={() => setShowMenu(false)}
          >
            إتصل بنا
          </NavLink>
        </li>

        <li className="text-black-200 text-lg">
          <div
            className="px-8 pt-3 pb-2 font-semibold rounded-lg text-white bg-red-600"
            onClick={() => setShowMenu(false)}
          >
            <FontAwesomeIcon className="ml-2" icon={faRightFromBracket} />
            تسجيل الخروج
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
