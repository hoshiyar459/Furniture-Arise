import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import {  Routes, Route } from "react-router";
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';


function App() {
  return (
    <div>
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/shop" element={<Shop />} />
         <Route path="/cart" element={<Cart />} />
         </Routes>
  
    </div>
  )
}

export default App