import Sidebar from "./Sidebar";
import hamburger from "../assets/hamburger.svg";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";

const Header = ({ showNav, toggleSideBar, setSearchTerm }) => {

  return (
    <header className="flex fixed justify-between cursor-pointer items-center shadow-md top-0 p-4 left-0 w-full h-[50px] bg-[#fefefe] z-30 lg:px-10">
      <img
        className="w-5 h-5"
        onClick={toggleSideBar}
        src={hamburger}
        alt="hamburger menu"
      />
      <div className="flex items-center gap-x-3 relative">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          className=" bg-transparent cursor-pointer py-1 px-3 w-8 ease-in-out focus:border focus:w-full focus:border-[#28ADBF]"
        />
        <img
          className="w-6 h-6 rounded-full absolute -z-10 right-[38px] top-[6px] "
          src={search}
          alt="search icon"
        />
        <div>
          <img className="w-5 h-5" src={cart} alt="Cart details icon" />
          <p className="text-white bg-red-500 w-4 h-4 text-center font-semibold border-2 border-[#28ADBF] rounded-full text-[9px] -top-1 -right-2 absolute">
            0
          </p>
        </div>
      </div>
      {showNav && <Sidebar toggleSideBar={toggleSideBar} />}
    </header>
  );
};

export default Header;