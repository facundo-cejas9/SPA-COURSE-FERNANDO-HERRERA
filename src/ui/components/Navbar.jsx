import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/login', {
            replace: true
        })
    }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive === true ? "text-red-500" : "text-white"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dc"
                className={({ isActive }) =>
                  isActive === true ? "text-red-500" : "text-white"
                }
              >
                Dc
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/marvel"
                className={({ isActive }) =>
                  isActive === true ? "text-red-500" : "text-white"
                }
              >
                Marvel
              </NavLink>
            </li>

          </ul>
        </div>
        <div className="flex justify-end items-center gap-6">
          <li className="list-none">
            <span to="/marvel" className="text-blue-500 text-xl" >
              Facundo
            </span>
          </li>

          <button onClick={handleLogout} className="p-1 bg-white text-black rounded-md ">Logout</button>
        </div>
      </div>
    </nav>
  );
};
