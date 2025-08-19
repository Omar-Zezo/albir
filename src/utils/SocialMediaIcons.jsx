import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SocialMediaIcons = ({ contactInfo }) => {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <div
      className={`h-10 fixed top-[20vh] ${
        showSocial ? "right-0" : "right-[-201px]"
      } hidden lg:flex items-center z-50`}
    >
      <a
        href={contactInfo?.facebook}
        target="_blanck"
        className="px-4 flex justify-center py-2 items-center border-r border-white bg-secondryColor"
      >
        <FontAwesomeIcon
          className="text-lg text-[#4867aa] hover:text-white duration-300"
          icon={faFacebookF}
        />
      </a>
      <a
        href={contactInfo?.twitter}
        target="_blanck"
        className="px-4 flex justify-center py-2 items-center border-r border-white bg-secondryColor"
      >
        <FontAwesomeIcon
          className="text-lg text-[#5da9dd] hover:text-white duration-300"
          icon={faTwitter}
        />
      </a>
      <a
        href={contactInfo?.youtube}
        target="_blanck"
        className="px-4 flex justify-center py-2 items-center border-r border-white bg-secondryColor"
      >
        <FontAwesomeIcon
          className="text-lg text-[#ff0000] hover:text-white duration-300"
          icon={faYoutube}
        />
      </a>
      <a
        href={contactInfo?.instagram}
        target="_blanck"
        className="px-4 flex justify-center py-2 items-center border-r border-white bg-secondryColor"
      >
        <FontAwesomeIcon
          className="text-lg text-[#f3c661] hover:text-white duration-300"
          icon={faInstagram}
        />
      </a>
      <a
        href={contactInfo?.whatsapp_number}
        target="_blanck"
        className="pr-4 pl-5 flex gap-3 justify-center py-2 items-center border-r border-white bg-green-700 relative socialPlus"
      >
        <FontAwesomeIcon className="text-lg text-white" icon={faWhatsapp} />
      </a>
     
        <div
          onClick={() => setShowSocial(!showSocial)}
          className="pr-4 pl-5 flex gap-3 cursor-pointer justify-center py-2 items-center border-r border-white bg-secondryColor rounded-l-full relative socialPlus"
        >
          <FontAwesomeIcon className="text-lg text-white" icon={showSocial ? faMinus : faPlus} />
        </div>
     
    </div>
  );
};

export default SocialMediaIcons;
