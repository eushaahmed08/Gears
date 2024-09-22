import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import { FaSun, FaMoon, FaShoppingCart } from "react-icons/fa";
import "../../styles/Header.css"; // Ensure to create this CSS file for styling

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const [darkMode, setDarkMode] = useState(false);
  const smallGear1Style = {height: "35px", width: "35px",  position: "absolute", top: "10px", left: "95px" };
  const smallGear2Style = {height: "35px", width: "35px",  position: "absolute", top: "70px", left: "95px" };

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${darkMode ? "dark-mode" : ""}`}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            {/* Replace the text with the logo and rotating gears */}
            <Link to="/" className="navbar-brand gear-logo-container">
              <div className="gear-logo-wrapper">
                <img
                  src="/images/logo2.png" // Main gear logo
                  alt="GEARS"
                  className="gear-icon"
                  style={{ height: "65px", width: "65px",position: "relative", top: "10px", left: "30px" }}
                />
                <img
                  src="/images/logo4.png" // Smaller gear 1
                  alt="Small Gear 1"
                  className="small-gear small-gear1"
                  style={smallGear1Style}
                />
                <img
                  src="/images/logo4.png" // Smaller gear 2
                  alt="Small Gear 2"
                  className="small-gear small-gear2"
                  style={smallGear2Style}
                />

              </div>
              <img
                  src="/images/logo6.png" // Smaller gear 2
                  alt="Small Gear 2"
                  //className="small-gear small-gear2"
                  style={{ position: "relative", top: "10px", left: "45px" }}
                />
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput />
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li key={c._id}>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <button
                  className="dark-mode-toggle"
                  onClick={toggleDarkMode}
                  aria-label="Toggle Dark Mode"
                >
                  {darkMode ? <FaSun /> : <FaMoon />}
                </button>
              </li>
              <li className="nav-item cart-icon-container">
                <Badge count={cart?.length} showZero>
                  <NavLink to="/cart" className="nav-link cart-icon">
                    <FaShoppingCart />
                  </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
