import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderBg } from "../../images/imgs";
import { getJobs } from "../../store/slices/Home/jobs";
import JobCard from "../../components/Cards/JobCard";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { customStyles } from "../../constant";
import { applyForJob } from "../../store/slices/Home/applyJob";
import { toast } from "react-toastify";
import PageLoader from "../../utils/PageLoader";
import BtnLoader from "../../utils/BtnLoader";
import ScrollToTop from "../../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const Events = () => {
  const [allJobs, setAllJobs] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showBtnLoader, setShowBtnLoader] = useState(false);
  const allJobsData = useSelector((state) => state.jobs);
  const { data, error } = useSelector((state) => state.applyJob);

  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  useEffect(() => {
    dispatch(getJobs());
  }, []);

  useEffect(() => {
    if (allJobsData?.data?.data?.data) {
      setAllJobs(allJobsData?.data?.data?.data);
    }
  }, [allJobsData]);

  const gender = [
    { value: "male", label: "ذكر" },
    { value: "female", label: "أنثى" },
  ];

  const options = [
    { value: "yes", label: "نعم" },
    { value: "no", label: "لا" },
  ];

  // apply for a job
  const formSubmit = (data) => {
    setShowBtnLoader(true);
    // FormData
    const formData = new FormData();
    formData.append("full_name", data.full_name);
    formData.append("age", data.age);
    formData.append("ident_num", data.ident_num);
    formData.append("gender", data.gender?.value);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("city", data.city);
    formData.append("qualification", data.qualification);
    formData.append("specialization", data.specialization);
    formData.append("do_you_work", data.do_you_work?.value);
    formData.append("years_of_experience", data.years_of_experience);
    formData.append("current_place_of_work", data.current_place_of_work);
    formData.append("about_your_experiences", data.about_your_experiences);
    formData.append("endorsement", "ok");
    formData.append("has_disability", data.has_disability?.value);

    // if image with data
    if (data.cv?.[0]) {
      formData.append("cv", data.cv[0]);
    }

    // dispatch data
    dispatch(applyForJob(formData));
  };

  // handel btn loader
  useEffect(() => {
    if (data) {
      setShowBtnLoader(false);
    }
    if (error) {
      setShowBtnLoader(false);
    }
  }, [data, error]);

  return !allJobs ? (
    <PageLoader />
  ) : (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - طلب توظيف</title>
      </Helmet>
      <div className="max-xl:pt-24">
        <header className="h-[270px] mt-[-35px] relative">
          <div
            className="size-full grayscale bg-fixed absolute top-0 left-0 z-[-1]"
            style={{
              background: `url('${HeaderBg}')`,
              backgroundPosition: "center",
            }}
          ></div>
          <div className="bg-black/70 size-full">
            <div className="container pt-16">
              <div className="flex flex-col gap-4 pr-5">
                <h2 className="text-[50px] max-xl:text-4xl text-white font-bold">
                  طلب توظيف
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <span>-</span>
                  <p className="underline">طلب توظيف</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-20 container">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              {allJobs?.map((job, index) => (
                <div onClick={() => setSelectedIndex(index)}>
                  <JobCard
                    key={job?.id}
                    job={job}
                    index={index}
                    selectedIndex={selectedIndex}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-mainColor text-2xl font-semibold">
                طلب توظيف
              </h4>
              <form onSubmit={handleSubmit(formSubmit)}>
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-secondryColor font-semibold">
                    البيانات الشخصية
                  </p>
                  <div className="flex justify-between gap-5 flex-wrap">
                    <div className="w-[48%] max-xl:w-full flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="pr-5 text-secondryColor text-base font-medium"
                      >
                        الاسم بالكامل
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="اكتب الاسم بالكامل"
                        className="p-5 outline-mainColor bg-[#f1f1f1] rounded-[50px]"
                        {...register("full_name", {
                          required: "هذا الحقل مطلوب",
                          minLength: {
                            value: 8,
                            message: "يجب أن يكون الاسم 8 حروف أو أكثر",
                          },
                        })}
                      />
                      <p className="mt-1 pr-2 text-red-600 text-sm">
                        {errors.full_name?.message}
                      </p>
                    </div>

                    <div className="w-[48%] max-xl:w-full flex flex-col gap-2">
                      <label
                        htmlFor="age"
                        className="pr-5 text-secondryColor text-base font-medium"
                      >
                        العمر
                      </label>
                      <input
                        id="age"
                        type="number"
                        placeholder="العمر"
                        className="p-5 outline-mainColor bg-[#f1f1f1] rounded-[50px]"
                        {...register("age", {
                          required: "هذا الحقل مطلوب",
                        })}
                      />
                      <p className="mt-1 pr-2 text-red-600 text-sm">
                        {errors.age?.message}
                      </p>
                    </div>

                    <div className="w-[48%] max-xl:w-full flex flex-col gap-2">
                      <label
                        htmlFor="notional-id"
                        className="pr-5 text-secondryColor text-base font-medium"
                      >
                        رقم الهوية
                      </label>
                      <input
                        id="notional-id"
                        type="number"
                        placeholder="رقم الهوية"
                        className="p-5 outline-mainColor bg-[#f1f1f1] rounded-[50px]"
                        {...register("ident_num", {
                          required: "هذا الحقل مطلوب",
                        })}
                      />
                      <p className="mt-1 pr-2 text-red-600 text-sm">
                        {errors.ident_num?.message}
                      </p>
                    </div>

                    <div className="w-[48%] max-xl:w-full flex flex-col gap-2">
                      <label className="text-base text-secondryColor font-bold pr-5">
                        الجنس
                      </label>
                      <Controller
                        name="gender"
                        control={control}
                        rules={{ required: "هذا الحقل مطلوب" }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            options={gender}
                            styles={customStyles}
                            placeholder="إختيار الجنس"
                            className="bg-[#f1f1f1] p-2 text-base rounded-[50px] outline-none border"
                            onChange={(selectedOption) =>
                              field.onChange(selectedOption)
                            }
                          />
                        )}
                      />
                      <p className="pr-2 text-red-600 text-sm font-medium">
                        {errors.gender?.message}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-10">
                  <p className="text-lg text-secondryColor font-semibold">
                    معلومات الإتصال
                  </p>
                  <div className="flex justify-between gap-5 flex-wrap">
                    <div className="w-[48%] max-xl:w-full flex flex-col gap-2">
                      <label
                        htmlFor="phone"
                        className="pr-5 text-secondryColor text-base font-medium"
                      >
                        رقم الجوال
                      </label>
                      <input
                        id="phone"
                        type="number"
                        placeholder="رقم الجوال"
                        className="p-5 outline-mainColor bg-[#f1f1f1] rounded-[50px]"
                        {...register("phone", {
                          required: "هذا الحقل مطلوب",
                          pattern: {
                            value: /^(05\d{8}|5\d{8})$/,
                            message: "نقبل الأرقام السعودية فقط",
                          },
                        })}
                      />
                      <p className="mt-1 pr-2 text-red-600 text-sm">
                        {errors.phone?.message}
                      </p>
                    </div>

                    <div className="w-[48%] max-xl:w-full flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="pr-5 text-secondryColor text-base font-medium"
                      >
                        البريد الإلكتروني
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="البريد الإلكتروني"
                        className="p-5 outline-mainColor bg-[#f1f1f1] rounded-[50px]"
                        {...register("email", {
                          required: "هذا الحقل مطلوب",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "البريد الإلكتروني غير صالح",
                          },
                        })}
                      />
                      <p className="mt-1 pr-2 text-red-600 text-sm">
                        {errors.email?.message}
                      </p>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                      <label
                        htmlFor="city"
                        className="pr-5 text-secondryColor text-base font-medium"
                      >
                        المدينة
                      </label>
                      <input
                        id="city"
                        type="text"
                        placeholder="المدينة"
                        className="p-5 outline-mainColor bg-[#f1f1f1] rounded-[50px]"
                        {...register("city", {
                          required: "هذا الحقل مطلوب",
                        })}
                      />
                      <p className="mt-1 pr-2 text-red-600 text-sm">
                        {errors.city?.message}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-10">
                  <p className="text-lg text-secondryColor font-semibold">
                    الخبرات العملية
                  </p>
                  <div className="flex justify-between gap-5 flex-wrap">
                    <div className="w-[48%] max-xl:w-full flex flex-col gap-2">
                      <label
                        htmlFor="qualification"
                        className="pr-5 text-secondryColor text-base font-medium"
                      >
                        المؤهل العلمي
                      </label>
                      <input
                        id="qualification"
                        type="text"
                        placeholder="المؤهل العلمي"
                        className="p-5 outline-mainColor bg-[#f1f1f1] rounded-[50px]"
                        {...register("qualification", {
                          required: "هذا الحقل مطلوب",
                          minLength: {
                            value: 2,
                            message: "يجب أن يكون طول النص حرفين أو أكثر",
                          },
                        })}
                      />
                      <p className="mt-1 pr-2 text-red-600 text-sm">
                        {errors.qualification?.message}
                      </p>
                    </div>

                    <div className="w-[48%] max-xl:w-full flex flex-col gap-2">
                      <label
                        htmlFor="specialization"
                        className="pr-5 text-secondryColor text-base font-medium"
                      >
                        التخصص
                      </label>
                      <input
                        id="specialization"
                        type="text"
                        placeholder="التخصص"
                        className="p-5 outline-mainColor bg-[#f1f1f1] rounded-[50px]"
                        {...register("specialization", {
                          required: "هذا الحقل مطلوب",
                          minLength: {
                            value: 2,
                            message: "يجب أن يكون طول النص حرفين أو أكثر",
                          },
                        })}
                      />
                      <p className="mt-1 pr-2 text-red-600 text-sm">
                        {errors.specialization?.message}
                      </p>
                    </div>

                    <div className="w-[48%] max-xl:w-full flex flex-col gap-2">
                      <label className="text-base text-secondryColor font-bold pr-5">
                        هل أنت على رأس عملك؟
                      </label>
                      <Controller
                        name="do_you_work"
                        control={control}
                        rules={{ required: "هذا الحقل مطلوب" }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            options={options}
                            styles={customStyles}
                            placeholder="هل أنت على رأس عملك"
                            className="bg-[#f1f1f1] p-2 text-base rounded-[50px] outline-none border"
                            onChange={(selectedOption) =>
                              field.onChange(selectedOption)
                            }
                          />
                        )}
                      />
                      <p className="pr-2 text-red-600 text-sm font-medium">
                        {errors.do_you_work?.message}
                      </p>
                    </div>

                    <div className="w-[48%] max-xl:w-full flex flex-col gap-2">
                      <label
                        htmlFor="years_of_experience"
                        className="pr-5 text-secondryColor text-base font-medium"
                      >
                        سنوات الخبرة
                      </label>
                      <input
                        id="years_of_experience"
                        type="number"
                        placeholder="سنوات الخبرة"
                        className="p-5 outline-mainColor bg-[#f1f1f1] rounded-[50px]"
                        {...register("years_of_experience", {
                          required: "هذا الحقل مطلوب",
                        })}
                      />
                      <p className="mt-1 pr-2 text-red-600 text-sm">
                        {errors.years_of_experience?.message}
                      </p>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                      <label
                        htmlFor="current_place_of_work"
                        className="pr-5 text-secondryColor text-base font-medium"
                      >
                        مكان العمل الحالي
                      </label>
                      <input
                        id="current_place_of_work"
                        type="text"
                        placeholder="مكان العمل الحالي"
                        className="p-5 outline-mainColor bg-[#f1f1f1] rounded-[50px]"
                        {...register("current_place_of_work", {
                          required: "هذا الحقل مطلوب",
                        })}
                      />
                      <p className="mt-1 pr-2 text-red-600 text-sm">
                        {errors["current_place_of_work"]?.message}
                      </p>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                      <label
                        htmlFor="about_your_experiences"
                        className="pr-5 text-secondryColor text-base font-medium"
                      >
                        نبذة عن خبراتك ومهاراتك
                      </label>
                      <textarea
                        id="about_your_experiences"
                        placeholder="نبذة عن خبراتك ومهاراتك"
                        className="p-5 outline-mainColor h-[200px] bg-[#f1f1f1] rounded-lg resize-none"
                        {...register("about_your_experiences", {
                          required: "هذا الحقل مطلوب",
                          minLength: {
                            value: 3,
                            message: "يجب ان يكون طول النص 3 حروف أو أكثر",
                          },
                        })}
                      ></textarea>
                      <p className="mt-1 pr-2 text-red-600 text-sm">
                        {errors["about_your_experiences"]?.message}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-10">
                  <p className="text-lg text-secondryColor font-semibold">
                    الحالة الصحية
                  </p>
                  <div className="flex justify-between gap-5 flex-wrap">
                    <div className="w-full flex flex-col gap-2">
                      <label className="text-base text-secondryColor font-bold pr-5">
                        هل أنت من ذوي الإعاقة؟
                      </label>
                      <Controller
                        name="has_disability"
                        control={control}
                        rules={{ required: "هذا الحقل مطلوب" }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            options={options}
                            styles={customStyles}
                            placeholder="هل أنت على رأس عملك"
                            className="bg-[#f1f1f1] p-2 text-base rounded-[50px] outline-none border"
                            onChange={(selectedOption) =>
                              field.onChange(selectedOption)
                            }
                          />
                        )}
                      />
                      <p className="pr-2 text-red-600 text-sm font-medium">
                        {errors["has_disability"]?.message}
                      </p>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                      <label
                        htmlFor="cv"
                        className="pr-5 text-secondryColor text-base font-medium"
                      >
                        إرفاق السيرة الذاتية
                      </label>
                      <input
                        id="cv"
                        type="file"
                        className="p-5 outline-mainColor bg-[#f1f1f1] rounded-[50px]"
                        {...register("cv", {
                          required: "هذا الحقل مطلوب",
                          validate: (value) => {
                            if (value && value[0]?.type !== "application/pdf") {
                              return "يجب ان يكون الملف بصيغة PDF";
                            }
                          },
                        })}
                      />
                      <p className="mt-1 pr-2 text-red-600 text-sm">
                        {errors.cv?.message}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="w-full mx-auto flex gap-2 pr-5 items-center">
                        <input
                          id="endorsement"
                          type="checkbox"
                          className="p-5 size-4 accent-mainColor outline-mainColor bg-[#f1f1f1] rounded-[50px]"
                          {...register("endorsement", {
                            required:
                              "من فضلك أكد بأن جميع المعلومات التي قدمها صحيحة",
                          })}
                        />
                        <label
                          htmlFor="endorsement"
                          className="text-secondryColor text-base font-medium"
                        >
                          أقر بان جميع البيانات والمعلومات المدونة بهذا الطلب
                          صحيحة مع الالتزام بمسؤوليتي الكاملة عن صحتها كما أوافق
                          على استخدام هذه البيانات لإجراءات التسجيل دون أدنى
                          مسؤولية قانونية
                        </label>
                      </div>
                      <p className="mt-1 pr-2 text-red-600 text-sm">
                        {errors.endorsement?.message}
                      </p>
                    </div>

                    <button
                      type="submit"
                      value={"إرسال"}
                      className="py-4 w-[15%] h-[60px] relative max-xl:w-full rounded-l-full bg-mainColor hover:bg-secondryColor duration-300 cursor-pointer text-white text-lg font-bold"
                    >
                      {showBtnLoader ? <BtnLoader /> : "إرسال"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default Events;
