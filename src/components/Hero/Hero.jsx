import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import cohsasa from "../../assets/cohsasa3.png";

const Hero = () => {
	const navigate = useNavigate();
	return (
		<section className="relative z-10 min-h-[500px] flex items-center">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-10">
				{/* Animated Text */}
				<div className="text-center md:text-left space-y-8">
					<motion.h1
						className="text-6xl font-bold text-white leading-tight"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: "easeOut" }}
					>
						Your Partners in{" "}
						<motion.span
							className="text-secondary"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{
								duration: 0.8,
								delay: 0.5,
								type: "spring",
								stiffness: 120,
							}}
						>
							Health
						</motion.span>
					</motion.h1>

					<motion.p
						className="text-lg text-white xl:max-w-[600px] leading-relaxed"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.7 }}
					>
						Providing exceptional healthcare with compassion and
						expertise.
					</motion.p>

					{/* Buttons */}
					<div className="flex justify-center md:justify-start gap-4">
						{/* Explore Our Care Button */}
						<button
							onClick={() => navigate("/services")}
							className="flex items-center gap-3 px-8 py-3 bg-primary text-white text-lg font-medium rounded-full hover:bg-secondary hover:text-primary duration-300"
						>
							Explore Our Care
						</button>

						{/* Emergency Dial Button with Framer Motion */}
						<motion.button
							className="flex items-center gap-3 px-8 py-3 bg-secondary text-white text-lg font-medium rounded-full hover:bg-[#a31519] duration-300"
							whileHover={{ scale: 1.2 }}
						>
							<motion.div
								className="text-xl"
								whileHover={{ rotate: 15 }}
								transition={{ type: "spring", stiffness: 100 }}
							>
								<FaPhoneAlt />
							</motion.div>
							Emergency Dial
						</motion.button>
					</div>
				</div>
			</div>

			{/* COHSASA Accreditation Badge */}
			<div className="absolute right-8 top-1/2 transform -translate-y-1/2    flex items-center justify-center">
				<img
					src={cohsasa}
					alt="COHSASA Accreditation Badge"
					className="h-24  "
				/>
			</div>
		</section>
	);
};

export default Hero;
