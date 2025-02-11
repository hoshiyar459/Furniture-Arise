import React from "react";
import {
	faFacebookF,
	faLinkedinIn,
	faTwitter,
	faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const teamMembers = [
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user18.jpg",
		fullName: "Akshay Kumar",
		designation: "Founder / CEO",
		bio: "The quick brown fox jumps over the lazy dog ",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user11.jpg",
		fullName: "Raima Ray",
		designation: "Business Head",
		bio: "The quick brown fox jumps over the lazy dog ",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user20.jpg",
		fullName: "Arjun Kapur",
		designation: "UI Design",
		bio: "The quick brown fox jumps over the lazy dog ",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/users/user16.jpg",
		fullName: "Alia Bhatt",
		designation: "Marketing Head",
		bio: "The quick brown fox jumps over the lazy dog ",
		socialLinks: [
			{ icon: faFacebookF, href: "#" },
			{ icon: faLinkedinIn, href: "#" },
			{ icon: faTwitter, href: "#" },
			{ icon: faBehance, href: "#" },
		],
	},
];

const TeamMemberItem = ({ member }) => (
	<div className="bg-white shadow-xl  rounded-xl h-full p-2">
		<img
			src={member.picture}
			alt={member.fullName}
			className="w-full h-auto rounded-lg"
		/>
		<div className="px-4 py-6">
			<h4 className="text-2xl font-medium mb-1">{member.fullName}</h4>
			<p className="mb-4 text-sm">{member.designation}</p>
			<p className="opacity-50 mb-0">{member.bio}</p>
			<div className="mt-6">
				{/* {member.socialLinks.map((item, i) => (
					<a
						href={item.href}
						className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
						key={i}
					>
						<FontAwesomeIcon icon={item.icon} />
					</a>
				))} */}
			</div>
		</div>
	</div>
);

TeamMemberItem.propTypes = {
	member: PropTypes.object.isRequired,
};

const OurTeam = () => {
	return (
		<section className="ezy__team4 light py-14 md:py-24 bg-white  text-zinc-900">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center mb-6 md:mb-12">
					<div className="sm:max-w-md text-center">
						<h2 className="text-3xl text-green-600 leading-none font-bold md:text-[45px] mb-4">
							Our Experts Team
						</h2>
				
					</div>
				</div>
				<div className="grid grid-cols-4 gap-6 text-center">
					{teamMembers.map((member, i) => (
						<div className="col-span-4 md:col-span-2 lg:col-span-1" key={i}>
							<TeamMemberItem member={member} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurTeam