import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Input, Menu, Dropdown } from "antd";
import { GoSearch } from "react-icons/go";


export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const menuItems = [
		{ title: "Home", path: "/" },
		{ title: "Tours", path: "/tours" },
		{ title: "About", path: "/about" },
		{ title: "Contact", path: "/contact" },
	];

	const mobileMenu = (
		<Menu>
			{menuItems.map((item, index) => (
				<Menu.Item key={index}>
					<NavLink className="menu-item" to={item.path}>
						{item.title}
					</NavLink>
				</Menu.Item>
			))}
		</Menu>
	);

	return (
		<nav className="navbar container pt-4 flex items-center justify-between">
			<div className="text-2xl text-customBrown font-semibold">
				Kamel Travels
			</div>

			<Dropdown
				visible={isMenuOpen}
				overlay={mobileMenu}
				trigger={["click"]}
				onVisibleChange={(visible) => setIsMenuOpen(visible)}
				className="md:hidden" 
			>
				<button
					className="block md:hidden text-2xl text-customBrown focus:outline-none"
					onClick={toggleMenu}>
					<svg
						className="w-8 h-8"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						{isMenuOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						)}
					</svg>
				</button>
            </Dropdown>
            <div className="hidden md:block w-1/4 ">
                <NavLink className="menu-item" to={"/"}>
                    Home
                </NavLink>
                <NavLink className="menu-item" to={"/tours"}>
                    Tours
                </NavLink>
                <NavLink className="menu-item" to={"/about"}>
                    About
                </NavLink>
                <NavLink className="menu-item" to={"/contact"}>
                    Contact
                </NavLink>
            </div>
            

			<div className="hidden lg:block w-1/4">
				<Input
					suffix={<GoSearch className="text-customBrown" />}
					placeholder="Search..."
					className="bg-transparent outline-none text-white placeholder-white border border-customBrown rounded-md"
				/>
			</div>
		</nav>
	);
}
