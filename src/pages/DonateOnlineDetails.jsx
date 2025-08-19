import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderBg } from "../images/imgs";
import { getDonateOnlineDetails } from "../store/slices/Home/donateOnlineDetails";
import ProjectCard from "../components/Cards/ProjectCard";
import DonateNowPopup from "../utils/DonateNowPopup";
import PageLoader from "../utils/PageLoader";
import ScrollToTop from "../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const DonateOnlineDetails = () => {
  const [details, setDetails] = useState(null);
  const [showDonatePopUp, setShowDonatePopUp] = useState(false);
  const [donationDetails, setDonationDetails] = useState(null);
  const [multiPrice, setMultiPrice] = useState(null);
  const { data } = useSelector((state) => state.donateOnlineDetails);

  const getDonation = (data, price) => {
    setDonationDetails(data);
    setMultiPrice(price);
  };

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getDonateOnlineDetails(id));
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          setDetails(data.data.data);
        }
      }
    }
  }, [data]);

  return !details ? (
    <PageLoader />
  ) : (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - {details?.section?.title}</title>
      </Helmet>
      <div className="max-xl:pt-24">
        <header className="h-[270px] mt-[-35px] relative">
          <div
            className="size-full grayscale bg-fixed absolute top-0 left-0 z-[-1]"
            style={{
              background: `url('${HeaderBg}')`,
              backgroundPosition: "center",
            }}
          ></div>
          <div className="bg-black/70 size-full">
            <div className="container pt-16">
              <div className="flex flex-col gap-4 pr-5">
                <h2 className="text-[50px] max-xl:text-4xl text-white font-bold">
                  {details?.section?.title}
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <span>-</span>
                  <p className="underline">{details?.section?.title}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-20">
          <div className="container flex justify-center flex-wrap gap-4">
            {details?.services?.map((service) => (
              <div className="w-[400px]">
                <ProjectCard
                  service={service}
                  categoryName={details?.section?.title}
                  getDonation={getDonation}
                  setShowDonatePopUp={setShowDonatePopUp}
                />
              </div>
            ))}
          </div>
        </div>
        <DonateNowPopup
          donationDetails={donationDetails}
          multiPrice={multiPrice}
          showDonatePopUp={showDonatePopUp}
          setShowDonatePopUp={setShowDonatePopUp}
        />
      </div>
    </ScrollToTop>
  );
};

export default DonateOnlineDetails;
