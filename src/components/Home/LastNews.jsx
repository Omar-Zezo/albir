import React from 'react'
import { EventBg } from '../../images/imgs'
import NewsSlider from './NewsSlider'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from '../../store/slices/Home/news';

const LastNews = () => {
    const [news, setNews] = useState(null);
    const { data } = useSelector((state) => state.news);
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getNews());
    }, []);
  
    useEffect(() => {
      if (data) {
        if (data.data) {
          if (data.data.data) {
            setNews(data.data.data)
          }
        }
      }
    }, [data]);

    return (
        <div className='flex flex-col gap-12 mt-20 bg-cover' style={{ background: `url('${EventBg}')` }}>
            <div className='container flex max-xl:flex-col max-xl:gap-5 xl:items-center'>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-lg text-[#aaa] font-medium'>أخر الأخبار</h3>
                    <p className='text-secondryColor text-[36px] max-xl:text-3xl font-bold'>
                        جديد جمعية البر بجدة
                    </p>
                </div>
                <p className='w-[40%] max-xl:w-full mr-auto text-[#7e7e7e] text-lg font-medium'>
                بوابة اخبار البر تقدم اهم اخبار الجمعية على مدار اليوم مع تغطيات مصورة في كافة مجالات النشاط الاجتماعي والخيري
                </p>
            </div>
            <NewsSlider news={news}/>
        </div>
    )
}

export default LastNews
