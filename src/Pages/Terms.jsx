import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const faqList = [
	{
		isActive: true,
		question: "What is our return policy?",
		answer:
			"We accept returns within 30 days of delivery. The item must be in its original condition, and return shipping fees may apply. Customized furniture is non-returnable.",
	},
	{
		isActive: false,
		question: "Do we offer free shipping?",
		answer:
			"Yes, we offer free shipping on all orders above $500. Standard delivery takes 5-7 business days, while expedited shipping is available at an additional cost.",
	},
	{
		isActive: false,
		question: "How does the warranty work?",
		answer:
			"All our furniture comes with a 1-year warranty covering manufacturing defects. This does not cover normal wear and tear, accidental damage, or improper use.",
	},
	{
		isActive: false,
		question: "Can I customize my furniture?",
		answer:
			"Yes, we offer customization on select products. You can choose fabric, finish, and dimensions. Please note that custom orders require additional processing time and cannot be returned.",
	},
	{
		isActive: false,
		question: "What payment methods do we accept?",
		answer:
			"We accept all major credit cards, PayPal, and financing options through select providers. Payments must be completed before processing the order.",
	},
];

const FaqItem = ({ faq }) => {
	const [isOpen, setIsOpen] = useState(faq.isActive);

	const toggleFaq = () => setIsOpen(!isOpen);

	return (
		<div className={`${isOpen && "active"} rounded-lg mt-6 b-2 border-2`}>
			<a
				href="#!"
				className="btn p-4 lg:p-6 w-full text-start flex justify-between items-center cursor-pointer"
				onClick={toggleFaq}
			>
				<span>{faq.question}</span>
				<FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
			</a>
			<div
				className={`${
					isOpen ? "block" : "hidden"
				} p-4 lg:p-6 bg-white shadow dark:shadow-none  rounded-xl`}
			>
				<p className="opacity-50 text-black">{faq.answer}</p>
			</div>
		</div>
	);
};

FaqItem.propTypes = {
	faq: PropTypes.object.isRequired,
};

const Terms = () => {
	return (
        <>
         <Header></Header>
		<section className="ezy__faq4 light py-14 md:py-24 mt-8 bg-white text-zinc-900 flex items-center justify-center ">
			<div className="container px-16 md:px-8 lg:px-28">
				<div className="grid grid-cols-12 justify-center md:mb-6">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-12 text-center">
						<h2 className="font-bold text-[25px] md:text-[45px] leading-none mb-4">
						Terms & Condition 
						</h2>
						<p className="">
							Find answers to common questions about our furniture, shipping, returns, and customization options.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-0 md:gap-6">
					<div className="col-span-12 md:col-span-8 md:col-start-3">
						{faqList.slice(0, 5).map((faq, i) => (
							<FaqItem faq={faq} key={i} />
						))}
					</div>
				</div>
			</div>
		</section>
        <Footer></Footer>
        </>
	);
};

export default Terms;
