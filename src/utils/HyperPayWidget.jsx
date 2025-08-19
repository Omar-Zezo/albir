import { useEffect } from "react";

const HyperPayWidget = ({ paymentObj }) => {
  useEffect(() => {
    if (paymentObj) {
      localStorage.setItem("complete_order_url", paymentObj?.route);
    }
  }, [paymentObj]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://eu-prod.oppwa.com/v1/paymentWidgets.js?checkoutId=${paymentObj?.checkout_id}`;
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      window.wpwlOptions = {
        locale: "ar",
        style: "card",
        paymentTarget: "_top",
        autofocus: "card.number",
        applePay: {
          displayName: "albir",
          total: { label: "albir, INC." },
          merchantCapabilities: ["supports3DS"],
          countryCode: "SA",
          supportedNetworks: ["masterCard", "visa", "mada"],
        },
      };
    };
    return () => {
      document.body.removeChild(script);
    };
  }, [paymentObj]);

  return (
    <div dir="ltr">
      <form
        action={`http://localhost:5173/payment-status/${paymentObj?.order_id}`}
        className="paymentWidgets"
        data-brands={paymentObj?.payment_brand}
      ></form>
    </div>
  );
};

export default HyperPayWidget;
