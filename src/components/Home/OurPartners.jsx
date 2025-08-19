import OurPartnersSlider from './OurPartnersSlider'

const OurPartners = () => {
    
    return (
        <div className='flex flex-col gap-12 xl:mt-[120px] mt-20 bg-cover'>
            <div className='container flex items-center'>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-[36px] max-xl:text-3xl text-secondryColor font-bold'>شركاؤنا</h3>
                </div>
            </div>
            <OurPartnersSlider/>
        </div>
    )
}

export default OurPartners
