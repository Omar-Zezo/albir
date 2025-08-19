import MiddleNav from "../components/Navbar/MiddleNav";
import NavigationLinks from "../components/Navbar/NavigationLinks";
import UpperNav from "../components/Navbar/UpperNav";

const Navbar = ({contactInfo, allPages, setShowLogin, donateOnlineLinks, loggedUserInfo}) => {
  return (
    <nav className="relative z-50 max-xl:hidden">
      <div>
        <UpperNav contactInfo={contactInfo}/>
        <MiddleNav contactInfo={contactInfo}/>
        <NavigationLinks loggedUserInfo={loggedUserInfo} allPages={allPages} setShowLogin={setShowLogin} donateOnlineLinks={donateOnlineLinks}/>
      </div>
    </nav>
  );
};

export default Navbar;
