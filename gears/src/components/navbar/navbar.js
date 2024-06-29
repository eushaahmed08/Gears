import React from 'react'
import logo from "../../assets/logo.png"
import "./Navbar.css"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const navbar = () => {
  return (
    <>
    <div className="navbarContainer">
        <div className="navbar">

            {/* adding logo */}

            <div className="logo">
                <img src={logo} alt=""/>
            </div>


            {/* adding links */}

            <div className='links'>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Blog</a>
                <a href="/">Shop</a>
                <a href="/">Contact</a>
            </div>


            {/* add icons */}
            <div className="icons">
                <ShoppingBagOutlinedIcon/>

            </div>


            {/* adding auth */}
            <div className="authButtons">
                <button>Sign Up</button>
                <button>Log in</button>

            </div>


            
        </div>
    </div>

      
    </>
  )
}

export default navbar
