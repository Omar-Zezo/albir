import {
  faCartShopping,
  faClipboard,
  faFileInvoice,
  faPowerOff,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from "../../store/slices/auth/logout";

const NavigationProfile = () => {
  const {data} = useSelector((state) => state.logout);
  const dispatch = useDispatch()

  //get  loggeduser data
  useEffect(() => {
    if (data) {
      if (data.data) {
        if (data.data.data) {
         console.log(data.data.data)
        }
      }
    }
  }, [data]);

  return (
    <div className="overflow-x-auto">
      <ul className="profile-nav w-full max-xl:overflow-x-auto flex items-center justify-center xl:gap-10 gap-5 mx-auto bg-gray-200 xl:px-10 px-5 py-5 rounded-md">
        <li className="xl:w-[170px]">
          <NavLink
            end
            to="/profile"
            className="py-2 px-3 flex font-semibold text-slate-900 items-center gap-3 bg-gray-100 rounded-md"
          >
            <FontAwesomeIcon className="text-xl" icon={faUser} />
            <p className="text-base max-xl:hidden">البيانات الشخصية</p>
          </NavLink>
        </li>

        <li className="xl:w-[170px]">
          <NavLink
            to="/profile/donation-record"
            className="py-2 px-3 flex text-slate-900 font-semibold items-center gap-3 bg-gray-100 rounded-md"
          >
            <FontAwesomeIcon className="text-xl" icon={faClipboard} />
            <p className="text-base max-xl:hidden">سجل التبرعات</p>
          </NavLink>
        </li>

        <li className="xl:w-[170px]">
          <NavLink
            to="/profile/cart"
            className="py-2 px-3 flex font-semibold text-slate-900 items-center gap-3 bg-gray-100 rounded-md"
          >
            <FontAwesomeIcon className="text-xl" icon={faCartShopping} />
            <p className="text-base max-xl:hidden">سلة التبرعات</p>
          </NavLink>
        </li>

        <li className="xl:w-[170px]">
          <NavLink
            to="/profile/my-bills"
            className="py-2 px-3 flex text-slate-900 font-semibold items-center gap-3 bg-gray-100 rounded-md"
          >
            <FontAwesomeIcon className="text-xl" icon={faFileInvoice} />
            <p className="text-base max-xl:hidden">فواتيري</p>
          </NavLink>
        </li>

        <li className="xl:w-[170px]">
          <button 
          onClick={()=>{
            dispatch(logoutUser())
            localStorage.removeItem("token")
            localStorage.removeItem("phone")
            window.location = '/'
          }}
          className="py-2 px-3 flex text-slate-900 font-semibold items-center gap-3 bg-gray-100 hover:bg-red-500 hover:text-white duration-300 rounded-md">
            <FontAwesomeIcon className="text-xl" icon={faPowerOff} />
            <p className="text-base max-xl:hidden">تسجيل الخروج</p>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavigationProfile;
