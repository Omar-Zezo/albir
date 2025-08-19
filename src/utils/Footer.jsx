import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterBlock from "../components/Footer/FooterBlock";
import { aboutLinksFooter, membershipsFooter } from "../constant";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Method01,
  Method02,
  Method03,
  Method04,
  ShareLogo,
} from "../images/imgs";
import {
  faDiagramProject,
  faGlobe,
  faLink,
  faPhone,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { getModules } from "../store/slices/Home/modules";
import { Link } from "react-router-dom";

const Footer = ({ contactInfo }) => {
  const year = new Date().getFullYear();

  const [modules, setModules] = useState(null);
  const { data } = useSelector((state) => state.modules);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getModules());
  }, []);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          setModules(data.data.data);
        }
      }
    }
  }, [data]);

  return (
    <footer className="bg-[#242323] mt-10 max-xl:pb-[56px]">
      <div className="container flex max-xl:flex-col gap-10 py-10">
        <div className="w-1/2 max-xl:w-full">
          <div className="h-[450px]">
            <iframe
              src={contactInfo?.address_on_the_map}
              allowFullScreen=""
              loading="lazy"
              title="safarymap"
              className="size-full"
            ></iframe>
          </div>
        </div>
        <div className="w-1/2 max-xl:w-full flex flex-wrap gap-10 max-xl:gap-5 justify-between">
          <FooterBlock
            icon={faGlobe}
            title={"تعرف علينا"}
            links={aboutLinksFooter}
          />

          <div className="w-[45%] h-fit flex flex-col gap-4">
            <h3 className="text-mainColor text-xl flex items-center gap-4">
              <FontAwesomeIcon icon={faDiagramProject} />
              <strong>روابط أخرى</strong>
            </h3>
            <ul className="flex flex-col gap-4">
              {modules?.map((link) => (
                <li key={link?.id} className="flex items-center gap-3 text-lg text-white">
                <FontAwesomeIcon
                  className="text-[#666] font-bold"
                  icon={faLink}
                />
                <Link
                  to={`/modules/details/${link?.id}`}
                  className="text-base text-white font-semibold hover:text-mainColor duration-500"
                >
                  {link?.title}
                </Link>
              </li>
              ))}
              <>
                <li className="flex items-center gap-3 text-lg text-white">
                  <FontAwesomeIcon
                    className="text-[#666] font-bold"
                    icon={faLink}
                  />
                  <Link
                    to={`/about-the-association/surveys`}
                    className="text-base text-white font-semibold hover:text-mainColor duration-500"
                  >
                    الإستبيانات
                  </Link>
                </li>
                <li className="flex items-center gap-3 text-lg text-white">
                  <FontAwesomeIcon
                    className="text-[#666] font-bold"
                    icon={faLink}
                  />
                  <Link
                    to={`/about-the-association/employment-application`}
                    className="text-base text-white font-semibold hover:text-mainColor duration-500"
                  >
                    طلب توظيف
                  </Link>
                </li>
                </>
            </ul>
          </div>

          <FooterBlock
            icon={faUsers}
            title={"العضويات"}
            links={membershipsFooter}
          />

          <div className="w-[45%] h-fit flex flex-col gap-4">
            <h3 className="text-mainColor text-xl flex items-center gap-4">
              <FontAwesomeIcon icon={faPhone} />
              <strong>مركز خدمة العملاء</strong>
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-lg text-white">
                <FontAwesomeIcon
                  className="text-[#666] font-bold"
                  icon={faLink}
                />
                <a
                  href={`tel:920005757`}
                  className="text-base text-white font-semibold hover:text-mainColor duration-500"
                >
                  920005757
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container flex items-center gap-5 pb-8">
        <p className="text-lg text-mainColor font-semibold max-md:hidden">
          وسائل الدفع:
        </p>
        <div className="flex items-center max-md:mx-auto gap-4">
          <img
            src={Method01}
            alt="payment-method"
            className="w-[40px] lg:w-[70px]"
          />
          <img src={Method02} alt="payment-method" className="w-[70px]" />
          <img src={Method03} alt="payment-method" className="w-[40px]" />
          <img src={Method04} alt="payment-method" className="w-[70px]" />
        </div>
      </div>
      <div className="bg-black py-[10px]">
        <div className="container flex items-center">
          <p className="text-xl max-lg:text-xs text-[#7e7e7e]">
            جميع الحقوق محفوظة لجمعية البر بجدة{" "}
            <span className="text-mainColor">©</span> 2012 - {year}
          </p>
          <a
            href="https://share.net.sa"
            className="mr-auto flex gap-2 items-center"
          >
            <p className="max-md:hidden text-xl max-lg:text-base text-mainColor font-medium">
              تنفيذ:
            </p>
            <img
              src={ShareLogo}
              className="w-[120px] max-lg:w-20"
              alt="share-aldawly"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
