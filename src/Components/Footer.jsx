import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 py-16 mt-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">

          {/* Left Section - Logo & Description */}
          <div className="md:w-1/3">
  <h2 className="font-bold text-2xl text-green-500">Arise.</h2>
  <p className="opacity-75 mt-4">
    Discover stylish and durable furniture for every space. Shop modern designs with quality craftsmanship.
  </p>

  {/* Social Media Icons */}
  <div className="flex space-x-4 mt-4">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebook className="text-gray-800 hover:text-blue-600 text-2xl" />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-gray-800 hover:text-pink-500 text-2xl" />
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter className="text-gray-800 hover:text-blue-400 text-2xl" />
    </a>
    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
      <FaYoutube className="text-gray-800 hover:text-red-600 text-2xl" />
    </a>
  </div>
</div>

          {/* Center Section - Quick Links */}
          <div className="md:w-1/3 text-center ">
            <h5 className="font-semibold">Quick Links</h5>
            <ul className="space-y-2 mt-4  ">
              <li><Link to="/" className="opacity-75 hover:opacity-100">Home</Link></li>
              <li><Link to="/shop" className="opacity-75 hover:opacity-100">Shop</Link></li>
              <li><Link to="/about" className="opacity-75 hover:opacity-100">About</Link></li>
              <li><Link to="/contact" className="opacity-75 hover:opacity-100">Contact</Link></li>
            </ul>
          </div>

          {/* Right Section - Addresses */}
          <div className="md:w-1/3 text-right">
  <h5 className="font-semibold">Address</h5>
  <ul className="space-y-2 mt-4">
    <li>
      404 K St, Anchorage, Alaska, 99501, USA <br /> 📞 (907) 222-5101
    </li>
    <li>
      36 Argyll St, Lochgilphead, Argyll and Bute, PA31 8NE <br /> 📞 01546 602353
    </li>
    <li>
      45-47 Rawson St, Sydney, 2121, Australia <br /> 📞 (02) 9876 4357
    </li>
    <li>
      ✉️ <a href="mailto:customer@arise.com" className="opacity-75 hover:opacity-100">
        customer@arise.com
      </a>
    </li>
  </ul>
</div>

        </div>

        <hr className="my-6 border-gray-300" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="opacity-75">Arise &copy; {new Date().getFullYear()} All rights reserved.</p>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li><Link to="/policy" className="opacity-75 hover:opacity-100">Privacy Policy</Link></li>
            <li><Link to="/terms" className="opacity-75 hover:opacity-100">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
