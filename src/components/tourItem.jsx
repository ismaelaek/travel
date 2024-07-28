import React from 'react'

export default function TourItem({tour}) {
    return (
        <div>
            <img src={tour.image} alt={tour.name} />
				<h1>{tour.name}</h1>
			</div>
		);
}
