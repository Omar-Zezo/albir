import { faCartPlus, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addItemToCart } from "../../store/slices/cart/addToCart";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { SR } from "../../images/svg";

const ProductsCard = ({service, setShowDonatePopUp, getDonation}) => {
  const [price, setPrice] = useState(service?.basic_service_value ? service?.basic_service_value : 0);
  const dispatch = useDispatch();


  const handleAddToCart = ()=>{
    dispatch(addItemToCart({
      id: service?.id,
      quantity: 1,
      amount: service?.basic_service_value
    }))
  }

  return (
    <div className="flex flex-col gap-4 bg-white border border-[#e1e1e1] p-[15px] rounded-[15px] hover:shadow-2xl duration-300">
      <div className="flex">
        <img style={{height: "70px"}} width={80} height={70} src={service?.image_path} alt={service?.title} />
        <div className="w-fit mr-auto flex items-center gap-1">
          <p className="text-[30px] text-black font-bold">{service?.basic_service_value}</p>
          <img width={18} src={SR} alt="saudi-ryal"/>
        </div>
      </div>
      <h3 className="min-h-[55px] text-xl text-[#444]">{service?.title}</h3>
      <div className="flex flex-col gap-2">
        <button 
        onClick={handleAddToCart}
        className="flex justify-center items-center bg-mainColor text-white text-base py-2 px-[10px] border border-mainColor hover:bg-white hover:text-mainColor duration-300 rounded-[15px]">
          <FontAwesomeIcon className="size-5 ml-1" icon={faCartPlus} />
          أضف إلى السلة
        </button>
        <button 
         onClick={()=>{
          setShowDonatePopUp(true)
          getDonation(service, price)
        }}
        className="flex justify-center items-center bg-mainColor text-white text-base py-2 px-[10px] border border-mainColor hover:bg-white hover:text-mainColor duration-300 rounded-[15px]">
          <FontAwesomeIcon className="size-5 ml-2" icon={faWallet} />
          أدفع الأن
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
