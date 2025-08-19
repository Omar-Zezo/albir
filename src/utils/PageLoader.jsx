import { Logo } from "../images/imgs";
import Spiner from "./Spinner";

const PageLoader = () => {
  return (
    <div className="size-full fixed flex flex-col items-center justify-center top-0 z-[9999] left-0 bg-white">
      <img src={Logo} alt="logo" className="w-[200px]"/>
      <Spiner/>
    </div>
  );
};

export default PageLoader;
