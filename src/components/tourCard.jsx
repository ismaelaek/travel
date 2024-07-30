import React from "react";
import { Card } from "antd";
import { motion } from "framer-motion";
import { FaRoute } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function TourCard({ tour }) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/tours/${tour.id}`);
		window.scrollTo(0, 0);
	};
	return (
		<Card className=" shadow-md">
			<div className="h-64 overflow-hidden">
				<img
					src={tour.image}
					alt={tour.name}
					className="w-full h-full object-cover rounded-lg hover:scale-110 ease-in-out duration-500"
				/>
			</div>
			<hr />
			<Link to={`/tours/${tour.id}`} className=" no-underline text-black">
				<h3 className=" hover:text-customBrown hover:underline duration-150">
					{tour.name}
				</h3>
			</Link>
			<div>
				<p className=" text-justify">{tour.description}</p>
				<div className=" flex gap-2 items-center">
					<FaRoute />
					<p className=" m-0 p-0">{tour.route}</p>
				</div>
				<div className=" flex gap-2 items-center">
					<IoTime />
					<p className=" m-0 p-0">{tour.duration}</p>
				</div>
				<div className=" flex justify-end">
					<button
						onClick={handleClick}
						className=" no-underline bg-customBrown text-white px-4 py-2 rounded-lg hover:bg-orange-900 duration-500">
						Read More
					</button>
				</div>
			</div>
		</Card>
	);
}
