import { Helmet } from "react-helmet";
import { ChartImg } from "../../images/imgs";
import ScrollToTop from "../../utils/ScrollToTop";

const OrganizationalChart = () => {
  return (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - الهيكل التنظيمي</title>
      </Helmet>
      <div className="container flex flex-col pt-20">
        <div className="min-w-[300px] admin relative flex justify-center items-center gap-4 mx-auto py-5 px-3 rounded-xl golden">
          <div className="size-[60px] rounded-full border-4 border-white">
            <img
              src={ChartImg}
              alt=""
              className="size-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1 items-center">
            <h3 className="text-base font-bold text-white">
              رئيس مجلس الإدارة
            </h3>
            <p className="text-sm font-bold text-white">معالي الدكتور</p>
            <p className="text-base font-semibold text-white">سهيل حسن قاضي</p>
          </div>
        </div>

        <ul className="w-fit mt-[30px] admin relative flex max-xl:flex-col justify-center items-center gap-2 xl:gap-4 mx-auto py-2 px-3 rounded-xl border-[5px] border-yellow-500">
          <li className="w-fit max-xl:w-full p-5 bg-gray-400 rounded-lg text-white text-center font-semibold">
            لجنة الإستثمار
          </li>
          <li className="w-fit max-xl:w-full p-5 bg-gray-400 rounded-lg text-white text-center font-semibold">
            اللجنة الإشرافية على دور الضيافة
          </li>
          <li className="w-fit max-xl:w-full p-5 bg-gray-400 rounded-lg text-white text-center font-semibold">
            لجنة التدقيق والمراجعة الداخلية
          </li>
          <li className="w-fit max-xl:w-full p-5 bg-gray-400 rounded-lg text-white text-center font-semibold">
            اللـــجنة الــتــنــفــيــذيــة
          </li>
          <li className="w-fit max-xl:w-full p-5 bg-gray-400 rounded-lg text-white text-center font-semibold">
            الـــمـــشــــرف الــــمــــالـــــي
          </li>
        </ul>

        <div className="min-w-[300px] admin relative mt-[24px] flex justify-center items-center gap-4 mx-auto py-5 px-3 rounded-xl golden">
          <div className="size-[60px] rounded-full border-4 border-white">
            <img
              src={ChartImg}
              alt=""
              className="size-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1 items-center">
            <h3 className="text-base font-bold text-white">
              رئيس مجلس الإدارة
            </h3>
            <p className="text-sm font-bold text-white">معالي الدكتور</p>
            <p className="text-base font-semibold text-white">سهيل حسن قاضي</p>
          </div>
        </div>

        <ul className="w-fit mt-[30px] admin relative flex max-xl:flex-col justify-center items-center gap-2 xl:gap-4 mx-auto py-2 px-3 rounded-xl border-[5px] border-yellow-500">
          <li className="w-fit max-xl:w-full p-5 bg-gray-400 rounded-lg text-white text-center font-semibold">
            لجنة الإستثمار
          </li>
          <li className="w-fit max-xl:w-full p-5 bg-gray-400 rounded-lg text-white text-center font-semibold">
            اللجنة الإشرافية على دور الضيافة
          </li>
        </ul>

        <ul className="w-fit mt-[24px] flex max-xl:flex-col flex-wrap justify-center items-center gap-4 mx-auto py-2 px-3 rounded-xl border-[5px] border-yellow-500">
          <li>
            <div className="min-w-[300px] flex justify-center items-center gap-4 mx-auto py-5 px-3 rounded-xl golden">
              <div className="size-[60px] rounded-full border-4 border-white">
                <img
                  src={ChartImg}
                  alt=""
                  className="size-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1 items-center">
                <h3 className="text-base font-bold text-white">
                  رئيس مجلس الإدارة
                </h3>
                <p className="text-sm font-bold text-white">معالي الدكتور</p>
                <p className="text-base font-semibold text-white">
                  سهيل حسن قاضي
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="min-w-[300px] flex justify-center items-center gap-4 mx-auto py-5 px-3 rounded-xl golden">
              <div className="size-[60px] rounded-full border-4 border-white">
                <img
                  src={ChartImg}
                  alt=""
                  className="size-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1 items-center">
                <h3 className="text-base font-bold text-white">
                  رئيس مجلس الإدارة
                </h3>
                <p className="text-sm font-bold text-white">معالي الدكتور</p>
                <p className="text-base font-semibold text-white">
                  سهيل حسن قاضي
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="min-w-[300px] flex justify-center items-center gap-4 mx-auto py-5 px-3 rounded-xl golden">
              <div className="size-[60px] rounded-full border-4 border-white">
                <img
                  src={ChartImg}
                  alt=""
                  className="size-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1 items-center">
                <h3 className="text-base font-bold text-white">
                  رئيس مجلس الإدارة
                </h3>
                <p className="text-sm font-bold text-white">معالي الدكتور</p>
                <p className="text-base font-semibold text-white">
                  سهيل حسن قاضي
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="min-w-[300px] flex justify-center items-center gap-4 mx-auto py-5 px-3 rounded-xl golden">
              <div className="size-[60px] rounded-full border-4 border-white">
                <img
                  src={ChartImg}
                  alt=""
                  className="size-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1 items-center">
                <h3 className="text-base font-bold text-white">
                  رئيس مجلس الإدارة
                </h3>
                <p className="text-sm font-bold text-white">معالي الدكتور</p>
                <p className="text-base font-semibold text-white">
                  سهيل حسن قاضي
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="min-w-[300px] flex justify-center items-center gap-4 mx-auto py-5 px-3 rounded-xl golden">
              <div className="size-[60px] rounded-full border-4 border-white">
                <img
                  src={ChartImg}
                  alt=""
                  className="size-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1 items-center">
                <h3 className="text-base font-bold text-white">
                  رئيس مجلس الإدارة
                </h3>
                <p className="text-sm font-bold text-white">معالي الدكتور</p>
                <p className="text-base font-semibold text-white">
                  سهيل حسن قاضي
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="min-w-[300px] flex justify-center items-center gap-4 mx-auto py-5 px-3 rounded-xl golden">
              <div className="size-[60px] rounded-full border-4 border-white">
                <img
                  src={ChartImg}
                  alt=""
                  className="size-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1 items-center">
                <h3 className="text-base font-bold text-white">
                  رئيس مجلس الإدارة
                </h3>
                <p className="text-sm font-bold text-white">معالي الدكتور</p>
                <p className="text-base font-semibold text-white">
                  سهيل حسن قاضي
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="min-w-[300px] flex justify-center items-center gap-4 mx-auto py-5 px-3 rounded-xl golden">
              <div className="size-[60px] rounded-full border-4 border-white">
                <img
                  src={ChartImg}
                  alt=""
                  className="size-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1 items-center">
                <h3 className="text-base font-bold text-white">
                  رئيس مجلس الإدارة
                </h3>
                <p className="text-sm font-bold text-white">معالي الدكتور</p>
                <p className="text-base font-semibold text-white">
                  سهيل حسن قاضي
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="min-w-[300px] flex justify-center items-center gap-4 mx-auto py-5 px-3 rounded-xl golden">
              <div className="size-[60px] rounded-full border-4 border-white">
                <img
                  src={ChartImg}
                  alt=""
                  className="size-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col gap-1 items-center">
                <h3 className="text-base font-bold text-white">
                  رئيس مجلس الإدارة
                </h3>
                <p className="text-sm font-bold text-white">معالي الدكتور</p>
                <p className="text-base font-semibold text-white">
                  سهيل حسن قاضي
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </ScrollToTop>
  );
};

export default OrganizationalChart;
