import { Link, useNavigate } from "react-router-dom";
import { HeaderBg } from "../images/imgs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getOtpCode } from "../store/slices/auth/otpCode";
import { toast } from "react-toastify";
import BtnLoader from "../utils/BtnLoader";

const OtpCode = () => {
  const [showBtnLoader, setShowBtnLoader] = useState(false);
  const { data, error } = useSelector((state) => state.otpCode);

  const navigate = useNavigate()
    const errorMsg = (msg) => toast.error(msg);
  

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  useEffect(() => {
    if (data) {
      setShowBtnLoader(false)
      if (data.data) {
        if (data.data.data) {
          if (data.data.data.token) {
            localStorage.setItem("token", data.data.data.token);
            navigate(-1)
            successMsg('تم تسجيل الدخول بنجاح')
          }
        }
      }
    }

    if (error) {
      setShowBtnLoader(false)
      if (error.data) {
        if (error.data.msg) {
          errorMsg(error.data.msg);
        }
      }
    }
  }, [data, error]);

  const dispatch = useDispatch();

  const formSubmit = (data) => {
    setShowBtnLoader(true)
    dispatch(
      getOtpCode({
        phone: localStorage.getItem("phone"),
        ...data,
      })
    );
  };

  return (
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
                كود التحقق
              </h2>
              <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                <Link to="/">الرئيسية</Link>
                <span>-</span>
                <p className="underline">كود التحقق</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-20 container">
        <div className="flex flex-col gap-4">
          <form
            className="flex max-lg:flex-col gap-3 w-full px-4"
            onSubmit={handleSubmit(formSubmit)}
          >
            <div className="xl:w-1/2 w-full flex flex-col gap-2">
              <input
                autoFocus
                type="number"
                className=" px-3 h-14 rounded-md outline-mainColor border border-mainColor"
                placeholder="ادخل كود التحقق المرسل إلى جوالك"
                {...register("otp_code", {
                  required: "هذا الحقل مطلوب",
                  minLength: {
                    value: 4,
                    message: "كود التحقق يجب ان يكون 4 أرقام",
                  },
                })}
              />
              <p className="mt-1 pr-2 text-red-600 text-sm">
                {errors.otp_code?.message}
              </p>
            </div>
            <button
              type="submit"
              className="xl:w-[15%] w-full h-14 relative px-3 rounded-md outline-none border-none bg-mainColor hover:bg-secondryColor duration-300 cursor-pointer text-white"
            >
              {showBtnLoader ? <BtnLoader /> : "تأكيد رمز التحقق"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpCode;
