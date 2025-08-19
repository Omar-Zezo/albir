import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/slices/auth/login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ showLogin, setShowLogin }) => {
  const { data } = useSelector((state) => state.login);

  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const dispatch = useDispatch();

  const formSubmit = (data) => {
    dispatch(loginUser(data));
    setShowLogin(false);
  };

  useEffect(() => {
    if (data) {
      if (data.status === 200) {
        navigate("/otp-code")
      }
      if (data.data) {
        if (data.data) {
          if (data.data.data) {
            localStorage.setItem("phone", data.data.data)
          }
        }
      }
    }
  }, [data]);

  return (
    <div
      onClick={() => setShowLogin(false)}
      className={`fixed top-0 left-0 z-50 ${
        showLogin ? "flex" : "hidden"
      } justify-center items-center size-full bg-black/70`}
    >
      <div
        className="bg-white w-[500px] pb-10 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-5 rounded-t-xl bg-gray-200">
          <p className="text-xl text-secondryColor font-bold">دخول / تسجيل</p>
          <FontAwesomeIcon
            className="text-xl text-zinc-500 cursor-pointer"
            icon={faX}
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="flex flex-col items-center gap-2 mt-5">
          <p className="text-xl text-secondryColor">رقم الجوال</p>
          <form
            className="flex flex-col gap-3 w-full px-4"
            onSubmit={handleSubmit(formSubmit)}
          >
            <input
              type="number"
              className="w-full p-3 rounded-md outline-mainColor border border-mainColor"
              placeholder="أدخل رقم الجوال"
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
            <input
              type="submit"
              className="w-full p-3 rounded-md outline-none border-none bg-mainColor hover:bg-secondryColor duration-300 cursor-pointer text-white"
              value="تأكيد الجوال"
            />
            <p className="w-[90%] text-sm text-slate-700 font-medium">
              سيتم ارسال رسالة تأكيد الى رقم جوالك المدخل لذلك تأكد انه تم
              ادخاله بطريقة صحيحة وببدأ بـ (05) ومن دون الصيغة الدولية (966)
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
