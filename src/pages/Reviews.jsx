import AddRatingStars from "../utils/AddRatingStars";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { makeServiceReview } from "../store/slices/utils/serviceReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { ArrowUP } from "../images/svg";
import Login from "../utils/Login";
import BtnLoader from "../utils/BtnLoader";

const Reviews = () => {
  const [rating, setRating] = useState(null);
  const [ratingMsg, setRatingMsg] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showBtnLoader, setShowBtnLoader] = useState(false);
  const {data, error} = useSelector((state) => state.serviceReview);


  const errorMsg = (msg) => toast.error(msg);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const { id } = useParams();
  const getRating = (value) => {
    setRating(value);
  };

  const handelSubmit = (e) => {
    setShowBtnLoader(true)
    e.preventDefault();
    if (!token) {
      setShowLogin(true);
    } else {
      if (rating) {
        if (ratingMsg) {
          if (ratingMsg.length >= 10) {
            dispatch(
              makeServiceReview({
                id,
                data: {
                  your_rating: rating,
                  your_comment: ratingMsg,
                },
              })
            );
          } else {
            errorMsg("رسالة التقيم يجب ان تكون 10 حروف أو أكثر");
            setShowBtnLoader(false);
          }
        } else {
          errorMsg("من فضلك قم بكتابة التقيم");
          setShowBtnLoader(false);
        }
      } else {
        errorMsg("من فضلك قم بالتقيم أولاً");
        setShowBtnLoader(false);
      }
    }
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

  return (
    <div className="pt-[3%]">
      <div className="flex flex-col items-center h-fit">
        <p className="text-4xl text-[#444] font-medium">
        شكرا لثقتكم بجمعية البر بجدة
        </p>
        <p className="text-gray-600 text-xl font-medium mt-2">
        يرجى تقيم الخدمة
        </p>

        <form
          className="flex flex-col items-center gap-5 mt-10"
          onSubmit={handelSubmit}
        >
          {rating === null ? (
            <span className="text-[80px]">&#128529;</span>
          ) : rating === 1 ? (
            <span className="text-[80px]">&#128542;</span>
          ) : rating === 2 ? (
            <span className="text-[80px]">&#128530;</span>
          ) : rating === 3 ? (
            <span className="text-[80px]">&#128512;</span>
          ) : rating === 4 ? (
            <span className="text-[80px]">&#128525;</span>
          ) : rating === 5 ? (
            <span className="text-[80px]">&#128526;</span>
          ) : null}
          <AddRatingStars getRating={getRating} />
          <textarea
            value={ratingMsg}
            onChange={(e) => setRatingMsg(e.target.value)}
            placeholder={"من فضلك اكتب تقيمك"}
            className={`w-[500px] h-[200px] text-[#444] text-lg p-5 text-right overflow-y-auto resize-none border border-mainColor outline-mainColor rounded-lg`}
          ></textarea>
          <button
            type="submit"
            className="relative w-[20%] h-[60px] text-lg font-semibold text-white bg-mainColor hover:bg-secondryColor duration-300 py-4 px-8 rounded-r-full cursor-pointer"
          >
            {showBtnLoader ? <BtnLoader /> : "إرسال"}
          </button>
        </form>

        <div className="flex items-center gap-5 my-20">
          <Link
            to="/"
            className="flex items-center gap-2 text-mainColor p-3 border border-mainColor rounded-lg"
          >
            <FontAwesomeIcon className="text-2xl" icon={faHouse} />
            <p className="text-xl font-medium">الرئيسية</p>
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white p-3 border bg-mainColor rounded-lg"
          >
            <p className="text-xl font-medium">رجوع</p>
            <img
              width={30}
              src={ArrowUP}
              alt="back"
              className="rotate-[-90deg]"
            />
          </button>
        </div>
      </div>
      <ToastContainer />
      <Login
        showLogin={showLogin}
        setShowLogin={setShowLogin}
      />
    </div>
  );
};

export default Reviews;
