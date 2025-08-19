import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectsSlider from "./ProjectsSlider";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../store/slices/Home/Projects";

const Projects = ({getDonation, setShowDonatePopUp}) => {
  const [allProjects, setAllProjects] = useState(null);
  const { data } = useSelector((state) => state.projects);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
            setAllProjects(data.data.data)
        }
      }
    }
  }, [data]);

  return (
    <section className="mt-10">
      <div className="container">
        <div className="flex max-xl:flex-col xl:items-center justify-between">
          <div className="flex flex-col xl:gap-5 gap-2">
            <p className="text-lg text-[#aaa] font-medium">تبرع الأن</p>
            <h3 className="xl:text-[36px] text-3xl text-secondryColor font-bold">
              تبرع لجمعية البر بجدة
            </h3>
          </div>
          <p className="w-[37%] max-xl:w-full lg:text-lg text-base max-xl:mt-3 text-[#7e7e7e] font-bold">
            قناة آمنة للتبرع لمشاريع البر الخيرية المختلفة، ويستفيد منه أكثر من
            32000 أسرة محتاجة مابين أيتام وأرامل وفقراء ، من خلال الزكوات
            والصدقات والوقف الخيري
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <ul className="flex mt-[60px]">
            <li className="flex gap-2 items-center pl-5 text-xl font-bold text-mainColor cursor-pointer">
              <FontAwesomeIcon className="text-2xl" icon={faBoxesStacked} />
              مشاريع الجمعية
            </li>
            {/* <li className="flex items-center pr-5 border-r-2 border-[#ccc] font-bold gap-2 text-xl text-[#aaa] cursor-pointer">
                    <FontAwesomeIcon className="text-2xl" icon={faUsers} />
                    حالات واردة
                    </li> */}
          </ul>
          <ProjectsSlider getDonation={getDonation} allProjects={allProjects} setShowDonatePopUp={setShowDonatePopUp}/>
        </div>
      </div>
    </section>
  );
};

export default Projects;
