import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const ProductDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const Navigate = useNavigate(); 

	// Fetch product data from public/products.json
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch("/products.json");
				const data = await response.json();
				console.log("Fetched Data:", data); // Debugging

				// Find product by ID (fix type mismatch)
				const foundProduct = data.products.find((item) => item.id == id);
				console.log("Matching Product:", foundProduct); // Debugging

				setProduct(foundProduct || null);
			} catch (error) {
				console.error("Error fetching products:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, [id]);

	if (loading) {
		return (
			<div className="text-center py-10">
				<h2 className="text-blue-600 text-xl font-bold">Loading Product...</h2>
			</div>
		);
	}

	if (!product) {
		return (
			<div className="text-center py-10">
				<h2 className="text-red-600 text-xl font-bold">Product Not Found!</h2>
			</div>
		);
	}

	return (
		  
        <>
		 
           <Header></Header>
		<section className="py-14 m-4 my-30 bg-white text-zinc-900 relative border-2 border-green-600">
			<div className="container px-4 mx-auto flex flex-col lg:flex-row gap-6">
				<div className="w-full lg:w-1/3">
					{/* ✅ Directly use product.img instead of ProductPreviews */}
					<div className="bg-gray-100 rounded-xl p-4 text-center">
						<img src={product.img} alt={product.title} className="max-w-full h-auto" />
					</div>
				</div>
				<div className="w-full lg:w-1/2 md:px-8 md:py-5 md:mx-5">
					<h1 className="text-2xl md:text-4xl text-green-700 font-medium mb-4">{product.title}</h1>
					<p className="opacity-70 mb-6 flex items-center ">
						<span>{product.rating}</span>
						<FontAwesomeIcon icon={faStar} className="mx-2 text-yellow-500" />
						{/* ✅ Remove rateCount if not present in JSON */}
						{/* <span>{product.rateCount} Reviews</span> */}
					</p>
					<h3 className="text-2xl text-green-600 font-medium">$ {product.price}</h3>
					<div className="flex gap-4 w-full mt-7">
						<button className="bg-green-600 text-white px-10 py-2.5 rounded uppercase" onClick={()=> {Navigate('/checkout')}}>Buy Now</button>
						<button className="border border-green-600 text-green-600 px-6 py-2.5 rounded uppercase" onClick={() => Navigate(`/cart/${id}`)}>
							Add To Cart
						</button>
					</div>
					<div className="flex items-center gap-4 w-full mt-4">
						<button className="hover:bg-green-600 hover:text-white hover:rounded-3xl text-green-600 px-3 py-2">
							<FontAwesomeIcon icon={faHeart} /> Add to wishlist
						</button>
						<button className="hover:bg-green-600 hover:text-white hover:rounded-3xl text-green-600 px-3 py-2">
							<FontAwesomeIcon icon={faShareAlt} className="mr-1" /> Share
						</button>
					</div>
				</div>
			</div>
		</section>
        <Footer></Footer>
        </>
	);
};

export default ProductDetail;





