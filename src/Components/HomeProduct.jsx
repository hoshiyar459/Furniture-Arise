import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useNavigation } from "react-router-dom";

const items = [
	{
		image: "https://cdn.easyfrontend.com/pictures/watch-img.png",
		title:
			"JOYLOVE Sofa Chair Nordic Style Single Chair Designer Light Luxury Furniture Beauty",
		price: "US $186.94",
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/chair1.png",
		title:
			"JOYLOVE Sofa Chair Nordic Style Single Chair Designer Light Luxury Furniture Beauty",
		price: "US $154.34",
	},
	{
		image: "https://cdn.easyfrontend.com/pictures/chair2.png",
		title:
			"JOYLOVE Sofa Chair Nordic Style Single Chair Designer Light Luxury Furniture Beauty",
		price: "US $86.11",
	},
];

const CategoryItem = ({ item, index }) => (
	
	<div className="col-span-2 md:col-span-1">
		<a href="#!">
			<div className="bg-white text-black  rounded-md relative p-6">
				<div
					className="absolute top-0 left-8 w-8 h-10 flex justify-center items-center bg-[#3b5d50] text-white"
					style={{
						clipPath: "polygon(100% 0, 100% 100%, 50% 85%, 0 100%, 0 0)",
					}}
				>
					<h4 className="text-2xl mb-1 font-bold">
						{index === 0 ? <FontAwesomeIcon icon={faStar} /> : index + 1}
					</h4>
				</div>
				<div className="flex flex-col md:flex-row gap-6">
					<div className="w-full md:w-1/3">
						<div className="flex items-center justify-center h-full">
							<img
								src={item.image}
								alt=""
								className="max-w-full h-auto rounded-md"
							/>
						</div>
					</div>
					<div className="w-full md:w-2/3">
						<div className="flex flex-col justify-center h-full">
							{index === 0 && (
								<div
									className="h-8 max-w-[200px] text-[12px] bg-[#3b5d50] text-white flex items-center justify-center"
									style={{
										clipPath:
											"polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%, 5% 50%)",
									}}
								>
									<FontAwesomeIcon icon={faStar} className="mr-2" />
									<p className="mb-0">Recommended For You</p>
								</div>
							)}
							<h6 className="text-[15px] mt-2">{item.title}</h6>
							<div className="bg-gray-100 dark:bg-slate-900 flex items-center justify-center w-24 h-8 rounded-[22px] relative my-2">
								<div className="absolute top-1/2 -left-1.5 -translate-y-1/2 h-8 w-8 rounded-full bg-[#3b5d50] text-base text-white flex justify-center items-center">
									<FontAwesomeIcon icon={faShoppingCart} />
								</div>
								<p className="text-[12px] ml-4 text-white">
									<strong>0</strong> adds
								</p>
							</div>
							<h5 className="text-[20px] font-bold mb-2">{item.price}</h5>
							<div className="flex md:justify-end mt-4">
								<a  href="/shop" className="py-2 px-5 text-base leading-none text-white bg-[#3b5d50] hover:bg-opacity-90 rounded-full font-bold" >
									Shop Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</a>
	</div>
);

CategoryItem.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

const HomeProduct= () => {
	  
	return (
		<section className="py-14 md:py-24 bg-white text-zinc-900  relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div
					className="bg-center bg-cover bg-no-repeat text-white rounded-md relative z-10 p-6"
					style={{
						backgroundImage:
							"url(https://cdn.easyfrontend.com/pictures/abstract-bg.jpg)",
					}}
				>
					<div className="absolute top-0 left-0 right-0 bottom-0 bg-[#3e6355] bg-opacity-60 -z-10 rounded-md"></div>
					<div className="grid grid-cols-2 gap-6">
						<div className="col-span-2 md:col-span-1">
							<div className="flex flex-col items-center justify-center text-center h-full lg:px-12">
								<h3 className="text-4xl font-medium mb-4">
									Home furnishings for minimalists - Living Room...
								</h3>
								<h6 className="mb-4 font-bold text-[20px]">Top Picks</h6>
								<span className="px-6 py-1 bg-[#3e6355] text-black dark:text-white rounded-md">
									<h6 className="">
										Ranked by Added to Cart in the last 30 days
									</h6>
								</span>
							</div>
						</div>
						<div className="col-span-2 md:col-span-1">
							<CategoryItem item={items[0]} index={0} />
						</div>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-6 mt-6 lg:mt-12">
					{items.slice(1).map((item, index) => (
						<CategoryItem key={index} item={item} index={index + 1} />
					))}
				</div>
			</div>
		</section>
	);
};
export default HomeProduct