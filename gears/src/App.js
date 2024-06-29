import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'; // Ensure the import statement matches the file name
import {Routes , Route} from "react-router-dom"
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import SignUp from "./pages/signup/SignUp";
import LogIn from "./pages/login/LogIn";




const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/about'element={<About/>}></Route>
        <Route path='/blog'element={<Blog/>}></Route>
        <Route path='/shop'element={<Shop/>}></Route>
        <Route path='/contact'element={<Contact/>}></Route>
        <Route path='/cart'element={<Cart/>}></Route>
        <Route path='/login'element={<LogIn/>}></Route>
        <Route path='/signup'element={<SignUp/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
