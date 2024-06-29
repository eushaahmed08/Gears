import React from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.search.value;
    onSearch(searchTerm);
  };

  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="links">
          <Link to="/" className="navLink">Home</Link>
          <Link to="/about" className="navLink">About</Link>
          <Link to="/blog" className="navLink">Blog</Link>
          <Link to="/shop" className="navLink">Shop</Link>
          <Link to="/contact" className="navLink">Contact</Link>
        </div>

        <div className="search">
          <form onSubmit={handleSearch} className="searchForm">
            <input
              type="text"
              placeholder="Search products..."
              name="search"
              className="searchInput"
            />
            <button type="submit" className="searchButton">
              <SearchIcon />
            </button>
          </form>
        </div>

        <div className="icons">
          <sup>2</sup>
          <Link to="/cart" className="navLink">
            <ShoppingBagOutlinedIcon sx={{ fontSize: "28px" }} />
          </Link>
        </div>

        <div className="authContainer">
          <Link to="/signup">
            <button className="authButton">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="authButton">Log In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
