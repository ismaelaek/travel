import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
	return (
		<main className="home">
			<Navbar />
			<div className="grid grid-cols-1 md:grid-cols-2 home-main container mt-16">
				<div className="flex flex-col justify-end sm:text-center">
					<div className="flex gap-3 text-2xl md:text-3xl">
						<Link className="social-media" to={"/"}>
							<FaFacebookSquare />
						</Link>
						<Link className="social-media" to={"/"}>
							<FaInstagram />
						</Link>
						<Link className="social-media" to={"/"}>
							<FaXTwitter />
						</Link>
					</div>
				</div>
				<div className="md:text-left">
					<h1 className="text-customBrown text-4xl md:text-5xl font-semibold leading-tight">
						Morocco Awaits: Your Gateway to a{" "}
						<span className="underline text-white font-semibold">
							Thousand Adventures
						</span>
					</h1>
					<p className="paragraph text-white mt-8 md:mt-16 text-base md:text-xl text-justify">
						Discover Morocco, where ancient traditions meet modern marvels.
						Explore bustling souks, intricate architecture, and flavorful
						cuisine. From the Sahara Desert to vibrant Marrakech, every corner
						offers a unique adventure. Whether seeking discovery or tranquility,
						Morocco promises an unforgettable journey into timeless charm.
					</p>
					<div className="flex justify-between text-white text-justify text-lg mt-8">
						<p>
							<span className="text-2xl md:text-4xl font-semibold">+50</span>{" "}
							<br /> destinations.
						</p>
						<p>
							<span className="text-2xl md:text-4xl font-semibold">+30</span>{" "}
							<br /> Journeys/Month.
						</p>
						<p>
							<span className="text-2xl md:text-4xl font-semibold">+100K</span>{" "}
							<br /> Customers.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
