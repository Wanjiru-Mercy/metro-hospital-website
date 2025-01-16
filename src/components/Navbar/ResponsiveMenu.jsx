import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { NavbarMenu } from "../../mockData/data";

const ResponsiveMenu = ({ isOpen }) => {
	return (
		<>
			<AnimatePresence mode="wait">
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0 }}
						className="absolute top-20 left-0 w-full h-screen z-20  "
					>
						<div className="bg-primary text-xl font-semibold text-white py-10 m-6 rounded-3xl">
							<ul className="flex flex-col justify-center items-center gap-4">
								{NavbarMenu.map((item) => {
									return (
										<li key={item.id}>
											<a
												className="inline-block py-1 px-3 hover:text-secondary"
												href={item.link}
											>
												{item.title}
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default ResponsiveMenu;
