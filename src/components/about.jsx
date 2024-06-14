import React from "react";
import Navbar from "./navbar";
import { Avatar, Card } from "antd";
import Founder from "../assets/founder.jpg";
import Cofounder from "../assets/cofounder.jpg";
import Manager from "../assets/manager.jpg";
import Review1 from "../assets/review1.jpg";
import Review2 from "../assets/review2.jpg";
import Review3 from "../assets/review3.jpg";



export default function About() {
	return (
		<div className=" pb-10">
			<main className="about">
				<Navbar />
				<div className="mt-16 container bg-white rounded-lg w-full h-96 overflow-auto">
					<h1 className=" text-customBrown text-center">Our Story</h1>
					<p className=" text-justify text-customBrown text-sm md:text-xl">
						Growing up in the heart of Morocco, my childhood was enriched by the
						vibrant sights, sounds, and stories of travelers from around the
						world. My father worked tirelessly, guiding tourists through the
						bustling souks of Marrakech, the serene Atlas Mountains, and the
						vast Sahara Desert. His passion for sharing our rich culture and
						breathtaking landscapes deeply inspired me. As I watched my father,
						I learned the importance of hospitality, the joy of discovery, and
						the beauty of Morocco. He wasn't just a guide; he was a storyteller,
						an ambassador of our heritage, and a bridge between cultures. His
						enthusiasm for showcasing Morocco's wonders left a lasting
						impression on me, and I knew I wanted to follow in his footsteps.
						Inspired by these experiences, I created Kamel Travel. This website
						is not just a business, but a tribute to my father's legacy and the
						adventures of my youth. At Kamel Travel, we aim to provide you with
						the same authentic and unforgettable journeys that my father shared
						with his tourists. We want you to discover the magic of Morocco
						through the eyes of a local and the heart of a storyteller. Kamel
						Travel exists to share the wonders of Morocco with the world, to
						continue my father's legacy of hospitality and storytelling, and to
						inspire a love for travel and discovery in every person who joins us
						on this adventure. We invite you to embark on this journey with us
						and experience the magic of Morocco in a way that is both authentic
						and unforgettable.
					</p>
				</div>
				<div className="container mt-4 text-white">
					<h1 className="text-center text-4xl font-bold mb-6">
						Our Philosophy
						<hr className=" -mt-5 h-3" />
					</h1>
					<p className="text-lg ">
						At Kamel Travel, we believe travel is about connecting with people,
						experiencing cultures, and creating lasting memories. Inspired by my
						father's legacy and Morocco's rich heritage, we are committed to
						providing authentic and enriching travel experiences.
					</p>
					<ul className="mt-4 space-y-4">
						<li>
							<span className="font-semibold text-xl">Authenticity:</span>
							<span className="ml-2">
								We showcase the true essence of Morocco, offering genuine
								experiences from ancient medinas to vibrant souks.
							</span>
						</li>
						<li>
							<span className="font-semibold text-xl">Hospitality:</span>
							<span className="ml-2">
								We treat our guests like family, ensuring every moment is
								comfortable and memorable.
							</span>
						</li>
						<li>
							<span className="font-semibold text-xl">Sustainability:</span>
							<span className="ml-2">
								We support local communities and respect the environment through
								responsible tourism practices.
							</span>
						</li>
						<li>
							<span className="font-semibold text-xl">Personalization:</span>
							<span className="ml-2">
								We tailor our tours to meet your interests and preferences,
								whether you seek adventure, relaxation, or cultural immersion.
							</span>
						</li>
						<li>
							<span className="font-semibold text-xl">Storytelling:</span>
							<span className="ml-2">
								We share the rich history and traditions of Morocco, making
								every tour an educational and enriching experience.
							</span>
						</li>
					</ul>
					<p className="text-lg  mt-4">
						At Kamel Travel, our philosophy drives us to create visually
						stunning, emotionally rewarding journeys. Join us and explore the
						wonders of Morocco, creating memories that will last a lifetime.
					</p>
				</div>
			</main>
			<div className="  container">
				<h1 className=" text-center text-customBrown">Meet the team</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full ">
					<Card className="shadow-md text-customBrown ">
						<div className="h-64 overflow-hidden">
							<img
								src={Founder}
								alt="Founder"
								className="w-full h-full object-cover rounded-lg"
							/>
						</div>
						<div className="text-center p-4">
							<h3 className="text-2xl font-bold">John Doe</h3>
							<p className="text-gray-500">Founder</p>
							<p className="text-lg text-justify">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Pellentesque habitant morbi tristique senectus et netus et
								malesuada fames ac turpis egestas.
							</p>
						</div>
					</Card>

					<Card className="shadow-md text-customBrown">
						<div className="h-64 overflow-hidden">
							<img
								src={Cofounder}
								alt="Co-founder"
								className="w-full h-full object-cover rounded-lg"
							/>
						</div>
						<div className="text-center p-4">
							<h3 className="text-2xl font-bold">Marry Jane</h3>
							<p className="text-gray-500">Co-founder</p>
							<p className="text-lg text-justify">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Pellentesque habitant morbi tristique senectus et netus et
								malesuada fames ac turpis egestas.
							</p>
						</div>
					</Card>

					<Card className="shadow-md text-customBrown">
						<div className="h-64 overflow-hidden">
							<img
								src={Manager}
								alt="Manager"
								className="w-full h-full object-cover rounded-lg"
							/>
						</div>
						<div className="text-center p-4">
							<h3 className="text-2xl font-bold">Steph Curry</h3>
							<p className="text-gray-500">Manager</p>
							<p className="text-lg text-justify">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Pellentesque habitant morbi tristique senectus et netus et
								malesuada fames ac turpis egestas.
							</p>
						</div>
					</Card>
				</div>
				<div className=" mt-4">
					<h1 className=" text-center text-customBrown">
						What they say about us
					</h1>
					<div className="grid grid-cols-1 text-customBrown md:grid-cols-3 gap-5 w-full ">
						<div className=" shadow-lg p-3 rounded-lg">
							<div className=" flex items-center gap-3">
								<Avatar src={Review1} size={50} />
								<p className=" font-semibold mt-3">Jouan Alvarez</p>
							</div>
							<p className=" mt-2 container text-justify">
								"Kamel Travel made our Morocco trip unforgettable! The guides
								were fantastic, and every detail was perfect. Can't wait to
								travel with them again!"
							</p>
						</div>
						<div className=" shadow-lg p-3 rounded-lg">
							<div className=" flex items-center gap-3">
								<Avatar src={Review2} size={50} />
								<p className=" font-semibold mt-3">William W.</p>
							</div>
							<p className=" mt-2 container text-justify">
								"Exceptional service and unforgettable experiences with Kamel
								Travel! From exploring ancient medinas to savoring local
								cuisine, every moment was magical. Highly recommend!"
							</p>
						</div>
						<div className=" shadow-lg p-3 rounded-lg">
							<div className=" flex items-center gap-3">
								<Avatar src={Review3} size={50} />
								<p className=" font-semibold mt-3">Emily Tatum</p>
							</div>
							<p className=" mt-2 container text-justify">
								"Choosing Kamel Travel was the best decision! Their expertise in
								showcasing Morocco's beauty and culture made our journey truly
								enriching. Can't wait for the next adventure!"
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
