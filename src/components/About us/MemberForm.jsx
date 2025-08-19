import { Link, useSearchParams } from "react-router-dom";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { customStyles } from "../../constant";
import { HeaderBg } from "../../images/imgs";
import { memberJoin } from "../../store/slices/friendsOfAlbir/join";
import { useDispatch, useSelector } from "react-redux";
import BtnLoader from "../../utils/BtnLoader";
import { useEffect, useState } from "react";
import ScrollToTop from "../../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const MemberForm = () => {
  const [showBtnLoader, setShowBtnLoader] = useState(false);
  const memberJoinData = useSelector((state) => state.join);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const formSubmit = (data) => {
    setShowBtnLoader(true);
    // FormData
    const formData = new FormData();
    formData.append("package_id", type);
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("gender", data.gender?.value);
    formData.append("phone", data.phone);
    formData.append("payment_ways", data.payment_ways?.value);
    formData.append("ident_num", data.ident_num);

    // if image with data
    if (data.attachments?.[0]) {
      formData.append("attachments", data.attachments[0]);
    }

    // dispatch data
    dispatch(memberJoin(formData));
  };

  const gender = [
    { value: "male", label: "ذكر" },
    { value: "female", label: "أنثى" },
  ];

  const payment_method = [
    { value: "bank_transfer ", label: "تحويل بنكي" },
    { value: "credit_card", label: "بطاقة إئتمانية" },
  ];

  //handel btn loader
  useEffect(() => {
    if (memberJoinData.data) {
      setShowBtnLoader(false);
    }
    if (memberJoinData.error) {
      setShowBtnLoader(false);
    }
  }, [memberJoinData]);

  return (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - انضم إلينا</title>
      </Helmet>
      <div className="max-xl:pt-24 pb-10">
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
                  أنضم إلينا
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <Link to="/albir-friends">أصدقاء البر</Link>
                  <span>-</span>
                  <p className="underline">أنضم إلينا</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mt-20">
          <form
            className="xl:w-[90%] mx-auto"
            onSubmit={handleSubmit(formSubmit)}
          >
            <div className="flex gap-5 flex-wrap">
              <div className="max-md:w-full w-[48%] grow flex flex-col gap-4">
                <label className="text-base text-secondryColor font-bold pr-2">
                  الاسم الأول
                </label>
                <input
                  type="text"
                  className="bg-field p-4 text-base rounded-xl outline-none border"
                  placeholder="الاسم الأول"
                  {...register("first_name", {
                    required: "هذا الحقل مطلوب",
                  })}
                />
                <p className="mt-1 pr-2 text-red-600 text-sm">
                  {errors.first_name?.message}
                </p>
              </div>

              <div className="max-md:w-full w-[48%] grow flex flex-col gap-4">
                <label className="text-base text-secondryColor font-bold pr-2">
                  الاسم الأخير
                </label>
                <input
                  type="text"
                  className="bg-field p-4 text-base rounded-xl outline-none border"
                  placeholder="الاسم الأخير"
                  {...register("last_name", {
                    required: "هذا الحقل مطلوب",
                  })}
                />
                <p className="mt-1 pr-2 text-red-600 text-sm">
                  {errors.last_name?.message}
                </p>
              </div>

              <div className="max-md:w-full w-[48%] grow flex flex-col gap-4">
                <label className="text-base text-secondryColor font-bold pr-2">
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
                      className="bg-field p-2 text-base rounded-xl outline-none border"
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

              <div className="max-md:w-full w-[48%] grow flex flex-col gap-4">
                <label className="text-base text-secondryColor font-bold pr-2">
                  رقم الهاتف
                </label>
                <input
                  type="text"
                  className="bg-field p-4 text-base rounded-xl outline-none border"
                  placeholder="رقم الهاتف"
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

              <div className="max-md:w-full w-[48%] grow flex flex-col gap-4">
                <label className="text-base text-secondryColor font-bold pr-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="text"
                  className="bg-field p-4 text-base rounded-xl outline-none border"
                  placeholder="البريد الإلكتروني"
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

              <div className="max-md:w-full w-[48%] grow flex flex-col gap-4">
                <label className="text-base text-secondryColor font-bold pr-2">
                  رقم الهوية الوطنية
                </label>
                <input
                  type="text"
                  className="bg-field p-4 text-base rounded-xl outline-none border"
                  placeholder="رقم الهوية الوطنية"
                  {...register("ident_num", {
                    required: "هذا الحقل مطلوب",
                    minLength: {
                      value: 10,
                      message: "رقم الهوية يجب ان يكون 10 أرقام",
                    },
                  })}
                />
                <p className="mt-1 pr-2 text-red-600 text-sm">
                  {errors.ident_num?.message}
                </p>
              </div>

              <div className="w-full flex flex-col gap-4">
                <label className="text-base text-secondryColor font-bold pr-2">
                  طريقة الدفع
                </label>
                <Controller
                  name="payment_ways"
                  control={control}
                  rules={{ required: "هذا الحقل مطلوب" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={payment_method}
                      styles={customStyles}
                      placeholder="إختيار طريقة الدفع"
                      className="bg-field p-2 text-base rounded-xl outline-none border"
                      onChange={(selectedOption) =>
                        field.onChange(selectedOption)
                      }
                    />
                  )}
                />
                <p className="pr-2 text-red-600 text-sm font-medium">
                  {errors.payment_ways?.message}
                </p>
              </div>

              <div className="w-full flex flex-col gap-4">
                <label className="text-base text-secondryColor font-bold pr-2">
                  صورة الهوية الوطنية
                </label>
                <input
                  type="file"
                  className="bg-field p-4 text-base rounded-xl outline-none border"
                  {...register("attachments", {
                    required: "هذا الحقل مطلوب",
                  })}
                />
                <p className="mt-1 pr-2 text-red-600 text-sm">
                  {errors.attachments?.message}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 justify-between mt-10">
              <div className="max-md:w-full w-1/2 mx-auto flex flex-col gap-4">
                <button
                  type="submit"
                  className="relative h-[60px] bg-mainColor hover:bg-secondryColor duration-300 p-4 text-lg text-white text-center cursor-pointer font-semibold rounded-xl"
                >
                  {showBtnLoader ? <BtnLoader /> : "إضافة"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default MemberForm;
