import React, { useEffect, useState } from "react";
import { Favicon } from "../images/imgs";
import { useDispatch, useSelector } from "react-redux";
import { getBanksList } from "../store/slices/cart/banks";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { customStyles } from "../constant";
import { bankDonationPay } from "../store/slices/cart/bankDonation";
import PageLoader from "../utils/PageLoader";

const BankTransfer = () => {
  const [bankList, setBankList] = useState(null);
  const [selectBanks, setSelectBanks] = useState(null);
  const bankListData = useSelector((state) => state.banks);
  const bankDonationData = useSelector((state) => state.bankDonation);

  const navigate = useNavigate()


  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const dispatch = useDispatch();

  const { donationCode } = useParams();

  useEffect(() => {
    if (donationCode) {
      dispatch(getBanksList(donationCode));
    }
  }, [donationCode]);

  useEffect(() => {
    if (bankListData) {
      if (bankListData.data) {
        if (bankListData.data.data) {
          if (bankListData.data.data.data) {
            const formattedCategories = bankListData.data.data.data.map(
              (bank) => ({
                value: bank.bank_name,
                label: bank.bank_name,
              })
            );
            setSelectBanks(formattedCategories);
            setBankList(bankListData.data.data.data);
          }
        }
      }
    }
  }, [bankListData]);

  //submit gift form
  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("bank_name", data?.bank_name?.value);

    // if image with data
    if (data.attachments?.[0]) {
      formData.append("attachments", data?.attachments[0]);
    }

    dispatch(bankDonationPay({ formData, donationCode }));
  };

  //bank donation
  useEffect(() => {
    if (bankDonationData) {
      if (bankDonationData.data) {
        if (bankDonationData.data.data) {
          if (bankDonationData.data.data.data) {
            // if (bankDonationData.data.data.data.donation_type === "service") {
              if (bankDonationData.data.data.data.donation_code) {
                navigate(
                  `/reviews/${bankDonationData.data.data.data.donation_code}`
                );
              }
            // }
          }
        }
      }
    }
  }, [bankDonationData]);

  return !bankList ? (
    <PageLoader />
  ) : (
    <div className="mt-10">
      <div className="flex flex-col gap-5">
        <div className="w-fit mx-auto flex gap-4 items-center">
          <img width={40} src={Favicon} alt="favicon" />
          <h1 className="text-3xl text-center text-secondryColor font-semibold">
            الحسابات البنكية
          </h1>
        </div>

        <div className="container">
          <table className={`w-full mt-8 text-zinc-800`}>
            <thead>
              <tr className="flex justify-around rounded-t-xl bg-mainColor text-white text-lg max-lg:text-base font-semibold">
                <th className="w-1/4 relative py-5 px-1 after:cell-border">
                  اسم البنك
                </th>
                <th className="w-1/4 relative text-center py-5 px-3 after:cell-border">
                  رقم الحساب
                </th>
                <th className="w-1/4 relative text-center py-5 px-3 after:cell-border">
                  IBAN
                </th>
                <th className="w-1/4 relative text-center py-5 px-3 after:cell-border">
                  رابط البنك
                </th>
              </tr>
            </thead>
            <tbody>
              {bankList?.map((bank, index) => (
                <tr
                  key={index}
                  className="w-full flex justify-around py-3 px-1  border-b border-x border-gray-400 last-of-type:rounded-b-xl text-lg font-medium"
                >
                  <td className="w-1/4 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                    {bank?.bank_name}
                  </td>
                  <td className="w-1/4 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                    {bank?.account_number}
                  </td>
                  <td className="w-1/4 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                    {bank?.IBAN}
                  </td>
                  <td className="w-1/4 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                    <a
                      target="_blanck"
                      href={bank?.bank_link}
                      className="text-blue-500 text-lg font-bold"
                    >
                      ذهاب
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-20">
            <h3 className="text-3xl text-center text-mainColor font-semibold">
              إرفاق صورة التحويل
            </h3>
            <form
              className="flex flex-col gap-5"
              onSubmit={handleSubmit(formSubmit)}
            >
              <div className="w-full grow flex flex-col gap-4">
                <label
                  htmlFor="bank_name"
                  className="text-base text-secondryColor font-bold pr-2"
                >
                  اختار البنك المحول اليه :
                </label>
                <Controller
                  id="bank_name"
                  name="bank_name"
                  control={control}
                  rules={{ required: "هذا الحقل مطلوب" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={selectBanks}
                      styles={customStyles}
                      placeholder="اختار البنك المحول اليه"
                      className="bg-field p-2 text-base rounded-xl outline-none border"
                      onChange={(selectedOption) => {
                        field.onChange(selectedOption);
                      }}
                    />
                  )}
                />
                <p className="pr-2 text-red-600 text-sm font-medium">
                  {errors["bank_name"]?.message}
                </p>
              </div>

              <div className="max-md:w-full w-[48%] grow flex flex-col gap-4">
                <label
                  htmlFor="attachments"
                  className="text-base text-secondryColor font-bold pr-2"
                >
                  رقم جوال المُرسل إليه
                </label>
                <input
                  id="attachments"
                  type="file"
                  className="bg-field p-4 text-base rounded-xl outline-none border"
                  placeholder="رقم جوال المُرسل إليه"
                  {...register("attachments", {
                    required: "هذا الحقل مطلوب",
                  })}
                />
                <p className="mt-1 pr-2 text-red-600 text-sm">
                  {errors["attachments"]?.message}
                </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankTransfer;
