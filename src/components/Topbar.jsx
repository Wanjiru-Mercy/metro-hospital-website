import React, { useState, useEffect } from "react";
import {
	FacebookOutlined,
	TwitterOutlined,
	InstagramOutlined,
	LinkedinOutlined,
	EnvironmentOutlined,
	ClockCircleOutlined,
	CalendarOutlined,
} from "@ant-design/icons";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const Topbar = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const handleThemeToggle = () => {
		setIsDarkMode((prevMode) => !prevMode);
		document.documentElement.classList.toggle("dark", !isDarkMode);
	};

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setIsDarkMode(savedTheme === "dark");
			document.documentElement.classList.toggle(
				"dark",
				savedTheme === "dark"
			);
		} else {
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			setIsDarkMode(prefersDark);
			// document.documentElement.classList.toggle("dark", prefersDark);
            document.documentElement.classList.toggle(
  'dark',
  localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
)
			localStorage.setItem("theme", prefersDark ? "dark" : "light");
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("theme", isDarkMode ? "dark" : "light");
	}, [isDarkMode]);

	return (
		<div className="hidden md:block bg-primary text-white text-sm  w-full z-50 top-0 start-0 border-b border-white font-sans">
			<div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-1 space-x-4">
				{/* Left Section - Info */}
				<div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6">
					{/* Location */}
					<div className="flex items-center space-x-1 text-white">
						<EnvironmentOutlined className=" text-[#c5171d]" />
						<span>Rabai Road, Buruburu, Nairobi</span>
					</div>
					{/* Opening Time */}
					<div className="flex items-center space-x-1 text-white">
						<ClockCircleOutlined className=" text-[#c5171d]" />
						<span>Open: Mon - Sun 24hrs</span>
					</div>
					{/* Visiting Hours */}
					<div className="flex items-center space-x-1 text-white">
						<CalendarOutlined className=" text-[#c5171d]" />
						<span>
							Visiting Hours: Mon - Sun 12:30PM - 2:00PM, 4:30PM -
							8:00PM
						</span>
					</div>
				</div>

				{/* Right Section - Social Icons, Dark Mode Toggle & Button */}
				<div className="flex items-center space-x-4">
					{/* Social Icons */}
					<div className="flex space-x-3">
						<FaFacebook className="cursor-pointer text-white hover:text-[#c5171d] transition-colors" />
						<BsTwitterX className="cursor-pointer text-white hover:text-[#c5171d] transition-colors" />
						<FaLinkedin className="cursor-pointer text-white hover:text-[#c5171d] transition-colors" />
						<FaYoutube className="cursor-pointer text-white hover:text-[#c5171d] transition-colors" />
						<RiInstagramFill className="cursor-pointer text-white hover:text-[#c5171d] transition-colors" />
					</div>

					{/* Dark Mode Toggle */}
					<button
						onClick={handleThemeToggle}
						className="text-xl p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-500 transition"
						title="Toggle Theme"
						aria-label={
							isDarkMode
								? "Switch to Light Mode"
								: "Switch to Dark Mode"
						}
					>
						{isDarkMode ? (
							<SunOutlined className="text-[#ed1c24]" />
						) : (
							<MoonOutlined className="text-[#ed1c24]" />
						)}
					</button>

					{/* Book Appointment Button */}
					<button className="bg-[#ed1c24] hover:bg-[#c5171d] text-white px-4 py-2 text-sm font-medium rounded shadow transition-transform transform hover:scale-105">
						Book Appointment
					</button>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
