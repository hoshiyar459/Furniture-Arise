import React from "react";

const portfolioList = [
	{
		image: "https://untree.co/demos/furni/images/post-1.jpg",
		title: "First Time Home Owner Ideas",
		description:
			"by Kristin Watson on Dec 19, 2024"
	},
	{
		image: "https://untree.co/demos/furni/images/post-2.jpg",
		title: "How To Keep Your Furniture Clean",
		description:"by Robert Fox on Dec 15, 2023"
	},
	{
		image: "https://untree.co/demos/furni/images/post-3.jpg",
		title: "Small Space Furniture Apartment Ideas",
		description:
			"by Kristin Watson on Dec 12, 2021",
	},
];

const Blog = () => {
	return (
		<section className="ezy__portfolio6 light py-14 md:py-24 md:pb-10  text-zinc-900  flex items-center justify-center">
			<div className="container px-4 flex justify-center flex-col ">
				<div className="flex justify-between items-center mb-5">
						<h2 className="text-3xl leading-none md:text-[30px] font-bold pl-4" >
                        Recent Blog
						</h2>
                        <p className="mb-2 underline">View All Post</p>
				</div>
				<div className="grid grid-cols-12 gap-6">
					{portfolioList.map((portfolio, i) => (
						<div className="col-span-12 md:col-span-6 lg:col-span-4" key={i}>
							<div className="bg-white  h-full rounded-[20px] flex flex-col">
								<img
									src={portfolio.image}
									alt={portfolio.title}
									className="max-w-full h-auto w-full rounded-[20px]"
								/>
								<div className="flex flex-col grow p-6 lg:p-12">
									<div className="grow">
										<h4 className="text-2xl font-medium mb-4">
											{portfolio.title}
										</h4>
										<p className="opacity-50 mb-0">{portfolio.description}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blog