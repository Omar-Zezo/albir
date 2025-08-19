import CratItem from "./CratItem";

const CartItemsContainer = ({cartItems}) => {
   
  return (
    <div className="w-full flex max-lg:flex-col-reverse max-lg:gap-5 justify-between mt-7">
      {/* <OrderCheckout totalCartPrice={cartItems.totalCartPrice} /> */}
      <div className="w-full">
        <div className="flex justify-end max-md:hidden">
          <h3 className="text-lg pr-10 font-medium">التبرع</h3>
          <div className="w-[55%] mr-auto flex justify-between text-lg font-medium">
            <h3 className="pr-10">السعر</h3>
            <h3>الكمية</h3>
            <h3 className="pl-5">الإجمالي</h3>
          </div>
        </div>
        <div className="w-full mt-5">
          {
            cartItems?.map(item=>(
              <CratItem key={item?.id} item={item}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default CartItemsContainer;
