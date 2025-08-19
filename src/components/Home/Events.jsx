import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "../Cards/EventCard";
import { EventBg } from "../../images/imgs";
import { getEvents } from "../../store/slices/Home/events";

const Events = () => {
  const [events, setEvents] = useState(null);
  const { data } = useSelector((state) => state.events);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          if (data.data.data.events) {
            if (data.data.data.events.data) {
              setEvents(data.data.data.events.data);
            }
          }
        }
      }
    }
  }, [data]);

  return (
    <div
      className="flex flex-col gap-12 mt-20 bg-cover"
      style={{ background: `url('${EventBg}')` }}
    >
      <div className="container flex max-xl:flex-col max-xl:gap-5 xl:items-center">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg text-[#aaa] font-medium">قائمة أخر الأحداث</h3>
          <p className="text-secondryColor text-[36px] max-xl:text-3xl font-bold">
            تفحص
            <br />
            قائمة أخر الأحداث.
          </p>
        </div>
        <p className="w-[40%] max-xl:w-full mr-auto text-[#7e7e7e] text-lg font-medium">
          استكشف الاحداث الاجتماعية والخيرية في المملكة العربية السعودية من
          خلالنا، حيث نمكنك من الحصول على كافة المعلومات حول الأنشطة والفعاليات
          الاجتماعية مدار العام
        </p>
      </div>
      <div className="container flex gap-10 justify-between flex-wrap">
        {
            events?.map(event=>(
                <EventCard key={event.id} event={event}/>

            ))
        }
      </div>
    </div>
  );
};

export default Events;
