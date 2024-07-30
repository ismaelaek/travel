import React from "react";
import { useParams } from "react-router-dom";
import { toursData, siteCoordinates } from "../features/data";
import Navbar from "./navbar";
import { IoCheckmarkOutline } from "react-icons/io5";
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	Polyline,
} from "react-leaflet";
import { Card, BackTop, Table, Button } from "antd";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "antd/dist/reset.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FaRoute } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
	iconRetinaUrl:
		"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
	shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const fadeInUp = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TourItem() {
	const { id } = useParams();
	const tour = toursData.find((tour) => tour.id === parseInt(id));
	const routeCoordinates = tour.sites
		.map((site) => siteCoordinates[site])
		.filter(Boolean);

	const columns = [
		{
			title: "Date",
			dataIndex: "date",
			key: "date",
		},
		{
			title: "Price per person",
			dataIndex: "price",
			key: "price",
			render: (text) => `${text} USD`,
		},
		{
			title: "Book",
			key: "book",
			render: (_, record) => <Button type="primary">Book Now</Button>,
		},
	];

	const dataSource = tour.dates.map((date, index) => ({
		key: index,
		date,
		price: tour.price,
	}));

	return (
		<div>
			<Navbar />
			<motion.div
				className="container mt-10"
				initial="hidden"
				animate="visible"
				variants={fadeInUp}>
				<h1 className="text-center">{tour.name}</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<img src={tour.image} alt="" width="100%" />
					<div className="flex h-full items-center text-justify justify-center">
						<p>{tour.description}</p>
					</div>
				</div>
			</motion.div>
			<motion.div
				className="container"
				initial="hidden"
				animate="visible"
				variants={fadeInUp}>
				<h2 className="text-center mt-10">Route Details</h2>
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="text-xl flex flex-col justify-center">
						<div className="md:flex md:gap-2 md:items-center">
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
			</motion.div>
			<motion.div
				className="container mt-5"
				initial="hidden"
				animate="visible"
				variants={fadeInUp}>
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
			</motion.div>
			<motion.div
				className="container"
				initial="hidden"
				animate="visible"
				variants={fadeInUp}>
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
			</motion.div>
			<motion.div
				className="container"
				initial="hidden"
				animate="visible"
				variants={fadeInUp}>
				<h2 className="text-center">Gallery</h2>
				<Gallery>
					<div className="flex flex-wrap gap-4 justify-center">
						{tour.gallery.map((image, index) => (
							<Item
								key={index}
								original={image}
								thumbnail={image}
								width="1024"
								height="768">
								{({ ref, open }) => (
									<img
										ref={ref}
										onClick={open}
										src={image}
										alt={`Gallery Image ${index + 1}`}
										style={{
											cursor: "pointer",
											width: "150px", // Adjust size as needed
											height: "auto",
											objectFit: "cover",
										}}
									/>
								)}
							</Item>
						))}
					</div>
				</Gallery>
			</motion.div>
			<motion.div
				className="container mt-5"
				initial="hidden"
				animate="visible"
				variants={fadeInUp}>
				<h2 className="text-center">Scheduled Dates</h2>
				<Table columns={columns} dataSource={dataSource} pagination={false} />
				<div>
					<h4 className="text-center mt-2">Notes</h4>
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
				</div>
			</motion.div>
			<motion.div
				className="container mb-4"
				initial="hidden"
				animate="visible"
				variants={fadeInUp}>
				<h2 className="text-center">You May Like</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{toursData.map((tour, index) => {
						if (tour.id !== parseInt(id)) {
							return (
								<Card className="shadow-md" key={index}>
									<div className="h-64 overflow-hidden">
										<img
											src={tour.image}
											alt={tour.name}
											className="w-full h-full object-cover rounded-lg hover:scale-110 ease-in-out duration-500 cursor-pointer"
										/>
									</div>
									<hr />
									<Link
										to={`/tours/${tour.id}`}
										className="no-underline text-black">
										<h3 className="hover:text-customBrown hover:underline duration-150">
											{tour.name}
										</h3>
									</Link>
									<div>
										<div className="flex gap-2 items-center">
											<FaRoute />
											<p className="m-0 p-0">{tour.route}</p>
										</div>
										<div className="flex gap-2 items-center">
											<IoTime />
											<p className="m-0 p-0">{tour.duration}</p>
										</div>
										<div className="flex justify-end">
											<Link
												to={`/tours/${tour.id}`}
												className="no-underline bg-customBrown text-white px-4 py-2 rounded-lg hover:bg-orange-900 duration-500">
												Read More
											</Link>
										</div>
									</div>
								</Card>
							);
						}
						return null;
					})}
				</div>
			</motion.div>
			<BackTop className="z-10" visibilityHeight={500} />
		</div>
	);
}
