import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { HeaderBg } from "../../images/imgs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListOfMembers } from "../../store/slices/friendsOfAlbir/listOfMembers";
import Pagination from "../../utils/Pagination";
import PageLoader from "../../utils/PageLoader";
import ScrollToTop from "../../utils/ScrollToTop";
import { Helmet } from "react-helmet";

const ListOfMembers = () => {
  const [membersList, setMembersList] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(null);

  const { data } = useSelector((state) => state.listOfMembers);

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
      dispatch(getListOfMembers({ str: `page=${page}` }));
    } else {
      dispatch(getListOfMembers({ str: `page=${currentPage}` }));
    }
  }, [page]);

  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
          if (data.data.data.data) {
            setCurrentPage(data.data.data.current_page);
            setTotal(data.data.data.total);
            setMembersList(data.data.data.data);
          }
        }
      }
    }
  }, [data]);

  return !membersList ? (
    <PageLoader />
  ) : (
    <ScrollToTop>
      <Helmet>
        <title>جمعية البر - أعضاء الجمعية العمومية</title>
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
                  أعضاء الجمعية العمومية
                </h2>
                <div className="w-fit flex gap-2 text-base font-semibold text-white py-7 max-xl:py-5 px-5 pr-2 rounded-l-[27px] bg-mainColor">
                  <Link to="/">الرئيسية</Link>
                  <span>-</span>
                  <p className="underline">أعضاء الجمعية العمومية</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container overflow-x-auto flex flex-col gap-10 rounded-xl">
          <table className={`w-full mt-8 text-zinc-800`}>
            <thead>
              <tr className="flex justify-around rounded-t-xl bg-mainColor text-white text-lg max-lg:text-base font-semibold">
                <th className="w-2/6 relative py-5 px-1 after:cell-border">
                  الاسم
                </th>
                <th className="w-1/6 relative text-center py-5 px-3 after:cell-border">
                  نوع العضوية
                </th>
                <th className="w-1/6 relative text-center py-5 px-3 after:cell-border">
                  تاريخ الإشتراك
                </th>
                <th className="w-1/6 relative text-center py-5 px-3 after:cell-border">
                  تاريخ الإنتهاء
                </th>
              </tr>
            </thead>
            <tbody>
              {membersList?.map((member, index) => (
                <tr
                  key={member?.id}
                  className="w-full flex justify-around py-3 px-1  border-b border-x border-gray-400 last-of-type:rounded-b-xl text-lg font-medium"
                >
                  <td className="w-2/6 text-center cursor-pointer text-blue-400 hover:text-mainColor duration-300 py-3 relative overflow-hidden text-ellipsis text-nowrap">
                    <Link
                      to={`/about-the-association/list-of-members-of-the-general-assembly/details/${member?.id}`}
                    >
                      {member?.first_name}
                    </Link>
                  </td>
                  <td className="w-1/6 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                    {member?.package?.title}
                  </td>
                  <td className="w-1/6 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                    {member?.subscription_date}
                  </td>
                  <td className="w-1/6 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                    {member?.expiry_date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            currentPage={currentPage}
            total={total}
            handlePageClick={handlePageClick}
          />
        </div>
      </div>
    </ScrollToTop>
  );
};

export default ListOfMembers;
