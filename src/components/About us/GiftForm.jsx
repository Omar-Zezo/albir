import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { customStyles } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getGiftsCategories } from "../../store/slices/gifts/giftsCategories";
import { getGiftsCards } from "../../store/slices/gifts/giftsCards";
import { getGiftPayment } from "../../store/slices/gifts/giftPayment";
import { faCoins, faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";


const GiftForm = () => {
  const [giftsCategories, setGiftsCategories] = useState(null);
  const [giftsCards, setGiftsCards] = useState(null);
  const [gift_category_id, setGift_category_id] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");
  const giftsCategoriesData = useSelector((state) => state.giftsCategories);
  const giftsCardsData = useSelector((state) => state.giftsCards);
  const {data} = useSelector((state) => state.giftPayment);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGiftsCategories());
  }, []);

  //get gifts categories
  useEffect(() => {
    if (giftsCategoriesData?.data?.data?.data) {
      const formattedCategories = giftsCategoriesData.data.data.data.map(
        (category) => ({
          value: category.id,
          label: category.title,
        })
      );
      setGiftsCategories(formattedCategories);
    }
  }, [giftsCategoriesData]);




  //get gifts cards
  useEffect(() => {
    if (giftsCardsData) {
      if (giftsCardsData.data) {
        if (giftsCardsData.data.data) {
          if (giftsCardsData.data.data.data) {
            setGiftsCards(giftsCardsData.data.data.data);
          }
        }
      }
    }
  }, [giftsCardsData]);


  //submit gift form
  const formSubmit = (data) => {
    if (!selectedCard) {
        errorMsg("من فضلك قم بإختيار بطاقة الإهداء")
    }
    if (!selectedValue) {
        errorMsg("من فضلك قم بإختيار طريقة الدفع")
    }
    dispatch(getGiftPayment({
        total_amount: data.total_amount,
        sender_name: data.sender_name,
        sender_phone: data.sender_phone,
        recipient_name: data.recipient_name,
        recipient_phone: data.recipient_phone,
        gift_category_id,
        gift_card_id: selectedCard,
        payment_brand: selectedValue,
    }));
  };

  const errorMsg = (msg) => toast.error(msg);

    useEffect(()=>{
      if(data){
        if(data.data){
            if(data.data){
                if(data.data.data){
                    console.log(data.data.data)
                }
            }
        }
      }
    },[data])

  return (
    <form className="xl:w-[90%] mx-auto" onSubmit={handleSubmit(formSubmit)}>
      <div className="flex gap-5 flex-wrap">
        <div className="max-md:w-full w-[48%] grow flex flex-col gap-4">
          <label
            htmlFor="sender_name"
            className="text-base text-secondryColor font-bold pr-2"
          >
            اسم المُرسل
          </label>
          <input
            id="sender_name"
            type="text"
            className="bg-field p-4 text-base rounded-xl outline-none border"
            placeholder="اسم المُرسل"
            {...register("sender_name", {
              required: "هذا الحقل مطلوب",
            })}
          />
          <p className="mt-1 pr-2 text-red-600 text-sm">
            {errors["sender_name"]?.message}
          </p>
        </div>

        <div className="max-md:w-full w-[48%] grow flex flex-col gap-4">
          <label
            htmlFor="sender_phone"
            className="text-base text-secondryColor font-bold pr-2"
          >
            رقم جوال المُرسل
          </label>
          <input
            id="sender_phone"
            type="tel"
            className="bg-field p-4 text-base rounded-xl outline-none border"
            placeholder="رقم جوال المُرسل"
            {...register("sender_phone", {
              required: "هذا الحقل مطلوب",
                pattern: {
                  value: /^(05\d{8}|5\d{8})$/,
                  message: "نقبل الأرقام السعودية فقط",
                },
            })}
          />
          <p className="mt-1 pr-2 text-red-600 text-sm">
            {errors["sender_phone"]?.message}
          </p>
        </div>

        <div className="max-md:w-full w-[48%] grow flex flex-col gap-4">
          <label
            htmlFor="total_amount"
            className="text-base text-secondryColor font-bold pr-2"
          >
            مبلغ الإهداء
          </label>
          <input
            id="total_amount"
            type="number"
            className="bg-field p-4 text-base rounded-xl outline-none border"
            placeholder="مبلغ الإهداء بالريل السعودي"
            {...register("total_amount", {
              required: "هذا الحقل مطلوب",
            })}
          />
          <p className="mt-1 pr-2 text-red-600 text-sm">
            {errors["total_amount"]?.message}
          </p>
        </div>

        <div className="max-md:w-full w-[48%] grow flex flex-col gap-4">
          <label
            htmlFor="sender_name"
            className="text-base text-secondryColor font-bold pr-2"
          >
            اسم المُرسل إليه
          </label>
          <input
            id="recipient_name"
            type="text"
            className="bg-field p-4 text-base rounded-xl outline-none border"
            placeholder="اسم المُرسل إليه"
            {...register("recipient_name", {
              required: "هذا الحقل مطلوب",
            })}
          />
          <p className="mt-1 pr-2 text-red-600 text-sm">
            {errors["recipient_name"]?.message}
          </p>
        </div>

        <div className="max-md:w-full w-[48%] grow flex flex-col gap-4">
          <label
            htmlFor="sender_phone"
            className="text-base text-secondryColor font-bold pr-2"
          >
            رقم جوال المُرسل إليه
          </label>
          <input
            id="recipient_phone"
            type="tel"
            className="bg-field p-4 text-base rounded-xl outline-none border"
            placeholder="رقم جوال المُرسل إليه"
            {...register("recipient_phone", {
              required: "هذا الحقل مطلوب",
                pattern: {
                  value: /^(05\d{8}|5\d{8})$/,
                  message: "نقبل الأرقام السعودية فقط",
                },
            })}
          />
          <p className="mt-1 pr-2 text-red-600 text-sm">
            {errors["recipient_phone"]?.message}
          </p>
        </div>

        <div className="max-md:w-full w-[48%] grow flex flex-col gap-4">
          <label
            htmlFor="email"
            className="text-base text-secondryColor font-bold pr-2"
          >
            بريد المُرسل إليه
          </label>
          <input
            id="email"
            type="email"
            className="bg-field p-4 text-base rounded-xl outline-none border"
            placeholder="بريد المُرسل إليه"
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

        <div className="w-full grow flex flex-col gap-4">
          <label
            htmlFor="gender"
            className="text-base text-secondryColor font-bold pr-2"
          >
            أختر فئة الإهداء
          </label>
          <Controller
            id="gift_category_id"
            name="gift_category_id"
            control={control}
            rules={{ required: "هذا الحقل مطلوب" }}
            render={({ field }) => (
              <Select
                {...field}
                options={giftsCategories}
                styles={customStyles}
                placeholder="أختر فئة الإهداء"
                className="bg-field p-2 text-base rounded-xl outline-none border"
                onChange={(selectedOption) => {
                  setGift_category_id(selectedOption?.value);
                  dispatch(getGiftsCards(selectedOption?.value));
                  field.onChange(selectedOption);
                }}
              />
            )}
          />
          <p className="pr-2 text-red-600 text-sm font-medium">
            {errors["gift_category_id"]?.message}
          </p>
        </div>

        <div className={`w-full ${giftsCards ? "flex":"hidden"} flex-col gap-2`}>
          <label
            htmlFor="total"
            className="text-base text-secondryColor font-bold pr-2"
          >
            أختر بطاقة لإهداء:
          </label>
          <div className="flex gap-5 items-center rounded-md">
            {giftsCards?.map((card) => (
              <label
                key={card?.id}
                className={`w-fit text-mainColor text-lg font-semibold cursor-pointer border border-mainColor hover:text-white duration-300 rounded-md px-5 py-2 ${
                  selectedCard === card?.id ? "bg-orange-200 text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="gift_card_id"
                  value={card?.id}
                  checked={selectedCard === card?.id}
                  onChange={(e) => {
                    setSelectedCard(Number(e.target.value));
                  }}
                  className="mr-2 hidden"
                />
                <img
                  width={150}
                  height={150}
                  src={card?.card_path}
                  alt={card?.file_name}
                />
              </label>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label
            htmlFor="total"
            className="text-base text-secondryColor font-bold pr-2"
          >
            أختر طريقة الدفع:
          </label>
          <div className="flex flex-wrap gap-5 items-center rounded-md">
            <label
              className={`w-fit flex items-center gap-2 text-mainColor text-lg text-center font-semibold cursor-pointer border border-mainColor duration-300 rounded-[50px] px-5 py-2 ${
                selectedValue === "bank_transfer"
                  ? "bg-mainColor text-white"
                  : ""
              }`}
            >
              <input
                type="radio"
                name="payment_ways"
                value="bank_transfer"
                checked={selectedValue === "bank_transfer"}
                onChange={(e) => setSelectedValue(e.target.value)}
                className="mr-2 hidden"
              />
              <FontAwesomeIcon className="lg" icon={faCoins} />
              تحويل بنكي
            </label>

            <label
              className={`w-fit flex items-center gap-2 text-mainColor text-lg font-semibold cursor-pointer border border-mainColor duration-300 rounded-[50px] px-5 py-2 ${
                selectedValue === "MADA" ? "bg-mainColor text-white" : ""
              }`}
            >
              <input
                type="radio"
                name="payment_ways"
                value="MADA"
                checked={selectedValue === "MADA"}
                onChange={(e) => setSelectedValue(e.target.value)}
                className="mr-2 hidden"
              />
              <FontAwesomeIcon className="text-lg" icon={faMoneyCheck} />
              بطاقة مدى
            </label>

            <label
              className={`w-fit flex items-center gap-2 text-mainColor text-lg font-semibold cursor-pointer border border-mainColor duration-300 rounded-[50px] px-5 py-2 ${
                selectedValue === "VISA" ? "bg-mainColor text-white" : ""
              }`}
            >
              <input
                type="radio"
                name="payment_ways"
                value="VISA"
                checked={selectedValue === "VISA"}
                onChange={(e) => setSelectedValue(e.target.value)}
                className="mr-2 hidden"
              />
              <FontAwesomeIcon className="text-lg" icon={faCcMastercard} />
              بطاقة إئتمانية
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 justify-between mt-10">
        <div className="max-md:w-full w-1/2 mx-auto flex flex-col gap-4">
          <input
            type="submit"
            value={"إضافة"}
            className="bg-mainColor hover:bg-secondryColor duration-300 p-4 text-lg text-white text-center cursor-pointer font-semibold rounded-xl"
          />
        </div>
      </div>
    </form>
  );
};

export default GiftForm;
