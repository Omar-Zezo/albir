import { useDispatch, useSelector } from "react-redux";
import DonationRecordCard from "../../components/Cards/DonationRecordCard";
import { useEffect, useState } from "react";
import { getDonationHistory } from "../../store/slices/profile/donationHistory";
import Pagination from "../../utils/Pagination";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const DonationRecord = () => {
  const [allDonationRecord, setAllDonationRecord] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(null);


  const { data } = useSelector((state) => state.donationHistory);
  const dispatch = useDispatch();


  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  const handlePageClick = (event) => {
    navigate(`?page=${event.selected + 1}`);
  };

  useEffect(() => {
    if (page) {
      setCurrentPage(page);
      dispatch(getDonationHistory({ str: `page=${page}`}));
    } else {
      dispatch(getDonationHistory({ str: `page=${currentPage}`}));
    }
  }, [page]);


  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          if(data.data.data.total){
            setTotal(data.data.data.total);
          }
          if (data.data.data.data) {
            setAllDonationRecord(data.data.data.data);
          }
        }
      }
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-10">
      <Helmet>
        <title>جمعية البر - سجل التبرعات</title>
      </Helmet>
      <h4 className="text-2xl text-center text-slate-900 font-semibold relative pb-2 title-line">
        سجل التبرعات
      </h4>
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap justify-between">
          {
            allDonationRecord?.map(item=>(
              <DonationRecordCard key={item?.id} item={item}/>
            ))
          }
        </div>
      </div>
      <Pagination currentPage={currentPage} total={total} handlePageClick={handlePageClick}/>
    </div>
  );
};

export default DonationRecord;
