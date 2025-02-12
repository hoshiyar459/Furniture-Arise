import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import ChooseUs from '../Components/ChooseUs'
import Blog from '../Components/Blog'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'
import HomeProduct from '../Components/HomeProduct'
import ProductSec from '../Components/ProductsForSale'

function Home() {
  return (
    <div>
        <Header></Header>
        <Hero></Hero>
        <HomeProduct></HomeProduct>
        <ChooseUs></ChooseUs>
        <Testimonial></Testimonial>
        <Blog></Blog>
        <Footer></Footer>

    </div>
  )
}

export default Home