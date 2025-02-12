import React, { useState, useEffect } from "react"; // ✅ Added missing imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Product Item Component
const ProductItem = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="block">
            <div className="bg-gray-100 border dark:border-none rounded-md relative p-2 h-full">
                <div className="absolute top-4 right-4 z-20 text-base p-4 rounded-full flex justify-center items-center hover:text-green-600 hover:bg-gray-100 bg-green-600 text-white">
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="p-4 lg:p-6">
                    <div className="min-h-[210px] flex justify-center items-center h-full px-6">
                        <img src={product.img} alt={product.title} className="max-h-[200px] max-w-full w-auto" />
                    </div>
                </div>
                <div className="p-4 lg:p-6 h-full pt-0 text-start">
                    <h5 className="text-black text-base leading-5 font-medium">{product.title}</h5>
                    <h5 className="text-green-600 text-base font-medium leading-none my-2">${product.price}</h5>
                    <div className="flex justify-between items-center">
                        <h5 className="font-medium">
                            <span className="text-yellow-500 mr-1">
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            {product.rating}
                        </h5>
                        <FontAwesomeIcon icon={faShoppingCart} className="text-green-600 hover:text-green-700" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
};

// Product Section Component
const ProductsForSale = () => {
    const [products, setProducts] = useState([]); // ✅ Fixed missing useState import

    useEffect(() => {
        fetch("/products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error("Error fetching data:", error));
    }, []); // ✅ Fixed missing useEffect import

    return (
        <section className="ezy__epgrid1 light py-14 md:py-24 bg-white text-zinc-900 relative overflow-hidden z-10">
            <div className="container px-4 mx-auto">
                <h2 className="text-2xl font-bold leading-none md:text-[40px] text-center mb-2 text-green-700 underline">
                    Our Products
                </h2>
                <div className="grid grid-cols-12 gap-6 text-center mt-12">
                    {products.map((product) => (
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 px-2 my-2" key={product.id}>
                            <ProductItem product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsForSale;
