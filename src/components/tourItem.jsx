import React from "react";
import { useParams } from "react-router-dom";
import { toursData } from "../features/data";
import Navbar from "./navbar";

export default function TourItem() {
	const { id } = useParams();
	const tour = toursData.find((tour) => tour.id === parseInt(id));
	return (
		<div>
			<Navbar />
			<div className=" container">
				<h1>{tour.name}</h1>
				<p>{tour.description}</p>
				<p
					className="
            text-customBrown font-semibold text-lg md:text-xl tracking-widest leading-snug md:leading-normal transition duration-300 hover:text-customBlue transform scale-110 hover:-translate-y-1
            ">
					still in progress
				</p>
			</div>
		</div>
	);
}
