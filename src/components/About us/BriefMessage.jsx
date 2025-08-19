import React from "react";
import { CatBgShape } from "../../images/imgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite, faHandHoldingDollar, faHeart } from "@fortawesome/free-solid-svg-icons";

const BriefMessage = () => {
  return (
    <section className="bg-[#f1f1f1] mt-[50px] pt-[120px] pb-20">
      <div className="container flex max-xl:flex-col justify-between">
        <div className="w-1/2 max-xl:w-full flex flex-col gap-5 pb-[50px]">
          <div className="flex flex-col gap-5">
            <h3 className="text-secondryColor text-[36px] font-bold">
              الرسالة:
            </h3>
            <p className="text-lg text-[#7e7e7e] font-medium">
              أن نقدم مبادرات تنموية مبتكرة ومستدامة تساهم في صناعة الأثر للمرضى
              والأيتام والمحتاجين والمجتمع وفق أفضل الممارسات المؤسسية.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-secondryColor text-[36px] font-bold">
              الرؤية:
            </h3>
            <p className="text-lg text-[#7e7e7e] font-medium">
              الريادة في صناعة الأثر الاجتماعي المستدام.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-secondryColor text-[36px] font-bold">قيمنا:</h3>
            <p className="text-lg text-[#7e7e7e] font-medium">
              المصداقية - العدالة - الإبداع - الأمانة - الشفافية - التكامل.
            </p>
          </div>

          <div className="flex gap-10 mt-10">
            <div className="size-[100px] rounded-full flex justify-center items-center bg-white text-mainColor hover:bg-mainColor hover:text-white duration-300">
                <FontAwesomeIcon className="text-[60px]" icon={faHeart} />
            </div>
            <div className="size-[100px] rounded-full flex justify-center items-center bg-white text-[#4ecd99] hover:bg-[#4ecd99] hover:text-white duration-300">
            <FontAwesomeIcon className="text-[60px]" icon={faCookieBite} />
            </div>
            <div className="size-[100px] rounded-full flex justify-center items-center bg-white text-[#5366c2] hover:bg-[#5366c2] hover:text-white duration-300">
            <FontAwesomeIcon className="text-[50px]" icon={faHandHoldingDollar} />
            </div>
          </div>
        </div>

        <div className="w-1/2 max-xl:w-full bg-mainColor rounded-xl pb-10 shadow-sm">
          <h3 className="text-secondryColor text-2xl text-center py-[30px] bg-white font-bold rounded-t-xl">
            الأهداف
          </h3>
          <div
            className="flex flex-col gap-5"
            style={{ background: `url('${CatBgShape}')` }}
          >
            <ul className="flex flex-col gap-5 pr-10 pt-5 list-disc">
              <li className="text-white text-xl">
                تعظيم الأثر المجتمعي لخدمات الجمعية بما يعزز جودة الحياة
                والتنمية المستدامة .
              </li>
              <li className="text-white text-xl">
                تعظيم الأثر المجتمعي لخدمات الجمعية بما يعزز جودة الحياة
                والتنمية المستدامة .
              </li>
              <li className="text-white text-xl">
                تعظيم الأثر المجتمعي لخدمات الجمعية بما يعزز جودة الحياة
                والتنمية المستدامة .
              </li>
              <li className="text-white text-xl">
                تعظيم الأثر المجتمعي لخدمات الجمعية بما يعزز جودة الحياة
                والتنمية المستدامة .
              </li>
              <li className="text-white text-xl">
                تعظيم الأثر المجتمعي لخدمات الجمعية بما يعزز جودة الحياة
                والتنمية المستدامة .
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefMessage;
