import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getCompleteCode } from "../store/slices/cart/completeOrder";

const PaymentStatus = () => {
  const [statusMsg, setStatusMsg] = useState(null);
  const { data, error } = useSelector((state) => state.completeOrder);
  const { order_id } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const resourcePath = searchParams.get("resourcePath");

  useEffect(() => {
    if (order_id) {
      dispatch(
        getCompleteCode({
          data: {
            id,
            resourcePath,
            payment_brand: localStorage.getItem("payment_brand"),
          },
          order_id,
        })
      );
    }
  }, [order_id]);

  useEffect(() => {
    if (data) {
      setStatusMsg(data.data);
    }
    if (error) {
      if (error.data) {
        localStorage.setItem("paymentStatus", JSON.stringify(error.data))
        navigate('/status-faild')
      }
    }
  }, [data, error]);

  return (
    <div className="h-screen flex items-center justify-center">
      {statusMsg?.status === 400 ? (
        <div className="h-fit flex flex-col items-center gap-5">
          <div className="size-[100px] flex justify-center items-center bg-red-700 rounded-full">
            <FontAwesomeIcon className="text-5xl text-white" icon={faXmark} />
          </div>
          <p className="text-secondryColor text-lg font-semibold">
            {statusMsg?.msg}
          </p>
        </div>
      ) : statusMsg?.statusMsg === 200 ? (
        <div className="h-fit flex flex-col items-center gap-5">
          <FontAwesomeIcon
            className="text-[100px] text-green-700"
            icon={faCircleCheck}
          />
          <p className="text-secondryColor text-lg font-semibold">
            {statusMsg?.msg}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default PaymentStatus;
