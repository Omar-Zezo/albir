import { Link } from 'react-router-dom'
import { Cart, Logo } from '../../images/imgs'
import { Calling, MailSend } from '../../images/svg'

const MiddleNav = ({contactInfo}) => {
  return (
    <div className="container py-[30px] flex items-center">
    <div className="w-[100px] mt-[30px]">
      <Link to="/">
      <img src={Logo} className="size-full object-cover" alt="logo" />
      </Link>
    </div>
    <div className="flex gap-10 items-center mr-auto">
      <div className="flex gap-[15px]">
          <img width={40} height={40} src={Cart} alt="cart"/>
          <div className="flex flex-col gap-[10px]">
          <h3 className="text-[#7e7e7e] text-[13px] font-medium">
              سلة التبرعات
          </h3>
          <Link to="/profile/cart" className="text-[#242323] hover:text-mainColor duration-300 text-[15px] font-semibold">سلة التبرعات</Link>
          </div>
      </div>

      <div className="flex gap-[15px] pr-10 border-r border-[#e4e4e4]">
          <img width={40} height={40} src={MailSend} alt="cart"/>
          <div className="flex flex-col gap-[10px]">
          <h3 className="text-[#7e7e7e] text-[13px] font-medium">
          البريد الإلكتروني
          </h3>
          <Link to={`mailto:${contactInfo?.email}`} className="text-[#242323] text-[15px] font-semibold hover:text-mainColor duration-300">{contactInfo?.email}</Link>
          </div>
      </div>

      <div className="flex gap-[15px] pr-10 border-r border-[#e4e4e4]">
          <img width={40} height={40} src={Calling} alt="cart"/>
          <div className="flex flex-col gap-[10px]">
          <h3 className="text-[#7e7e7e] text-[13px] font-medium">
          رقم الهاتف
          </h3>
          <Link to={`tel:${contactInfo?.phone}`} className="text-[#242323] text-[15px] font-semibold hover:text-mainColor duration-300">{contactInfo?.phone}</Link>
          </div>
      </div>
    </div>
  </div>
  )
}

export default MiddleNav