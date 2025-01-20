import React from "react";
import { motion } from "framer-motion";
import doctorIllustration from "../../assets/our_doctors.png";
import locationIllustration from "../../assets/location.jpg";
import appointmentIllustration from "../../assets/appointment.jpg";

const Highlights = () => {
	const cards = [
		
		{
			title: "Our Location",
			description:
				"Find us at our state-of-the-art facility equipped with modern amenities.",
			illustration: locationIllustration,
			buttonLabel: "View Location",
			link: "/location",
		},
        {
			title: "Our Doctors",
			description:
				"Meet our team of highly skilled and compassionate healthcare professionals.",
			illustration: doctorIllustration,
			buttonLabel: "View Doctors",
			link: "/doctors",
		},
		{
			title: "Appointments",
			description:
				"Book an appointment with ease and at your convenience, anytime.",
			illustration: appointmentIllustration,
			buttonLabel: "Book Now",
			link: "/appointments",
		},
	];

	return (
		<section className="bg-gradient-to-b from-[#f3f8ff] to-white py-16">
			<div className="container mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{cards.map((card, index) => (
						<motion.div
							key={index}
							className={`${
								index === 1
									? "bg-primary text-white"
									: "bg-white text-gray-600"
							} shadow-xl rounded-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300`}
							whileHover={{ scale: 1.05 }}
						>
							<img
								src={card.illustration}
								alt={card.title}
								className="w-36 h-36 mb-6 rounded-full"
							/>
							<h3
								className={`text-2xl font-semibold mb-4 ${
									index === 1 ? "text-white" : "text-primary"
								}`}
							>
								{card.title}
							</h3>
							<p className="mb-6">
								{card.description}
							</p>
							<a
								href={card.link}
								className={`px-6 py-3 rounded-full font-medium transition duration-300 ${
									index === 1
										? "bg-white text-primary hover:bg-gray-200"
										: "bg-secondary text-white hover:bg-[#a31519]"
								}`}
							>
								{card.buttonLabel}
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Highlights;
