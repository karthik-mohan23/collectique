import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { numberOfItemsInCart, totalPrice } from "../features/cart/cartSlice";
import { useAuthContext } from "../context/useAuthContext";
import axios from "axios";

// themes object
const themes = {
  dark: "forest",
  light: "cupcake",
};

// get theme from local storage when component mounts
const getThemeFromLocalStorage = () => {
  // if theme is not present in local storage - use themes.dark
  //   else - use get it from local storage
  return localStorage.getItem("theme") || themes.dark;
};

const Navbar = () => {
  const cartLength = useSelector(numberOfItemsInCart);
  const amountToPay = useSelector(totalPrice);

  const { user, setUser } = useAuthContext();

  const handleLogout = () => {
    axios.post("/api/users/logout");
    setUser(localStorage.removeItem("userDetails"));
  };

  useEffect(() => {
    handleLogout;
  }, [handleLogout]);

  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const handleTheme = () => {
    const { dark, light } = themes;
    const newTheme = theme === dark ? light : dark;
    setTheme(newTheme);
  };

  useEffect(() => {
    // set data-theme attribute to root element
    document.documentElement.setAttribute("data-theme", theme);
    // save theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className=" bg-base-100 drop-shadow-md">
      <div className="navbar w-[90%] max-w-5xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Collectique
          </Link>
          {/* Admin Dashboard */}
          {user?.isAdmin && (
            <div className="dropdown">
              <label tabIndex={0} className="btn m-1">
                Admin
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/admin/admin-dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/admin/active-users">Active users</Link>
                </li>
                <li>
                  <Link to="/admin/admin-users">Admin users</Link>
                </li>

                <li>
                  <Link to="/admin/order-records">Orders</Link>
                </li>
                <li>
                  <Link to="/admin/product-management">Products</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="navbar-center">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex gap-4">
            {/* Theme switch */}
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" onChange={handleTheme} />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            <Link
              to="/"
              className="cursor-pointer hover:text-accent-focus normal-case font-semibold text-[1rem] hidden md:inline-block">
              Home
            </Link>
            <Link
              to="/products"
              className="cursor-pointer hover:text-accent-focus normal-case font-semibold text-[1rem] hidden md:inline-block">
              Products
            </Link>
            {/* My orders */}
            {!user?.isAdmin && user?._id ? (
              <Link
                to="/my-orders"
                className="cursor-pointer hover:text-accent-focus normal-case font-semibold text-[1rem] hidden md:inline-block">
                Order
              </Link>
            ) : null}
          </div>
          {/* Login */}
          {user?.name ? (
            <a
              to="#"
              className=" normal-case text-[1rem] text-secondary font-medium mx-3">
              {user?.name}
            </a>
          ) : (
            <Link
              to="/login"
              className="btn btn-ghost normal-case text-[1rem] mx-3">
              Login
            </Link>
          )}
          {/* Logout */}
          {user?.name && (
            <a
              onClick={handleLogout}
              className="cursor-pointer hover:text-accent-focus normal-case font-semibold text-[1rem]">
              Logout
            </a>
          )}

          {/* Cart */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartLength}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">{cartLength} Items</span>
                <span className="text-info">Subtotal : ₹ {amountToPay}</span>
                <div className="card-actions">
                  <Link to="/cart" className="btn btn-primary btn-block">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
