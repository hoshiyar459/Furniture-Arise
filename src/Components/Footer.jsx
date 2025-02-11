const Footer = () => {
    return (
      <footer className=" text-gray-800 py-16 mt-10 flex flex-col items-center">
   
  
        <div className="container mx-auto px-6 md:px-12 ">
          <div className="flex justify-between flex-wrap">

            <div className="md:w-[30rem] pb-4">
              <h2 className="font-bold text-2xl text-[#3b5d50]">Arise.</h2>
              <p className="opacity-75 mt-4">
                Be the first to find out about exclusive deals, the latest Lookbooks trends. We're on a mission to build a
                better future where technology.
              </p>
            </div>

            <div>
              <h5 className="font-semibold grid-cols-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#!" className="opacity-75 hover:opacity-100">Home</a></li>
                <li><a href="#!" className="opacity-75 hover:opacity-100">Shop</a></li>
                <li><a href="#!" className="opacity-75 hover:opacity-100">About</a></li>
                <li><a href="#!" className="opacity-75 hover:opacity-100">Contact</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold">Contact Us</h5>
              <ul className="space-y-2">
                <li>Sylhet, Bangladesh</li>
                <li>
                  <a href="mailto:contact@easyfrontend.com" className="opacity-75 hover:opacity-100">
                    contact@easyfrontend.com
                  </a>
                </li>
                <li>
                  <a href="tel:+8801633154215" className="opacity-75 hover:opacity-100">
                    +880 1633-154215
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <hr className="my-6 border-gray-300" />
  
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="opacity-75"> Arise &copy; CopyRight All rights reserved.</p>
            <ul className="flex space-x-4 mt-4 md:mt-0">
              <li><a href="#!" className="opacity-75 hover:opacity-100">Privacy Policy</a></li>
              <li><a href="#!" className="opacity-75 hover:opacity-100">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  