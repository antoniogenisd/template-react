import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white border-gray-100 dark:bg-gray-900 fixed w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#">
          <span className="text-white font-bold text-2xl dark:text-white whitespace-nowrap">
            YOUR COMPANY
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center transition-all duration-300 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open Menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="nav-item">
              <NavLink
                to="/"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent 
                md:text-white-100 md:p-0 dark:text-white md:dark:text-white hover:translate-y-[-3px] 
                transition-all ease-in duration-200"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent 
                md:text-white-100 md:p-0 dark:text-white md:dark:text-white hover:translate-y-[-3px] 
                transition-all ease-in duration-200"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent 
                md:text-white-100 md:p-0 dark:text-white md:dark:text-white hover:translate-y-[-3px] 
                transition-all ease-in duration-200"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent 
                md:text-white-100 md:p-0 dark:text-white md:dark:text-white hover:translate-y-[-3px] 
                transition-all ease-in duration-200"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
