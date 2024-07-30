import React from "react";
import { useParams } from "react-router-dom";
import { toursData } from "../features/data";
import Navbar from "./navbar";
import { IoCheckmarkOutline } from "react-icons/io5";
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { siteCoordinates } from "../features/data";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
	iconRetinaUrl:
		"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
	shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export default function TourItem() {
	const { id } = useParams();
	const tour = toursData.find((tour) => tour.id === parseInt(id));
	const routeCoordinates = tour.sites
		.map((site) => siteCoordinates[site])
		.filter(Boolean);

	return (
		<div>
			<Navbar />
			<div className="container mt-10">
				<h1 className="text-center">{tour.name}</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<img src={tour.image} alt="" width="100%" />
					<div className="flex h-full items-center text-justify justify-center">
						<p>{tour.description}</p>
					</div>
				</div>
			</div>
			<div className="container">
				<h2 className="text-center mt-10">Route Details</h2>
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="text-xl flex flex-col justify-center">
						<div className=" md:flex md:gap-2 md:items-center">
							<p className="text-gray-600">Route:</p>
							<p>{tour.route}</p>
						</div>
						<div className="flex gap-2 items-center">
							<p className="text-gray-600">Duration:</p>
							<p>{tour.duration}</p>
						</div>
						<div className="flex gap-2 items-center">
							<p className="text-gray-600">Price:</p>
							<p>{tour.price} per person</p>
						</div>
					</div>
					<MapContainer
						center={[31.7917, -7.0926]}
						zoom={6}
						style={{ height: "500px", width: "100%" }}>
						<TileLayer
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						/>
						{tour.sites.map((site, index) =>
							siteCoordinates[site] ? (
								<Marker key={index} position={siteCoordinates[site]}>
									<Popup>{site}</Popup>
								</Marker>
							) : null
						)}
						{routeCoordinates.length > 1 && (
							<Polyline positions={routeCoordinates} color="red" weight={7} />
						)}
					</MapContainer>
				</div>
			</div>
			<div className="container mt-5">
				<h2 className="text-center">Itinerary</h2>
				<div>
					{tour.itinerary.map((item, index) => {
						return (
							<div key={index}>
								<h3>Day {item.day}</h3>
								<p>{item.description}</p>
								<h6>Activities :</h6>
								<ul>
									{item.activities.map((activity, activityIndex) => (
										<li key={activityIndex}>{activity}</li>
									))}
								</ul>
								<hr />
							</div>
						);
					})}
				</div>
			</div>
			<div className="container">
				<h2 className="text-center">What's Included</h2>
				<p className="flex items-center text-xl">
					<IoCheckmarkOutline className="text-customBrown mr-2" />
					<span> Meals : Breakfasts, 3 Dinners </span>
				</p>

				<p className="flex items-center text-xl">
					<IoCheckmarkOutline className="text-customBrown mr-2" />
					<span> Transportation </span>
				</p>
				<p className="flex items-center text-xl">
					<IoCheckmarkOutline className="text-customBrown mr-2" />
					<span> Accommodations </span>
				</p>
				<p className="flex items-center text-xl">
					<IoCheckmarkOutline className="text-customBrown mr-2" />
					<span> Tour Guide </span>
				</p>

				<p className="flex items-center text-xl">
					<IoCheckmarkOutline className="text-customBrown mr-2" />
					<span> Entrance tickets to listed sites </span>
				</p>
			</div>

			{/* <div>
				<h2 className="text-center">Book Now</h2>
				<button className="w-full bg-customBrown hover:bg-customBrown-light text-white font-bold py-3 px-6 rounded-lg">
					Book Now
				</button>
				<p className="text-center text-gray-600">
					* Booking is subject to availability and confirmation.
				</p>
				<p className="text-center text-gray-600">
					* Please contact our booking team for any special requests or
					preferences.
				</p>
				<p className="text-center text-gray-600">
					* We will provide you with a confirmation email after booking.
				</p>
				<p className="text-center text-gray-600">
					* We may also need to provide you with a{" "}
					<a
						href="https://www.allianztravelinsurance.com/"
						target="_blank"
						className="text-customBrown">
						travel insurance policy
					</a>{" "}
					if necessary.
				</p>
			</div> */}
		</div>
	);
}
