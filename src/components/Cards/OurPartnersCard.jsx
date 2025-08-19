
const OurPartnersCard = ({partner}) => {
    return (
        <div className='w-[150px]'>
            <img src={partner?.image_path} alt={partner?.name} className='size-full object-cover opacity-50 hover:opacity-100 duration-300 cursor-pointer' />
        </div>
    )
}

export default OurPartnersCard
