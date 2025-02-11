import React from "react";

const AboutHeroSec2 = () => {
	return (
		<section className="ezy__comingsoon1 light py-14 md:py-24 bg-white  text-zinc-900 flex justify-center ">
			<div className="container px-4">
				<div className="grid grid-cols-12 justify-center gap-6">
					<div className="col-span-12 lg:col-span-5 flex flex-col justify-center text-center lg:text-start">
						<h2 className="font-bold text-[32px] leading-none md:text-[45px] mb-6 text-green-600">
							About Us
						</h2>
						<p className="text-lg opacity-80 mb-2">
                        Welcome to Arise, where craftsmanship meets comfort. We design and deliver premium-quality furniture that blends style, durability, and functionality. Transform your space with our exquisite collections tailored for modern living.
						</p>
					</div>
					<div className="col-span-12 lg:col-span-7">
						<img
							src="https://cdn.easyfrontend.com/pictures/comingsoon/one.png"
							alt=""
							className="h-auto max-w-full"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutHeroSec2