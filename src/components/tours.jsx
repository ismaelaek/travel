import React from "react";
import Navbar from "./navbar";
import { toursData } from "../features/data";
import TourItem from "./tourItem";

export default function Tours() {
	return (
		<main>
			<Navbar />
			<div className=" mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
				{toursData.map(tour => {
					return (
                        <TourItem key={tour.id} tour={tour} />
                    );
				})}
			</div>
		</main>
	);
}
