import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";

const UseNotifications = () => {
  const updateProfileData = useSelector((state) => state.updateProfile);
  const addToCartData = useSelector((state) => state.addToCart);
  const memberJoinData = useSelector((state) => state.join);
  const donorJoinData = useSelector((state) => state.donorJoin);
  const contactusData = useSelector((state) => state.contactus);
  const applyJobData = useSelector((state) => state.applyJob);
  const serviceReviewData = useSelector((state) => state.serviceReview);

  const successMsg = (msg) => toast.success(msg);
  const errorMsg = (msg) => toast.error(msg);

  // update user
  useEffect(() => {
    if (updateProfileData?.data?.data?.status?.message) {
      successMsg(updateProfileData?.data?.data?.status?.message);
    }
  }, [updateProfileData]);

  //add to cart
  useEffect(() => {
    if (addToCartData) {
      if (addToCartData.error) {
        if (addToCartData.error.status === 401) {
          errorMsg("من فضلك قم بتسجيل الدخول أولاً");
        }
        if (addToCartData.error.status === 422) {
          if (addToCartData.error.data) {
            if (addToCartData.error.data.status) {
              if (addToCartData.error.data.status.message) {
                errorMsg(addToCartData.error.data.status.message);
              }
            }
          }
        }
      }
      if (addToCartData?.data?.data?.status?.message) {
        successMsg(addToCartData?.data?.data?.status?.message);
      }
    }
  }, [addToCartData]);

  //memberJoin
  useEffect(() => {
    if (memberJoinData) {
      if (memberJoinData?.data) {
        successMsg(memberJoinData?.data?.data?.status?.message);
      }

      if (memberJoinData?.error) {
        errorMsg(memberJoinData?.error?.data?.message);
      }
    }
  }, [memberJoinData]);

  // donor join
  useEffect(() => {
    if (donorJoinData) {
      if (donorJoinData?.data?.data?.status?.message) {
        successMsg(donorJoinData?.data?.data?.status?.message);
      }

      if (donorJoinData?.error) {
        errorMsg(donorJoinData?.error?.data?.message);
      }
    }
  }, [donorJoinData]);

  //contact us
  useEffect(() => {
    if (contactusData?.data?.data?.status?.message) {
      successMsg(contactusData?.data?.data?.status?.message);
    }
    if (contactusData?.error) {
      console.log(error);
      errorMsg(contactusData?.error?.data?.message);
    }
  }, [contactusData]);

  //apply job
  useEffect(() => {
    if (applyJobData?.data?.data?.status?.message) {
      successMsg(applyJobData.data.data.status.message);
    }
    if (applyJobData?.error) {
      errorMsg(applyJobData?.error?.data?.message);
    }
  }, [applyJobData]);

  //handel service review Notifications
  useEffect(() => {
    if (serviceReviewData?.data?.data?.status?.message) {
      successMsg(serviceReviewData?.data?.data?.status?.message);
      setTimeout(() => {
        window.location = "/";
      }, 3000);
    }

    if (serviceReviewData?.error) {
      errorMsg(serviceReviewData?.error?.data?.message);
    }
  }, [serviceReviewData]);
};

export default UseNotifications;
