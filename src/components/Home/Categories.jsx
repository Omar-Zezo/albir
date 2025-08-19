import { Hands } from '../../images/imgs'
import ProductsSlider from './ProductsSlider';

const Categories = () => {
  return (
    <div style={{background: `url('${Hands}')`, backgroundSize:"cover"}} className='xl:pt-[120px] pt-20 pb-[90px]'>
        <div className='container flex flex-col gap-8'>
           <div className='flex flex-col gap-5'>
            <p className='text-[#aaa] text-lg font-medium'>أهلا بكم في جمعية البر بجدة</p>
            <h3 className='text-2xl lg:text-[33px] text-secondryColor font-bold'>
            للوصول إلى قنوات التبرع الرقمية لدينا يرجى اختيار إحدى الأقسام الظاهرة أو المزيد
            </h3>
           </div>
           <ProductsSlider/>
        </div>
    </div>
  )
}

export default Categories