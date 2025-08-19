import { Link, useParams } from "react-router-dom";
import { HeaderBg } from "../../images/imgs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { getEventDetails } from "../../store/slices/Home/eventDetails";
import PageLoader from "../../utils/PageLoader";
import ScrollToTop from "../../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const { data } = useSelector((state) => state.eventDetails);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getEventDetails(id));
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          if (data.data.data) {
            setEvent(data.data.data);
          }
        }
      }
    }
  }, [data]);

  return !event ? (
    <PageLoader />
  ) : (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - تفاصيل الحدث</title>
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
                  تفاصيل الحدث
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <span>-</span>
                  <p className="underline">{event?.title}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-20 container">
          <div className="container max-xl:flex-col flex justify-between gap-4">
            <div className="w-[48%] max-xl:w-full max-xl:order-2 flex flex-col gap-3">
              <h3 className="text-3xl mt-6 text-secondryColor font-bold">
                {event?.title}
              </h3>

              <div className="text-lg text-[#7e7e7e] font-medium mt-6">
                {event ? parse(event?.content) : null}
              </div>
            </div>
            <div className="w-1/2 max-xl:w-full max-xl:order-1 h-[250px] xl:h-[500px] rounded-xl">
              <img
                src={event?.img}
                alt="project-img"
                className="size-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="bg-green-700 flex flex-col gap-4 justify-center items-center rounded-xl mt-20 py-10 px-5">
            <p className="text-white text-2xl font-medium">{event?.location}</p>
            <div className="flex flex-col items-center gap-2">
              <p className="text-white text-lg font-medium">
                التاريخ: {event?.date}
              </p>
              <p className="text-white text-lg font-medium">
                الوقت: {event?.time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default EventDetails;
