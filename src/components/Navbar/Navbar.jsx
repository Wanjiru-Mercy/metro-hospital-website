import React, {useState} from "react";
import { NavbarMenu } from "../../mockData/data";
import ResponsiveMenu from "./ResponsiveMenu";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<nav>
				<div className="container flex justify-between items-center py-1 ">
					{/* Logo section */}
					<div className="flex items-center text-lg font-extrabold gap-2 py-8">
						<img src="/src/assets/metro_logo.svg" className="h-20 mr-2" />
						{/* <p className="text-primary uppercase md:text-primary font-extrabold md:text-2xl text-1xl">Metropolitan Hospital</p> */}
					</div>

					{/* Menu section */}
					<div className="hidden md:block">
						<ul className="flex items-center gap-6 text-secondary font-bold cursor-pointer ">
							{NavbarMenu.map((item) => {
								return (
									<li key={item.id}>
										<a
											className="inline-block py-1 px-3 hover:text-white hover:bg-secondary rounded-full duration-200 font-black "
											href={item.url}
										>
											{item.title}
										</a>
									</li>
								);
							})}
						</ul>
					</div>

					{/* Icons section */}
					<div className="hidden md:flex items-center gap-6">
						<button className="text-white text-2xl font-extrabold hover:bg-secondary hover:text-white rounded-full p-2 duration-200">
							<CiSearch />
						</button>
					</div>

					{/* Hambuger menu section */}

					<div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
						<TiThMenu className="text-3xl text-primary" />
					</div>
				</div>
			</nav>

			{/* Mobile sidebar section */}

            <ResponsiveMenu isOpen={isOpen}/>
		</>
	);
};

export default Navbar;
