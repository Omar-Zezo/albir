import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMembershipType } from '../../store/slices/friendsOfAlbir/membershipType';

const MembershipType = ({showMembershipType, setShowMembershipType}) => {

    const [types, setTypes] = useState(null);
    const { data } = useSelector((state) => state.membershipType);
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getMembershipType());
    }, []);
  
    useEffect(() => {
      if (data) {
        if (data.data) {
          if (data.data.data) {
            setTypes(data.data.data)
          }
        }
      }
    }, [data]);

  return (
    <div onClick={()=> setShowMembershipType(false)} className={`fixed top-0 left-0 z-50 ${showMembershipType ? "flex":"hidden"} justify-center items-center size-full bg-black/70`}>
        <div className='bg-white w-[500px] rounded-xl'>
            <div className='flex items-center justify-between px-4 py-5 rounded-t-xl bg-gray-200'>
                <p className='text-xl text-secondryColor font-bold'>أختر نوع العضوية</p>
                <FontAwesomeIcon className='text-xl text-zinc-500 cursor-pointer' icon={faX} 
                onClick={()=> setShowMembershipType(false)}
                />
            </div>
            <div className='flex flex-col items-center gap-2 px-5 py-5'
            onClick={(e)=>e.stopPropagation()}
            >
                {
                    types?.map(type=>(
                        <Link key={type?.id} to={`/albir-friends/join?type=${type?.id}`} className='w-full flex items-center justify-center gap-5 py-5 rounded-l-full text-lg text-white font-semibold bg-mainColor hover:bg-secondryColor duration-300'>
                            <p>{type?.title}</p>
                            <p>({type?.price} ريال سعودي)</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MembershipType