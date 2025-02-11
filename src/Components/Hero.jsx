import React, { useState } from "react";



const Hero = (props) => {
    const [title, settitle] = useState("Modern Interior Design Studio")
	return (
		<header className="ezy__header1 light py-14 md:py-24 bg-[#3b5d50] text-[white] relative overflow-hidden">
			<div className="container px-8 relative">
				<div className="grid grid-cols-12  ">
					<div className="col-span-12 lg:col-span-6 xl:px-12 text-center lg:text-start">
						<div className="flex flex-col justify-center h-full">
							<h2 className="text-3xl leading-none md:text-6xl font-bold mb-6">
                           {title}
							</h2>
							<p className="text-[18px] leading-normal opacity-80 mb-12">
                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
							</p>
							<div>
								<a href="#!" className="text-lg py-3 px-5  bg-[#f9bf29] text-black shadow rounded-4xl mr-3">Shop Now</a>
                                <a href="#!" className="text-lg py-3 px-7  bg-[#3b5d50] shadow rounded-3xl border-white border-1">Explore</a>
							</div>
						</div>
					</div>

					<div className="col-span-12 lg:col-span-6 mt-12 lg:mt-0 ">  
						<img
							src="./hero.png" alt="" className="rounded max-w-full h-auto mt-4"/>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Hero  ;
