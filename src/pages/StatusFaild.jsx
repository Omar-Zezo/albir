import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const StatusFaild = () => {
    const [status, setStatus] = useState(null)
    const paymentStatus = JSON.parse(localStorage.getItem("paymentStatus"))

    useEffect(()=>{
        if(paymentStatus){
            setStatus(paymentStatus)
        }
    },[paymentStatus])


  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-fit flex flex-col items-center gap-5">
        <div className="size-[100px] flex justify-center items-center bg-red-700 rounded-full">
          <FontAwesomeIcon className="text-5xl text-white" icon={faXmark} />
        </div>
        <p className="text-secondryColor text-lg font-semibold">
          {status?.msg}
        </p>
      </div>
    </div>
  );
};

export default StatusFaild;
