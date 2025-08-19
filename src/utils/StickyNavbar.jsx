import { Link, NavLink } from "react-router-dom";
import { aboutLinks, mediaCenter } from "../constant";
import { LogoWhite } from "../images/imgs";
import { useEffect, useState } from "react";

const StickyNavbar = ({ allPages, donateOnlineLinks }) => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  const token = localStorage.getItem('token')

  return (
    <nav
      className={`w-full max-xl:hidden bg-secondryColor fixed z-[99] ${
        sticky ? "top-0" : "top-[-100px]"
      } duration-500`}
    >
      <div className="container flex items-center justify-between">
        <div className="size-[100px]">
          <Link to="/">
            <img
              src={LogoWhite}
              alt="logo"
              className="size-full object-cover"
            />
          </Link>
        </div>
        <div>
          <ul className="navbar bg-secondryColor flex items-center gap-5">
            <li>
              <NavLink
                to="/"
                className="block py-6 text-[#9e9e9e] text-[15px] font-medium hover:text-white duration-300"
              >
                الرئيسية
              </NavLink>
            </li>

            <li className="relative group">
              <NavLink
                to="/about-the-association"
                onClick={(e) => e.preventDefault()}
                className="sub-menu block py-6 text-[#9e9e9e] text-[15px] font-medium hover:text-white duration-300 relative pl-4 link-arrow hover:after:border-white"
              >
                تعرف علينا
                <ul className="inner-sub-menu w-[250px] top-[61px] hidden bg-white absolute z-10 rounded-b-lg">
                  <div className="bg-secondryColor h-6"></div>
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
                <ul className="inner-sub-menu w-[250px] top-[61px] hidden bg-white absolute z-10 rounded-b-lg">
                  <div className="bg-secondryColor h-6"></div>
                  {donateOnlineLinks?.map((link) => (
                    <li key={link.id} className="w-full">
                      <Link
                        to={`/donate-online/show/${link?.id}`}
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
                onClick={(e) => {
                  e.stopPropagation();
                  token === null ? setShowLogin(true) : navigate("/add-gift");
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
                <ul className="inner-sub-menu w-[250px] top-[61px] hidden bg-white absolute z-10 rounded-b-lg">
                  <div className="bg-secondryColor h-6"></div>
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
      </div>
    </nav>
  );
};

export default StickyNavbar;
