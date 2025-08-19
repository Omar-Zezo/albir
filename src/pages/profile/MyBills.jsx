import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInvoices } from "../../store/slices/profile/Invoices";
import BillCard from "../../components/Cards/BillCard";
import Pagination from "../../utils/Pagination";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const MyBills = () => {
  const [allBills, setAllBills] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(null);
  const { data } = useSelector((state) => state.invoices);
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
      dispatch(getInvoices({ str: `page=${page}`}));
    } else {
      dispatch(getInvoices({ str: `page=${currentPage}`}));
    }
  }, [page]);


  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          if (data.data.data.bills) {
            if(data.data.data.bills.total){
              setTotal(data.data.data.bills.total);
            }
            if (data.data.data.bills.data) {
              setAllBills(data.data.data.bills.data);
            }
          }
        }
      }
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-10">
      <Helmet>
        <title>جمعية البر - فواتيري</title>
      </Helmet>
      <h4 className="text-2xl text-center text-slate-900 font-semibold relative pb-2 title-line">
        فواتيري
      </h4>
      <div className="flex flex-col gap-5 overflow-x-auto">
        <div className="flex flex-wrap justify-between">
          {allBills?.map((item) => (
            <BillCard key={item?.id} item={item} />
          ))}
        </div>
      </div>
      <Pagination currentPage={currentPage} total={total} handlePageClick={handlePageClick}/>
    </div>
  );
};

export default MyBills;
