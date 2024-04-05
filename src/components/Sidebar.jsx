import { Link, useNavigate } from "react-router-dom";
import home from "../assets/home.svg";
import profile from "../assets/profile.svg";
import orders from "../assets/orders.svg";
import about from "../assets/about.svg";
import support from "../assets/support.svg";
import faq from "../assets/faq.svg";

const Sidebar = ({ toggleSideBar }) => {

  return (
    <nav className="absolute flex flex-col justify-center  shadow-2xl top-[50px] left-0 bg-[#28ADBF] text-[#fefefe]  p-6  h-[100vh]  w-2/3 md:w-52">
      <div className=" flex flex-col gap-y-8">
        <Link
          className="flex gap-x-2 items-center"
          onClick={toggleSideBar}
          to="/"
        >
          <img className="w-6" src={home} alt="Home Icon" />
          <p>Home</p>
        </Link>
        {/* {user && (
          <Link
            className="flex gap-x-2 items-center"
            onClick={toggleSideBar}
            to="/profile"
          >
            <img className="w-6" src={profile} alt="Home Icon" />

            <p>Profile</p>
          </Link>
        )} */}
        <Link
          className="flex gap-x-2 items-center"
          onClick={toggleSideBar}
          to=""
        >
          <img className="w-6" src={orders} alt="Home Icon" />

          <p>Orders</p>
        </Link>
        <Link
          className="flex gap-x-2 items-center"
          onClick={toggleSideBar}
          to=""
        >
          <img className="w-6" src={about} alt="Home Icon" />

          <p>About Us</p>
        </Link>
        <Link
          className="flex gap-x-2 items-center"
          onClick={toggleSideBar}
          to=""
        >
          <img className="w-6" src={support} alt="Home Icon" />

          <p>Support</p>
        </Link>
        <Link
          className="flex gap-x-2 items-center"
          onClick={toggleSideBar}
          to=""
        >
          <img className="w-6" src={faq} alt="Home Icon" />

          <p>FAQ</p>
        </Link>
      </div>

      <button
        className="bg-[#fefefe] text-[#28ADBF] w-full mt-12 p-2 rounded-full font-bold hover:bg-blue-100"
      >
        Log In
      </button>
    </nav>
  );
};

export default Sidebar;
