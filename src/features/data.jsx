export const toursData = [
	{
		id: 1,
		name: "Majestic Moroccan Desert Adventure",
		route: "Marrakech - Agdz - Merzouga - Dades Valley - Marrakech",
		sites: ["Marrakech" , "Agdz" , "Merzouga" , "Dades Valley" , "Marrakech"],
		duration: "8 Days",
		price: "$1,200",
		dates: ["April 10-17, 2024", "October 5-12, 2024"],
		description:
			" This 8-day adventure will take you through the stunning landscapes of the Majestic Moroccan Desert, offering unforgettable views of the High Atlas Mountains, the Sahara Desert, and the vibrant Marrakech. The adventure will start in Marrakech and will end in Marrakech.",
		itinerary: [
			{
				day: 1,
				description:
					"Welcome to Morocco! Tour will start in your riad in Marrakech. You can arrive any time, as today will be a day of leisure to recover from your travels and prepare for the journey ahead. In the evening, you’ll meet your group for a welcome dinner.",
				activities: ["Arrival and check-in", "Welcome dinner"],
			},
			{
				day: 2,
				description:
					"Travel to Agdz. Enjoy the scenic drive through the stunning landscapes of the High Atlas Mountains. Once in Agdz, settle into your accommodation and enjoy a delicious dinner.",
				activities: ["Transfer to Agdz", "Dinner at Kasbah Tamnougalt"],
			},
			{
				day: 3,
				description:
					"Journey to Merzouga, the gateway to the Sahara Desert. Experience a camel ride into the desert and spend the night in a luxury desert camp under the stars.",
				activities: [
					"Transfer to Merzouga",
					"Camel ride",
					"Dinner at the camp",
				],
			},
			{
				day: 4,
				description:
					"Travel from Merzouga to Dades Valley, with a stop at Todra Gorge. Explore the valley and its picturesque scenery before settling into your accommodation.",
				activities: [
					"Drive to Dades Valley",
					"Visit Todra Gorge",
					"Dinner at Kasbah Tizzou",
				],
			},
			{
				day: 5,
				description:
					"Explore the beautiful Dades Valley and its surroundings. Visit local villages and enjoy the stunning views of the Valley of Roses.",
				activities: [
					"Explore Dades Valley",
					"Visit local villages",
					"Dinner at Kasbah Tizzou",
				],
			},
			{
				day: 6,
				description:
					"Return to Marrakech. Relax and enjoy a free afternoon exploring the city at your leisure.",
				activities: ["Return to Marrakech", "Dinner at Riad El Fenn"],
			},
			{
				day: 7,
				description:
					"Discover the vibrant city of Marrakech with a guided tour. Visit iconic landmarks such as Jardin Majorelle and the Saadian Tombs.",
				activities: [
					"Guided city tour",
					"Lunch at a local restaurant",
					"Dinner at Riad El Fenn",
				],
			},
			{
				day: 8,
				description:
					"Say goodbye to Morocco as you are transferred to Marrakech Menara Airport for your departure.",
				activities: ["Transfer to airport", "Departure"],
			},
		],
		image:
			"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/00/30/7f.jpg",
		gallery: [
			"path/to/majestic-moroccan-desert-adventure-gallery1.jpg",
			"path/to/majestic-moroccan-desert-adventure-gallery2.jpg",
			"path/to/majestic-moroccan-desert-adventure-gallery3.jpg",
		],
	},
	{
		id: 2,
		name: "Imperial Cities and Desert Dreams",
		route: "Casablanca - Fes - Merzouga - Marrakech",
		sites: ["Casablanca", "Fes", "Merzouga", "Marrakech"],
		duration: "10 Days",
		price: "$1,500",
		dates: ["May 1-10, 2024", "November 15-24, 2024"],
		description:
			"This 10-day adventure will take you through the vibrant landscapes of the Imperial Cities and the Sahara Desert, offering unforgettable views of the High Atlas Mountains, the Sahara Desert, and the vibrant Marrakech. The adventure will start in Casablanca and will end in Marrakech.",
		itinerary: [
			{
				day: 1,
				description:
					"Welcome to Casablanca! Arrive at Casablanca Mohammed V Airport and transfer to your hotel. Enjoy a relaxing evening at the hotel.",
				activities: [
					"Arrival and check-in",
					"Dinner at Hyatt Regency Casablanca",
				],
			},
			{
				day: 2,
				description:
					"Travel to Fes by train. Check into your riad and explore the historic city at your own pace.",
				activities: ["Train transfer to Fes", "Dinner at Riad Fes"],
			},
			{
				day: 3,
				description:
					"Enjoy a guided tour of Fes, including visits to the medina, local artisans, and historic sites.",
				activities: ["Guided tour of Fes", "Dinner at Riad Fes"],
			},
			{
				day: 4,
				description:
					"Continue exploring Fes or enjoy free time to shop and explore the city on your own.",
				activities: ["Explore Fes", "Dinner at Riad Fes"],
			},
			{
				day: 5,
				description:
					"Drive to Merzouga, passing through Ifrane and Ziz Valley. Arrive at the desert camp and enjoy a camel ride.",
				activities: [
					"Drive to Merzouga",
					"Camel ride",
					"Dinner at Luxury Desert Camp",
				],
			},
			{
				day: 6,
				description:
					"Spend the day exploring Merzouga, including a visit to Khamlia village and experiencing desert activities.",
				activities: ["Explore Merzouga", "Dinner at Luxury Desert Camp"],
			},
			{
				day: 7,
				description:
					"Return to Marrakech. Enjoy a free afternoon to relax or explore the city.",
				activities: ["Return to Marrakech", "Dinner at Riad Dar Anika"],
			},
			{
				day: 8,
				description:
					"Discover the highlights of Marrakech with a guided tour of the city’s major attractions.",
				activities: ["Guided city tour", "Dinner at Riad Dar Anika"],
			},
			{
				day: 9,
				description:
					"Take a day trip to Essaouira, exploring the coastal town and enjoying its unique charm.",
				activities: ["Day trip to Essaouira", "Dinner at Riad Dar Anika"],
			},
			{
				day: 10,
				description:
					"Depart from Marrakech. Transfer to Marrakech Menara Airport for your flight home.",
				activities: ["Transfer to airport", "Departure"],
			},
		],
		image:
			"https://puremoroccotours.com/wp-content/uploads/2016/02/Moulay-Idriss.jpg",
		gallery: [
			"path/to/imperial-cities-and-desert-dreams-gallery1.jpg",
			"path/to/imperial-cities-and-desert-dreams-gallery2.jpg",
			"path/to/imperial-cities-and-desert-dreams-gallery3.jpg",
		],
	},
	{
		id: 3,
		name: "Atlas Mountains and Desert Safari",
		route: "Marrakech - Ourika Valley - Ait Benhaddou - Merzouga",
		sites: ["Marrakech", "Ourika Valley", "Ait Benhaddou", "Merzouga"],
		duration: "7 Days",
		price: "$1,100",
		dates: ["June 10-16, 2024", "September 7-13, 2024"],
		description:
			"This 7-day adventure will take you through the picturesque landscapes of the Atlas Mountains and the Sahara Desert, offering unforgettable views of the High Atlas Mountains, the Sahara Desert, and the vibrant Marrakech. The adventure will start in Marrakech and will end in Merzouga.",
		itinerary: [
			{
				day: 1,
				description:
					"Welcome to Marrakech! Check into your riad and enjoy a free day to explore the city at your leisure.",
				activities: ["Arrival and check-in", "Dinner at Riad Kheirredine"],
			},
			{
				day: 2,
				description:
					"Travel to Ourika Valley for a day of sightseeing and relaxation in this picturesque valley.",
				activities: ["Day trip to Ourika Valley", "Dinner at Riad Kheirredine"],
			},
			{
				day: 3,
				description:
					"Drive to Ait Benhaddou, a UNESCO World Heritage site known for its historic kasbahs. Check into your accommodation and enjoy the evening.",
				activities: ["Transfer to Ait Benhaddou", "Dinner at Kasbah Ellouze"],
			},
			{
				day: 4,
				description:
					"Continue to Merzouga and experience a camel ride into the Sahara Desert. Stay overnight in a luxury desert camp.",
				activities: [
					"Drive to Merzouga",
					"Camel ride",
					"Dinner at Luxury Desert Camp",
				],
			},
			{
				day: 5,
				description:
					"Explore Merzouga and the surrounding desert. Enjoy local culture and activities.",
				activities: ["Explore Merzouga", "Dinner at Luxury Desert Camp"],
			},
			{
				day: 6,
				description:
					"Return to Marrakech. Enjoy a free afternoon to relax or explore more of the city.",
				activities: ["Return to Marrakech", "Dinner at Riad Kheirredine"],
			},
			{
				day: 7,
				description:
					"Departure day. Transfer to Marrakech Menara Airport for your flight home.",
				activities: ["Transfer to airport", "Departure"],
			},
		],
		image:
			"https://www.freetour.com/images/tours/20934/atlas-mountains-experience-01.jpg",
		gallery: [
			"path/to/atlas-mountains-and-desert-safari-gallery1.jpg",
			"path/to/atlas-mountains-and-desert-safari-gallery2.jpg",
			"path/to/atlas-mountains-and-desert-safari-gallery3.jpg",
		],
	},
	{
		id: 4,
		name: "Moroccan Coastal Wonders",
		route: "Tangier - Chefchaouen - Asilah - Rabat",
		sites: ["Tangier", "Chefchaouen", "Asilah", "Rabat"],
		duration: "6 Days",
		price: "$950",
		dates: ["July 15-20, 2024", "December 5-10, 2024"],
		description:
			"This 6-day adventure will take you through the picturesque landscapes of the Moroccan coast, offering unforgettable views of the Tangier, Chefchaouen, Asilah, and Rabat. The adventure will start in Tangier and will end in Rabat.",
		itinerary: [
			{
				day: 1,
				description:
					"Arrive in Tangier and transfer to your hotel. Enjoy a free evening to explore the city or relax at your leisure.",
				activities: [
					"Arrival and check-in",
					"Dinner at Grand Hotel Villa de France",
				],
			},
			{
				day: 2,
				description:
					"Explore Tangier’s rich history and culture with a guided tour. Visit the Kasbah, Medina, and the American Legation Museum.",
				activities: [
					"Guided tour of Tangier",
					"Dinner at Grand Hotel Villa de France",
				],
			},
			{
				day: 3,
				description:
					"Travel to Chefchaouen, known for its blue-painted buildings and stunning mountain views. Check into your hotel and explore the town.",
				activities: ["Transfer to Chefchaouen", "Dinner at Riad Cherifa"],
			},
			{
				day: 4,
				description:
					"Enjoy a guided tour of Chefchaouen and its surroundings. Experience local culture and visit the historic sites.",
				activities: ["Guided tour of Chefchaouen", "Dinner at Riad Cherifa"],
			},
			{
				day: 5,
				description:
					"Drive to Asilah, a charming coastal town known for its art and relaxed atmosphere. Explore the town and enjoy the beach.",
				activities: ["Drive to Asilah", "Dinner at Hotel Al Kasbah"],
			},
			{
				day: 6,
				description:
					"Travel to Rabat. Visit the Royal Palace, Hassan Tower, and the Kasbah of the Udayas before your departure.",
				activities: [
					"Transfer to Rabat",
					"City tour of Rabat",
					"Dinner at Sofitel Jardin des Roses",
				],
			},
		],
		image:
			"https://res.cloudinary.com/odysseytraveller/image/fetch/f_auto,q_auto,dpr_auto,r_4,w_765,h_535.5,c_limit/https://cdn.odysseytraveller.com/app/uploads/2020/01/Caves-of-Hercules-Morocco-GettyImages-1027277144.jpg",
		gallery: [
			"path/to/moroccan-coastal-wonders-gallery1.jpg",
			"path/to/moroccan-coastal-wonders-gallery2.jpg",
			"path/to/moroccan-coastal-wonders-gallery3.jpg",
		],
	},
	{
		id: 5,
		name: "Cultural Morocco Explorer",
		route: "Marrakech - Essaouira - Casablanca - Fes",
		sites: ["Marrakech", "Essaouira", "Casablanca", "Fes"],
		duration: "9 Days",
		price: "$1,350",
		dates: ["August 5-13, 2024", "November 20-28, 2024"],
		description:
			"This 9-day adventure will take you through the picturesque landscapes of Morocco, offering unforgettable views of the Marrakech, Essaouira, Casablanca, and Fes. The adventure will start in Marrakech and will end in Fes.",
		itinerary: [
			{
				day: 1,
				description:
					"Arrive in Marrakech. Transfer to your riad and enjoy an evening to relax or explore the city on your own.",
				activities: ["Arrival and check-in", "Dinner at Riad Le Clos des Arts"],
			},
			{
				day: 2,
				description:
					"Explore Marrakech with a guided tour, visiting famous sites like the Koutoubia Mosque and the Saadian Tombs.",
				activities: ["Guided city tour", "Dinner at Riad Le Clos des Arts"],
			},
			{
				day: 3,
				description:
					"Travel to Essaouira, a beautiful coastal city known for its beaches and historic medina. Enjoy a free afternoon to explore.",
				activities: ["Transfer to Essaouira", "Dinner at Riad Maktoub"],
			},
			{
				day: 4,
				description:
					"Enjoy a guided tour of Essaouira. Explore the medina, the ramparts, and the vibrant souks.",
				activities: ["Guided tour of Essaouira", "Dinner at Riad Maktoub"],
			},
			{
				day: 5,
				description:
					"Travel to Casablanca. Explore the city, including the Hassan II Mosque and the Royal Palace.",
				activities: [
					"Drive to Casablanca",
					"Dinner at Hotel Sofitel Casablanca",
				],
			},
			{
				day: 6,
				description:
					"Continue exploring Casablanca or enjoy a free day to shop and relax.",
				activities: [
					"Explore Casablanca",
					"Dinner at Hotel Sofitel Casablanca",
				],
			},
			{
				day: 7,
				description:
					"Travel to Fes. Check into your riad and enjoy a free evening to explore or relax.",
				activities: ["Transfer to Fes", "Dinner at Riad Fes"],
			},
			{
				day: 8,
				description:
					"Discover Fes with a guided tour, including visits to the medina, tanneries, and historic sites.",
				activities: ["Guided tour of Fes", "Dinner at Riad Fes"],
			},
			{
				day: 9,
				description:
					"Departure day. Transfer to Fes airport for your flight home.",
				activities: ["Transfer to airport", "Departure"],
			},
		],
		image:
			"https://c4.wallpaperflare.com/wallpaper/80/601/239/morocco-wallpaper-preview.jpg",
		gallery: [
			"path/to/cultural-morocco-explorer-gallery1.jpg",
			"path/to/cultural-morocco-explorer-gallery2.jpg",
			"path/to/cultural-morocco-explorer-gallery3.jpg",
		],
	},
	{
		id: 6,
		name: "Historical Moroccan Journey",
		route: "Rabat - Meknes - Volubilis - Fes - Ifrane",
		sites: ["Rabat", "Meknes", "Volubilis", "Fes", "Ifrane"],
		duration: "7 Days",
		price: "$1,000",
		dates: ["September 1-7, 2024", "December 10-16, 2024"],
		description:
			"This 7-day adventure will take you through the picturesque landscapes of Morocco, offering unforgettable views of the Rabat, Meknes, Volubilis, Fes, and Ifrane. The adventure will start in Rabat and will end in Ifrane.",
		itinerary: [
			{
				day: 1,
				description:
					"Arrive in Rabat. Transfer to your hotel and enjoy a free evening to explore or relax.",
				activities: ["Arrival and check-in", "Dinner at La Tour Hassan Palace"],
			},
			{
				day: 2,
				description:
					"Explore Rabat with a guided tour, including the Hassan Tower, Royal Palace, and the Kasbah of the Udayas.",
				activities: ["Guided city tour", "Dinner at La Tour Hassan Palace"],
			},
			{
				day: 3,
				description:
					"Travel to Meknes. Visit the historic sites, including the Bab Mansour gate and the Meknes medina.",
				activities: [
					"Transfer to Meknes",
					"Guided tour of Meknes",
					"Dinner at Riad Yacout",
				],
			},
			{
				day: 4,
				description:
					"Visit the Roman ruins of Volubilis and continue to Fes. Check into your riad and enjoy a free evening.",
				activities: [
					"Day trip to Volubilis",
					"Transfer to Fes",
					"Dinner at Riad Fes",
				],
			},
			{
				day: 5,
				description:
					"Discover Fes with a guided tour of the medina, including the tanneries and historic sites.",
				activities: ["Guided tour of Fes", "Dinner at Riad Fes"],
			},
			{
				day: 6,
				description:
					"Travel to Ifrane, known for its Swiss-like architecture and beautiful scenery. Explore the town and enjoy a free afternoon.",
				activities: ["Drive to Ifrane", "Dinner at Hotel Michlifen"],
			},
			{
				day: 7,
				description:
					"Departure day. Transfer to Fes airport for your flight home.",
				activities: ["Transfer to airport", "Departure"],
			},
		],
		image:
			"https://img.freepik.com/premium-photo/volubilis-near-meknes-morocco-volubilis-is-ruined-amazigh-then-roman-city-morocco-near-meknes-unesco-world-heritage-site_268419-3.jpg",
		gallery: [
			"path/to/historical-moroccan-journey-gallery1.jpg",
			"path/to/historical-moroccan-journey-gallery2.jpg",
			"path/to/historical-moroccan-journey-gallery3.jpg",
		],
	},
	{
		id: 7,
		name: "Moroccan Adventure and Culture",
		route: "Marrakech - Ait Benhaddou - Ouarzazate - Skoura - Marrakech",
		sites: ["Marrakech", "Ait Benhaddou", "Ouarzazate", "Skoura", "Marrakech"],
		duration: "7 Days",
		price: "$1,150",
		dates: ["October 1-7, 2024", "January 10-16, 2025"],
		description:
			"This 7-day adventure will take you through the picturesque landscapes of Morocco, offering unforgettable views of Marrakech, Ait Benhaddou, Ouarzazate, Skoura, and Marrakech. The adventure will start in Marrakech and will end in Marrakech.",
		itinerary: [
			{
				day: 1,
				description:
					"Arrive in Marrakech. Transfer to your riad and enjoy a free evening to explore or relax.",
				activities: ["Arrival and check-in", "Dinner at Riad Al Moussika"],
			},
			{
				day: 2,
				description:
					"Travel to Ait Benhaddou, a UNESCO World Heritage site. Explore the kasbah and enjoy dinner at a local restaurant.",
				activities: [
					"Transfer to Ait Benhaddou",
					"Dinner at Kasbah du Toubkal",
				],
			},
			{
				day: 3,
				description:
					"Visit Ouarzazate, known as the gateway to the Sahara. Explore the town and its film studios.",
				activities: [
					"Drive to Ouarzazate",
					"Visit film studios",
					"Dinner at Hotel Berbère Palace",
				],
			},
			{
				day: 4,
				description:
					"Travel to Skoura. Visit local palm groves and kasbahs. Enjoy dinner at your accommodation.",
				activities: [
					"Drive to Skoura",
					"Visit palm groves",
					"Dinner at Kasbah Amridil",
				],
			},
			{
				day: 5,
				description:
					"Return to Marrakech. Enjoy a free afternoon to explore the city or relax.",
				activities: ["Return to Marrakech", "Dinner at Riad Al Moussika"],
			},
			{
				day: 6,
				description:
					"Explore Marrakech with a guided tour, visiting landmarks such as the Jardin Majorelle and the Saadian Tombs.",
				activities: ["Guided city tour", "Dinner at Riad Al Moussika"],
			},
			{
				day: 7,
				description:
					"Departure day. Transfer to Marrakech Menara Airport for your flight home.",
				activities: ["Transfer to airport", "Departure"],
			},
		],
		image:
			"https://storage.googleapis.com/hizan-network-app.appspot.com/marrakechtricks/aitbenhaddou/sunset2.jpeg",
		gallery: [
			"path/to/moroccan-adventure-and-culture-gallery1.jpg",
			"path/to/moroccan-adventure-and-culture-gallery2.jpg",
			"path/to/moroccan-adventure-and-culture-gallery3.jpg",
		],
	},
	{
		id: 8,
		name: "Moroccan Heritage and Nature",
		route: "Casablanca - Marrakech - Ourika Valley - Essaouira",
		sites: ["Casablanca", "Marrakech", "Ourika Valley", "Essaouira"],
		duration: "8 Days",
		price: "$1,200",
		dates: ["November 1-8, 2024", "February 5-12, 2025"],
		description:
			"This 8-day adventure will take you through the picturesque landscapes of Morocco, offering unforgettable views of Casablanca, Marrakech, Ourika Valley, and Essaouira. The adventure will start in Casablanca and will end in Essaouira.",
		itinerary: [
			{
				day: 1,
				description:
					"Arrive in Casablanca. Transfer to your hotel and enjoy a free evening.",
				activities: [
					"Arrival and check-in",
					"Dinner at Hotel Sofitel Casablanca",
				],
			},
			{
				day: 2,
				description:
					"Travel to Marrakech. Check into your riad and explore the city at your leisure.",
				activities: ["Transfer to Marrakech", "Dinner at Riad Rachael"],
			},
			{
				day: 3,
				description:
					"Explore Marrakech with a guided city tour, visiting the medina, palaces, and gardens.",
				activities: ["Guided city tour", "Dinner at Riad Rachael"],
			},
			{
				day: 4,
				description:
					"Drive to Ourika Valley for a day of exploring the natural beauty and local culture.",
				activities: ["Day trip to Ourika Valley", "Dinner at Riad Rachael"],
			},
			{
				day: 5,
				description:
					"Travel to Essaouira. Enjoy the coastal town’s charm and explore its medina and beach.",
				activities: ["Drive to Essaouira", "Dinner at Riad Maktoub"],
			},
			{
				day: 6,
				description:
					"Enjoy a guided tour of Essaouira, including visits to the medina, ramparts, and local markets.",
				activities: ["Guided tour of Essaouira", "Dinner at Riad Maktoub"],
			},
			{
				day: 7,
				description: "Return to Marrakech. Enjoy a free day to shop or relax.",
				activities: ["Return to Marrakech", "Dinner at Riad Rachael"],
			},
			{
				day: 8,
				description:
					"Departure day. Transfer to Marrakech Menara Airport for your flight home.",
				activities: ["Transfer to airport", "Departure"],
			},
		],
		image:
			"https://www.desertmajesty.com/wp-content/uploads/2018/06/ourika-lunch.jpg",
		gallery: [
			"path/to/moroccan-heritage-and-nature-gallery1.jpg",
			"path/to/moroccan-heritage-and-nature-gallery2.jpg",
			"path/to/moroccan-heritage-and-nature-gallery3.jpg",
		],
	},
];


export const siteCoordinates = {
	Marrakech: [31.6304, -7.9811],
	Agdz: [30.4521, -5.919],
	Merzouga: [31.016, -4.0026],
	"Dades Valley": [31.3316, -5.9379],
	Casablanca: [33.5731, -7.589],
	Fes: [34.0209, -4.9994],
	Essaouira: [31.5149, -9.7592],
	Tangier: [35.7672, -5.7997],
	Chefchaouen: [35.1719, -5.262],
	Asilah: [35.4667, -6.0333],
	Rabat: [34.0209, -6.8416],
	Meknes: [34.589, -5.582],
	Volubilis: [34.0709, -5.5568],
	Ifrane: [34.0209, -6.9304],
	"Ourika Valley": [31.5306, -7.9434],
};
