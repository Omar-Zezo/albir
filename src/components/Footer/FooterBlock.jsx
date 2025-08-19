import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FooterBlock = ({ icon, title, links }) => {
  return (
    <div className="w-[45%] h-fit flex flex-col gap-4">
      <h3 className="text-mainColor text-xl flex items-center gap-4">
        <FontAwesomeIcon icon={icon} />
        <strong>{title}</strong>
      </h3>
      <ul className="flex flex-col gap-4">
        {links?.map((link) => (
          <li key={link.title} className="flex items-center gap-3 text-lg text-white">
            <FontAwesomeIcon className="text-[#666] font-bold" icon={faLink} />
            <Link
              to={link.link}
              className="text-base text-white font-semibold hover:text-mainColor duration-500"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterBlock;
