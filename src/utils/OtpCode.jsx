import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { getOtpCode } from "../store/slices/auth/otpCode";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const OtpCode = ({ showOtp, setShowOtp }) => {
  const { data } = useSelector((state) => state.otpCode);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

    useEffect(() => {
      if (data) {
        if(data.data){
          if(data.data.data){
            if(data.data.data.token){
              localStorage.setItem("token", data.data.data.token)
              setShowOtp(false)
              window.location.reload()
            }
          }
        }
      }
    }, [data]);

    const dispatch  = useDispatch()

  const formSubmit = (data) => {
      dispatch(getOtpCode({
        phone: localStorage.getItem("phone"),
        ...data
      }));
  };


  return (
    <div
      onClick={() => setShowOtp(false)}
      className={`fixed top-0 left-0 z-50 ${
        showOtp ? "flex" : "hidden"
      } justify-center items-center size-full bg-black/70`}
    >
      <div
        className="bg-white w-[500px] pb-10 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-5 rounded-t-xl bg-gray-200">
          <p className="text-xl text-secondryColor font-bold">كود التحقق</p>
          <FontAwesomeIcon
            className="text-xl text-zinc-500 cursor-pointer"
            icon={faX}
            onClick={() => setShowOtp(false)}
          />
        </div>
        <div className="flex flex-col items-center gap-2 mt-5">
          <p className="text-xl text-secondryColor">كود التحقق</p>
          <form
            className="flex flex-col gap-3 w-full px-4"
            onSubmit={handleSubmit(formSubmit)}
          >
            <input
              type="number"
              className="w-full p-3 rounded-md outline-mainColor border border-mainColor"
              placeholder="ادخل كود التحقق المرسل إلى جوالك"
              {...register("otp_code", {
                required: "هذا الحقل مطلوب",
                minLength: {value: 4, message:"كود التحقق يجب ان يكون 4 أرقام"}
              })}
            />
            <p className="mt-1 pr-2 text-red-600 text-sm">
              {errors.otp_code?.message}
            </p>
            <input
              type="submit"
              className="w-full p-3 rounded-md outline-none border-none bg-mainColor hover:bg-secondryColor duration-300 cursor-pointer text-white"
              value="إرسال رمز التحقق"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpCode;
