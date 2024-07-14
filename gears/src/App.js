import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import SignUp from "./pages/signup/SignUp";
import LogIn from "./pages/login/LogIn";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path='/' element={<Home searchTerm={searchTerm} />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
