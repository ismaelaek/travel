import React from "react";
import { useParams } from "react-router-dom";
import { toursData } from "../features/data";
import Navbar from "./navbar";
import GoogleMapComponent from "./GoogleMap";

export default function TourItem() {
	const { id } = useParams();
	const tour = toursData.find((tour) => tour.id === parseInt(id));
	return (
		<div>
			<Navbar />
			<div>
				<GoogleMapComponent />
			</div>
		</div>
	);
}
