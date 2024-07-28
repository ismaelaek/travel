import React from "react";
import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";

const containerStyle = {
	width: "100%",
	height: "500px",
};

const center = {
	lat: 31.6295,
	lng: -7.9811,
};

const destinations = [
	{ lat: 31.6295, lng: -7.9811 },
	{ lat: 30.4642, lng: -6.0822 },
	{ lat: 31.0574, lng: -4.1351 },
	{ lat: 31.6011, lng: -5.8468 },
	{ lat: 31.6295, lng: -7.9811 },
];

const pathOptions = {
	strokeColor: "#FF0000",
	strokeOpacity: 1.0,
	strokeWeight: 2,
};

const GoogleMapComponent = () => {
	return (
		<LoadScript googleMapsApiKey="AIzaSyBmZm9SYRgWlKC063-xupo0f5qA9fH3pT8">
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
				<Polyline path={destinations} options={pathOptions} />
			</GoogleMap>
		</LoadScript>
	);
};

export default GoogleMapComponent;
