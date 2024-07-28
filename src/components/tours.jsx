import React from "react";
import Navbar from "./navbar";
import { toursData } from "../features/data";
import TourCard from "./tourCard";

export default function Tours() {
	return (
		<main className=" container">
			<Navbar />
			<div className=" mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
				{toursData.map(tour => {
					return (
                        <TourCard key={tour.id} tour={tour} />
                    );
				})}
			</div>
		</main>
	);
}
