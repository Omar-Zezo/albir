import { faFacebookF, faInstagram, faSnapchat, faTwitter, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpperNav = ({ contactInfo }) => {
  return (
    <div className="bg-secondryColor">
      <div className="container flex py-3">
        <p className="text-[#9e9e9e] text-sm font-medium">
          اهلا بكم في جمعية البر
        </p>
        <ul className="flex gap-5 items-center w-fit mr-auto">
          <li>
            <a href={contactInfo?.twitter} target="_blanck">
              <FontAwesomeIcon
                className="size-4 text-[#9e9e9e] hover:text-white duration-300"
                icon={faTwitter}
              />
            </a>
          </li>

          <li>
            <a href={contactInfo?.facebook} target="_blanck">
              <FontAwesomeIcon
                className="size-4 text-[#9e9e9e] hover:text-white duration-300"
                icon={faFacebookF}
              />
            </a>
          </li>

          <li>
            <a href={contactInfo?.youtube} target="_blanck">
              <FontAwesomeIcon
                className="size-4 text-[#9e9e9e] hover:text-white duration-300"
                icon={faYoutube}
              />
            </a>
          </li>

          <li>
            <a href={contactInfo?.instagram} target="_blanck">
              <FontAwesomeIcon
                className="size-4 text-[#9e9e9e] hover:text-white duration-300"
                icon={faInstagram}
              />
            </a>
          </li>

          <li>
            <a href={contactInfo?.snapchat} target="_blanck">
              <FontAwesomeIcon
                className="size-4 text-[#9e9e9e] hover:text-white duration-300"
                icon={faSnapchat}
              />
            </a>
          </li>

          <li>
            <a href={contactInfo?.whatsapp_number} target="_blanck">
              <FontAwesomeIcon
                className="size-4 text-[#9e9e9e] hover:text-white duration-300"
                icon={faWhatsapp}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UpperNav;
