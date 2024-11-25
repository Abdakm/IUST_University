import { Link } from "react-router-dom";
import { useState } from "react";
import { logo } from "../assets";
import { useStore } from "../contexts/userContext";
import Cookies from "js-cookie";
import {Sidebar, Toggle} from './index'
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useStore();

  function handleLogout() {
    Cookies.remove("username");
    Cookies.remove("name");
    Cookies.remove("id");
    Cookies.remove("sub_dep_id");
    setUser(null);
    location.reload();
  }

  return (
    <nav className="bg-white relative">
      <div className="max-w-screen-2xl border-gray-200 border-b-4 flex px-10 flex-wrap items-center justify-between mx-auto p-4 w-full bg-primary">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-12" />
          <span className="self-center text-3xl font-extrabold whitespace-nowrap text-white">
            {user ? user.toUpperCase() : "IUST"}
          </span>
            {
              user && 
              <div className='flex items-center justify-center gap-2'>
                 <MdOutlineNotificationsNone fontSize={35} className='text-white hover:text-secondary hover:duration-500' />
                 <FaRegMessage fontSize={25} strokeWidth={20} className='text-white hover:text-secondary hover:duration-500'/>
              </div>
            }
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}>
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default">
          <ul className="font-medium text-xl flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li className="items-center justify-center flex">
              <Link
                to={"/"}
                className="block py-2 px-3 bg-blue-700 rounded md:bg-transparent text-secondary md:p-0 dark:text-white"
                aria-current="page">
                Home
              </Link>
            </li>
            {user == null && (
              <div className="md:flex items-center justify-center">
                <li>
                  <Link
                    to={"/login"}
                    className="block text-center py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white ">
                    Login
                  </Link>
                </li>
              <Toggle style={'justify-center'}/>
              </div>
            )}
            {user && (
              <div className="flex items-center justify-center">
              <li>
                <button
                  onClick={handleLogout}
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white">
                  Logout
                </button>
              </li>
              <Toggle />
              <Sidebar />
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
