import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { numberOfItemsInCart, totalPrice } from "../features/cart/cartSlice";
import { useAuthContext } from "../context/useAuthContext";
import axios from "axios";
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

  return (
    // <header className="bg-base-100">
    //   <nav className="flex justify-center  w-[90%] max-w-5xl mx-auto">
    //     <div>
    //       <Link
    //         to="/admin/user-management"
    //         className="btn btn-ghost normal-case text-xl">
    //         User Management
    //       </Link>
    //       <Link
    //         to="/admin/order-records"
    //         className="btn btn-ghost normal-case text-xl">
    //         Order Records
    //       </Link>
    //       <Link
    //         to="/admin/product-management"
    //         className="btn btn-ghost normal-case text-xl">
    //         Product Management
    //       </Link>
    //       <a href="#">Logout</a>
    //     </div>
    //   </nav>
    // </header>
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
                <Link to="/about">About</Link>
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
            <Link
              to="/"
              className="cursor-pointer hover:text-accent-focus normal-case font-semibold text-[1rem] hidden md:inline-block">
              Home
            </Link>
            <Link
              to="/about"
              className="cursor-pointer hover:text-accent-focus normal-case font-semibold text-[1rem] hidden md:inline-block">
              About
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
