import React from 'react'
import logo from "../../assets/logo.png"
import "./Navbar.css"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbar">

        {/* adding logo */}
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>

        {/* adding links */}
        <div className='links'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>

        </div>

        {/* add icons */}
        <div className="icons">
          <sup>2</sup>
          <Link to='/cart'><ShoppingBagOutlinedIcon sx={{ fontSize: "28px" }}/></Link>
        </div>

        {/* adding auth */}
        <div className="authContainer">
          <Link to='/signup'><button className="authButton">Sign Up</button></Link>
          <Link to='/login'><button className="authButton">Log In</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
