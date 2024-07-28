import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Animation variants
const textContainerVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 1 } },
};

const letterVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeInUpVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeInVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 1.5 } },
};

export default function Home() {
	const [displayedText, setDisplayedText] = useState("");

	const fullText = "Morocco Awaits: Your Gateway to a Thousand Adventures";

	useEffect(() => {
		let index = 0;
		const intervalId = setInterval(() => {
			setDisplayedText(fullText.slice(0, index + 1));
			index += 1;
			if (index >= fullText.length) clearInterval(intervalId);
		}, 20); 

		return () => clearInterval(intervalId);
	}, []);

	return (
		<main className="home">
			<Navbar />
			<motion.div
				className="grid grid-cols-1 md:grid-cols-2 home-main container mt-16"
				initial="hidden"
				animate="visible"
				variants={fadeInVariants}>
				<div className="flex flex-col justify-end sm:text-center">
					<motion.div
						className="flex gap-3 text-2xl md:text-3xl"
						initial="hidden"
						animate="visible"
						variants={fadeInUpVariants}
						transition={{ delay: 0.5 }}>
						<Link className="social-media" to={"/"}>
							<FaFacebookSquare />
						</Link>
						<Link className="social-media" to={"/"}>
							<FaInstagram />
						</Link>
						<Link className="social-media" to={"/"}>
							<FaXTwitter />
						</Link>
					</motion.div>
				</div>
				<div className="md:text-left">
					<motion.div
						className="text-customBrown text-4xl md:text-5xl font-semibold leading-tight h-28"
						initial="hidden"
						animate="visible"
						variants={textContainerVariants}>
						{displayedText.split("").map((char, index) => (
							<motion.span
								key={index}
								variants={letterVariants}
								style={{ display: "inline-block" }}
								transition={{ delay: index * 0.05 }}>
								{char === " " ? "\u00A0" : char}{" "}
							</motion.span>
						))}
					</motion.div>
					<motion.p
						className="paragraph text-white mt-8 md:mt-16 text-base md:text-xl text-justify"
						initial="hidden"
						animate="visible"
						variants={fadeInUpVariants}
						transition={{ delay: 1 }}>
						Discover Morocco, where ancient traditions meet modern marvels.
						Explore bustling souks, intricate architecture, and flavorful
						cuisine. From the Sahara Desert to vibrant Marrakech, every corner
						offers a unique adventure. Whether seeking discovery or tranquility,
						Morocco promises an unforgettable journey into timeless charm.
					</motion.p>
					<motion.div
						className="flex justify-between text-white text-justify text-lg mt-8"
						initial="hidden"
						animate="visible"
						variants={fadeInUpVariants}
						transition={{ delay: 1.5 }}>
						<p>
							<span className="text-2xl md:text-4xl font-semibold">+50</span>{" "}
							<br /> destinations.
						</p>
						<p>
							<span className="text-2xl md:text-4xl font-semibold">+30</span>{" "}
							<br /> Journey/Month.
						</p>
						<p>
							<span className="text-2xl md:text-4xl font-semibold">+100K</span>{" "}
							<br /> Customers.
						</p>
					</motion.div>
				</div>
			</motion.div>
		</main>
	);
}
