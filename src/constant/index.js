import { faFacebookF, faTwitter, faYoutube, faInstagram, faSnapchat, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const navSocialIcons = [
    {name: "twitter", icon: faTwitter, link: "/"},
    {name: "fcaebook", icon: faFacebookF, link: "/"},
    {name: "youtube", icon: faYoutube, link: "/"},
    {name: "instagram", icon: faInstagram, link: "/"},
    {name: "snapchat", icon: faSnapchat, link: "/"},
    {name: "whatsapp", icon: faWhatsapp, link: "/"},
]

const aboutLinks = [
    {name: "البر في السطور", link: "/about-the-association/brief"},
    {name: "أعضاء مجلس الإدارة", link: "/about-the-association/board-of-directors"},
    {name: "خدمات البر", link: "/about-the-association/services-albir"},
    {name: "الهيكل التنظيمي", link: "/about-the-association/organizational-chart"},
    {name: "إحصائيات الجمعية", link: "/about-the-association/statistics"},
    {name: "المشاريع الموسمية", link: "/about-the-association/seasonal-projects"},
    {name: "الأحداث والفاعليات", link: "/about-the-association/events"},
    {name: "مواد الحوكمة", link: "/about-the-association/governance-material"},
    {name: "قالوا عنا", link: "/about-the-association/said-about-us"},
    {name: "التطوع", link: "/d"},
    {name: "فروعنا", link: "/about-the-association/our-branches"},
]


const mediaCenter = [
    {name: "الأخبار", link: "/news-sections"},
    {name: "الصور", link: "/photos-sections"},
    {name: "الفيديوهات", link: "/videos-sections"},
]


const aboutLinksFooter = [
    {name: "عن الجمعية", link: "/about-the-association/brief"},
    {name: "خدمات البر", link: "/about-the-association/services-albir"},
    {name: "الهيكل التنظيمي", link: "/about-the-association/organizational-chart"},
    {name: "إحصائيات الجمعية", link: "/about-the-association/statistics"},
    {name: "المشاريع الموسمية", link: "/about-the-association/seasonal-projects"},
    {name: "الأحداث والفاعليات", link: "/about-the-association/events"},
    {name: "مواد الحوكمة", link: "/about-the-association/governance-material"},
]

const membershipsFooter = [
    {name: "أعضاء الجمعية العمومية", link: "/albir-friends"},
    {name: "عضوية المُتبرعين", link: "/albir-friends/registration-form"},
    {name: "عضوية المُستحقين", link: "/about-the-association/services-albir"},
]


const customStyles = {
  control: (base, state) => ({
    ...base,
    border: "none", // remove borders
    backgroundColor: "transparent", // remove background
    boxShadow: "none", // remove shadow o focus
  }),
  menu: (base) => ({
    ...base,
    border: "1px solid #CCC",
    backgroundColor: "#F7F7F7",
    boxShadow: "none",
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    backgroundColor: "transparent",
    color: "black",
    "&:hover": {
      backgroundColor: "#f80",
      color: "#FFF"
    },
  }),
};
  
  
  const options = [
      { value: "option1", label: "الخيار الأول" },
      { value: "option2", label: "الخيار الثاني" },
      { value: "option3", label: "الخيار الثالث" },
  ];


export {navSocialIcons, aboutLinks, mediaCenter, aboutLinksFooter, membershipsFooter, options, customStyles}