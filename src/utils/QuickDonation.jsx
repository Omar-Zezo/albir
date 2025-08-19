import { useState } from "react";

const QuickDonation = ({setShowDonatePopUp, service, getDonation}) => {

  const [amount, setAmount] = useState(service?.basic_service_value ? service?.basic_service_value :0)

  const handelSubmit = (e) => {
    e.preventDefault();
    setShowDonatePopUp(true);
    getDonation(service, amount)
  };


  return (
    <div className="flex flex-col max-lg:hidden items-center gap-4 p-5 border bg-white/10 border-white rounded-lg">
      <p className="text-[36px] text-white font-bold">تبرع سريعاً</p>
      <div
        className="flex flex-col items-center"
      >
        <div className="flex items-center">
          <div 
          onClick={()=>{
            if(amount > 1){
              setAmount(amount - 1)
            }
          }}
          className="h-10 flex items-center bg-mainColor hover:bg-secondryColor duration-300 cursor-pointer text-white rounded-md justify-center px-5 text-2xl font-semibold">
            -
          </div>
          <div className="h-10 pl-5 w-fit flex items-center gap-2 bg-white text-2xl font-semibold text-secondryColor">
            <input
              value={amount}
              type="number"
              className="w-20 pr-2 block text-xl text-center border-0 outline-none text-secondryColor"
            />
            <small className="text-sm font-semibold">ر.س</small>
          </div>
          <div 
           onClick={()=>{
            setAmount(amount + 1)
           }}
          className="h-10 flex items-center bg-mainColor hover:bg-secondryColor duration-300 cursor-pointer text-white rounded-md justify-center px-5 text-2xl font-semibold">
            +
          </div>
        </div>
        <button
          onClick={handelSubmit}
          className="py-3 px-5 mt-5 bg-mainColor hover:bg-secondryColor duration-300 cursor-pointer rounded-md text-white text-base font-semibold"
        >أدفع الأن</button>
      </div>
    </div>
  );
};

export default QuickDonation;
