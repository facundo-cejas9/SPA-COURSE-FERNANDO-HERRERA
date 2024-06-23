import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

export const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  
  };

  const searchHero = () => {
    onSearch(search);
    setSearch('')
    
  }

  const navigate = useNavigate();
  const location = useLocation();

   // Efecto para limpiar search cuando se cambia de ruta
   useEffect(() => {
    if (location.pathname === '/marvel' || location.pathname === '/dc') {
      setSearch(''); // Resetear el término de búsqueda
       // Resetear el término de búsqueda
    }
  }, [location.pathname, onSearch]);

  const isMarvelOrDcPage = location.pathname === '/marvel' || location.pathname === '/dc' || location.pathname === '/';

  const handleLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap justify-between gap-24 mx-auto p-4">
        <div className="flex items-center " id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive === true ? "text-red-500" : "text-white"
                }
                aria-current="page"
                onClick={() => onSearch('')}
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
                onClick={() => onSearch('')}
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
                onClick={() => onSearch('')}
              >
                Marvel
              </NavLink>
            </li>
          </ul>
          </div>

          {isMarvelOrDcPage && (
            <div className="relative flex items-center">
            <input
              className="pl-10 pr-3 py-2 border rounded-md"
              placeholder="Search your hero.."
              onChange={handleChange}
              value={search}
            />
            <img
              className="absolute left-48 w-5 h-5 cursor-pointer"
              src="./assets/search.png"
              onClick={searchHero}
            />
          </div>
          )}
        
        <div className="flex justify-end items-center gap-6">
          <li className="list-none">
            <span to="/marvel" className="text-blue-500 text-xl">
              Facundo
            </span>
          </li>

          <button
            onClick={handleLogout}
            className="p-1 bg-white text-black rounded-md "
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
