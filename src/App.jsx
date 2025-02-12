import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import {  Routes, Route } from "react-router";
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import ProductDetail from './Pages/ProductDetail';
import Terms from './Pages/Terms';
import Policy from './Pages/Policy';
import Conformation from './Pages/Conformation';


function App() {
  return (
    <div>
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/shop" element={<Shop />} />
         <Route path="/cart/:id" element={<Cart />} />
         <Route path='/product/:id' element={<ProductDetail/>}></Route>
         <Route path="/checkout" element={<Checkout />} />
         <Route path="/terms" element={<Terms></Terms>}/>
         <Route path="/policy" element={<Policy></Policy>}/>
         <Route path="/conform" element={<Conformation/>}/>
         </Routes>
  
    </div>
  )
}

export default App