import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { customStyles } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { donorRegister } from "../../store/slices/friendsOfAlbir/donorJoin";
import BtnLoader from "../../utils/BtnLoader";

const DonorForm = () => {
  const [showBtnLoader, setShowBtnLoader] = useState(false);
  const donorJoinData = useSelector(state=> state.donorJoin)

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const dispatch = useDispatch()


  const formSubmit = (data) => {
    setShowBtnLoader(true)
    dispatch(donorRegister({
        name: data.name,
        phone: data.phone,
        email: data.email,
        gender: data.gender?.value
    }));
  };


  const gender = [
    { value: "male", label: "ذكر" },
    { value: "female", label: "أنثى" },
  ];


  //handel btn loader
  useEffect(() => {
    if (donorJoinData.data) {
      setShowBtnLoader(false);
    }
    if (donorJoinData.error) {
      setShowBtnLoader(false);
    }
  }, [donorJoinData]);

  return (
    <form
          className="xl:w-[90%] mx-auto"
          onSubmit={handleSubmit(formSubmit)}
        >
          <div className="flex gap-5 flex-wrap">
            <div className="max-md:w-full w-[48%] grow flex flex-col gap-4">
              <label htmlFor="name" className="text-base text-secondryColor font-bold pr-2">
                الاسم بالكامل
              </label>
              <input
                id="name"
                type="text"
                className="bg-field p-4 text-base rounded-xl outline-none border"
                placeholder="الاسم بالكامل"
                {...register("name", {
                  required: "هذا الحقل مطلوب",
                })}
              />
              <p className="mt-1 pr-2 text-red-600 text-sm">
                {errors.name?.message}
              </p>
            </div>


            <div className="max-md:w-full w-[48%] grow flex flex-col gap-4">
              <label htmlFor="phone" className="text-base text-secondryColor font-bold pr-2">
                رقم الهاتف
              </label>
              <input
                id="phone"
                type="number"
                className="bg-field p-4 text-base rounded-xl outline-none border"
                placeholder="رقم الهاتف"
                {...register("phone", {
                  required: "هذا الحقل مطلوب",
                  pattern: {
                    value: /^(05\d{8})$/,
                    message: "نقبل الأرقام السعودية فقط",
                  },
                })}
              />
              <p className="mt-1 pr-2 text-red-600 text-sm">
                {errors.phone?.message}
              </p>
            </div>

            <div className="max-md:w-full w-[48%] grow flex flex-col gap-4">
              <label htmlFor="email" className="text-base text-secondryColor font-bold pr-2">
                البريد الإلكتروني
              </label>
              <input
                id="email"
                type="email"
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
              <label htmlFor="gender" className="text-base text-secondryColor font-bold pr-2">
                الجنس
              </label>
              <Controller
                id="gender"
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
  );
};

export default DonorForm;
