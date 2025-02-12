import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


import  {CheckCircle} from 'lucide-react';
import { Link } from 'react-router-dom';
function Conformation() {
  return (
    <div>
        <Header></Header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
      <div className="text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. We'll send you an email with your order details.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
        <Footer></Footer>
    </div>
  )
}

export default Conformation