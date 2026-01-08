import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../contextApi/ContextApi";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  };

  return (
    <div className="h-16 sticky top-0 z-50 bg-custom-gradient shadow-[var(--shadow-custom)] backdrop-blur-md">
      <div className="lg:px-14 sm:px-8 px-4 w-full h-full flex justify-between items-center">

        {/* LOGO */}
        <Link to="/">
          <h1 className="font-montserrat font-bold text-3xl text-white italic tracking-wide">
            Minilink
          </h1>
        </Link>

        {/* LINKS */}
        <ul
          className={`flex sm:gap-10 gap-6 sm:items-center sm:static absolute left-0 top-[64px]
          sm:shadow-none shadow-[var(--shadow-card)]
          ${navbarOpen ? "h-fit sm:pb-0 pb-6" : "h-0 overflow-hidden"}
          transition-all duration-300 ease-in-out
          sm:h-fit bg-custom-gradient sm:bg-none sm:flex-row flex-col
          w-full sm:w-auto px-6 sm:px-0`}
        >
          {/* HOME */}
          <li className="relative group">
            <Link
              to="/"
              className={`font-medium tracking-wide transition-colors duration-200
              ${path === "/" ? "text-white" : "text-[var(--color-text-secondary)]"}
              hover:text-white`}
            >
              Home
            </Link>
            {path === "/" && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--color-accent)] rounded-full" />
            )}
          </li>

          {/* ABOUT */}
          <li className="relative group">
            <Link
              to="/about"
              className={`font-medium tracking-wide transition-colors duration-200
              ${path === "/about" ? "text-white" : "text-[var(--color-text-secondary)]"}
              hover:text-white`}
            >
              About
            </Link>
            {path === "/about" && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--color-accent)] rounded-full" />
            )}
          </li>

          {/* DASHBOARD */}
          {token && (
            <li className="relative group">
              <Link
                to="/dashboard"
                className={`font-medium tracking-wide transition-colors duration-200
                ${path === "/dashboard" ? "text-white" : "text-[var(--color-text-secondary)]"}
                hover:text-white`}
              >
                Dashboard
              </Link>
              {path === "/dashboard" && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--color-accent)] rounded-full" />
              )}
            </li>
          )}

          {/* SIGN UP */}
          {!token && (
            <Link to="/register">
              <li className="bg-[var(--color-accent)] text-white font-semibold px-4 py-2 rounded-md
              hover:bg-[var(--color-accent-hover)] transition-all duration-200
              shadow-[var(--shadow-hover)] text-center">
                Sign Up
              </li>
            </Link>
          )}

          {/* LOG OUT */}
          {token && (
  <button
    onClick={onLogOutHandler}
    className="bg-red-600 text-white font-semibold px-4 py-2 rounded-md
    hover:bg-red-700 transition-all duration-200
    shadow-[0_6px_20px_rgba(239,68,68,0.35)]"
  >
    Log Out
  </button>
)}

        </ul>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden text-white text-3xl"
        >
          {navbarOpen ? <RxCross2 /> : <IoIosMenu />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
