import React, { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import { Avatar, Card } from "antd";
import Founder from "../assets/founder.jpg";
import Cofounder from "../assets/cofounder.jpg";
import Manager from "../assets/manager.jpg";
import Review1 from "../assets/review1.jpg";
import Review2 from "../assets/review2.jpg";
import Review3 from "../assets/review3.jpg";
import guide1 from "../assets/guide1.png";
import guide2 from "../assets/guide2.png";
import guide3 from "../assets/guide3.png";
import useScrollTrigger from "../hooks/useScrollTrigger";

const fadeIn = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

const scaleUp = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
};

export default function About() {
	const storyRef = useRef(null);
	const philosophyRef = useRef(null);
	const teamRef = useRef(null);
	const reviewsRef = useRef(null);

	const storyInView = useScrollTrigger(storyRef);
	const philosophyInView = useScrollTrigger(philosophyRef);
	const teamInView = useScrollTrigger(teamRef);
	const reviewsInView = useScrollTrigger(reviewsRef);

	return (
		<div className="pb-10">
			<main className="about">
				<Navbar />
				<motion.div
					className="mt-16 container bg-white rounded-lg w-full h-2/3 overflow-auto"
					initial="hidden"
					animate={storyInView ? "visible" : "hidden"}
					variants={fadeIn}
					transition={{ duration: 1 }}
					ref={storyRef}>
					<h1 className="text-customBrown text-center">Our Story</h1>
					<p className="text-justify text-customBrown text-sm md:text-xl">
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
				</motion.div>
				<motion.div
					className="container mt-4 text-white"
					initial="hidden"
					animate={philosophyInView ? "visible" : "hidden"}
					variants={fadeIn}
					transition={{ duration: 1.2 }}
					ref={philosophyRef}>
					<h1 className="text-center text-4xl font-bold mb-6">
						Our Philosophy
						<hr className="-mt-5 h-3" />
					</h1>
					<p className="text-lg">
						At Kamel Travel, we believe travel is about connecting with people,
						experiencing cultures, and creating lasting memories. Inspired by my
						father's legacy and Morocco's rich heritage, we are committed to
						providing authentic and enriching travel experiences.
					</p>
					<ul className="mt-4 space-y-4">
						<motion.li
							variants={fadeIn}
							initial="hidden"
							animate={philosophyInView ? "visible" : "hidden"}
							transition={{ duration: 1.4 }}>
							<span className="font-semibold text-xl">Authenticity:</span>
							<span className="ml-2">
								We showcase the true essence of Morocco, offering genuine
								experiences from ancient medinas to vibrant souks.
							</span>
						</motion.li>
						<motion.li
							variants={fadeIn}
							initial="hidden"
							animate={philosophyInView ? "visible" : "hidden"}
							transition={{ duration: 1.5 }}>
							<span className="font-semibold text-xl">Hospitality:</span>
							<span className="ml-2">
								We treat our guests like family, ensuring every moment is
								comfortable and memorable.
							</span>
						</motion.li>
						<motion.li
							variants={fadeIn}
							initial="hidden"
							animate={philosophyInView ? "visible" : "hidden"}
							transition={{ duration: 1.6 }}>
							<span className="font-semibold text-xl">Sustainability:</span>
							<span className="ml-2">
								We support local communities and respect the environment through
								responsible tourism practices.
							</span>
						</motion.li>
						<motion.li
							variants={fadeIn}
							initial="hidden"
							animate={philosophyInView ? "visible" : "hidden"}
							transition={{ duration: 1.7 }}>
							<span className="font-semibold text-xl">Personalization:</span>
							<span className="ml-2">
								We tailor our tours to meet your interests and preferences,
								whether you seek adventure, relaxation, or cultural immersion.
							</span>
						</motion.li>
						<motion.li
							variants={fadeIn}
							initial="hidden"
							animate={philosophyInView ? "visible" : "hidden"}
							transition={{ duration: 1.8 }}>
							<span className="font-semibold text-xl">Storytelling:</span>
							<span className="ml-2">
								We share the rich history and traditions of Morocco, making
								every tour an educational and enriching experience.
							</span>
						</motion.li>
					</ul>
					<p className="text-lg mt-4">
						At Kamel Travel, our philosophy drives us to create visually
						stunning, emotionally rewarding journeys. Join us and explore the
						wonders of Morocco, creating memories that will last a lifetime.
					</p>
				</motion.div>
			</main>
			<div>
				<motion.div
					className="container mt-4"
					initial="hidden"
					animate={teamInView ? "visible" : "hidden"}
					variants={fadeIn}
					transition={{ duration: 1.5 }}
					ref={teamRef}>
					<h1 className="text-center text-customBrown">Meet the Team</h1>
					<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 w-full">
						<motion.div
							className="shadow-md text-customBrown"
							initial="hidden"
							animate={teamInView ? "visible" : "hidden"}
							variants={scaleUp}
							transition={{ type: "spring", stiffness: 300 }}>
							<Card>
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
						</motion.div>

						<motion.div
							className="shadow-md text-customBrown"
							initial="hidden"
							animate={teamInView ? "visible" : "hidden"}
							variants={scaleUp}
							transition={{ type: "spring", stiffness: 300 }}>
							<Card>
								<div className="h-64 overflow-hidden">
									<img
										src={Cofounder}
										alt="Co-founder"
										className="w-full h-full object-cover rounded-lg"
									/>
								</div>
								<div className="text-center p-4">
									<h3 className="text-2xl font-bold">Jane Smith</h3>
									<p className="text-gray-500">Co-founder</p>
									<p className="text-lg text-justify">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Pellentesque habitant morbi tristique senectus et netus et
										malesuada fames ac turpis egestas.
									</p>
								</div>
							</Card>
						</motion.div>

						<motion.div
							className="shadow-md text-customBrown"
							initial="hidden"
							animate={teamInView ? "visible" : "hidden"}
							variants={scaleUp}
							transition={{ type: "spring", stiffness: 300 }}>
							<Card>
								<div className="h-64 overflow-hidden">
									<img
										src={Manager}
										alt="Manager"
										className="w-full h-full object-cover rounded-lg"
									/>
								</div>
								<div className="text-center p-4">
									<h3 className="text-2xl font-bold">Michael Johnson</h3>
									<p className="text-gray-500">Manager</p>
									<p className="text-lg text-justify">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Pellentesque habitant morbi tristique senectus et netus et
										malesuada fames ac turpis egestas.
									</p>
								</div>
							</Card>
						</motion.div>
						<motion.div
							className="shadow-md text-customBrown"
							initial="hidden"
							animate={teamInView ? "visible" : "hidden"}
							variants={scaleUp}
							transition={{ type: "spring", stiffness: 300 }}>
							<Card>
								<div className="h-64 overflow-hidden">
									<img
										src={guide1}
										alt="guide1"
										className="w-full h-full object-cover rounded-lg"
									/>
								</div>
								<div className="text-center p-4">
									<h3 className="text-2xl font-bold">Aicha Haroun</h3>
									<p className="text-gray-500">Guide</p>
									<p className="text-lg text-justify">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Pellentesque habitant morbi tristique senectus et netus et
										malesuada fames ac turpis egestas.
									</p>
								</div>
							</Card>
						</motion.div>
						<motion.div
							className="shadow-md text-customBrown"
							initial="hidden"
							animate={teamInView ? "visible" : "hidden"}
							variants={scaleUp}
							transition={{ type: "spring", stiffness: 300 }}>
							<Card>
								<div className="h-64 overflow-hidden">
									<img
										src={guide2}
										alt="guide2"
										className="w-full h-full object-cover rounded-lg"
									/>
								</div>
								<div className="text-center p-4">
									<h3 className="text-2xl font-bold">Mohamed El Ouali</h3>
									<p className="text-gray-500">Guide</p>
									<p className="text-lg text-justify">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Pellentesque habitant morbi tristique senectus et netus et
										malesuada fames ac turpis egestas.
									</p>
								</div>
							</Card>
						</motion.div>
						<motion.div
							className="shadow-md text-customBrown"
							initial="hidden"
							animate={teamInView ? "visible" : "hidden"}
							variants={scaleUp}
							transition={{ type: "spring", stiffness: 300 }}>
							<Card>
								<div className="h-64 overflow-hidden">
									<img
										src={guide3}
										alt="guide3"
										className="w-full h-full object-cover rounded-lg"
									/>
								</div>
								<div className="text-center p-4">
									<h3 className="text-2xl font-bold">Yassine Hamdani</h3>
									<p className="text-gray-500">Guide</p>
									<p className="text-lg text-justify">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Pellentesque habitant morbi tristique senectus et netus et
										malesuada fames ac turpis egestas.
									</p>
								</div>
							</Card>
						</motion.div>
					</div>
				</motion.div>
				<motion.div
					className="mt-4"
					initial="hidden"
					animate={reviewsInView ? "visible" : "hidden"}
					variants={fadeIn}
					transition={{ duration: 1.5 }}
					ref={reviewsRef}>
					<h1 className="text-center text-customBrown">
						What they say about us
					</h1>
					<div className="grid grid-cols-1 text-customBrown lg:grid-cols-3 md:grid-cols-2 gap-5 w-full">
						<motion.div
							className="shadow-lg p-3 rounded-lg"
							initial="hidden"
							animate={reviewsInView ? "visible" : "hidden"}
							variants={fadeIn}
							transition={{ duration: 1.5 }}>
							<div className="flex items-center gap-3">
								<Avatar src={Review1} size={50} />
								<p className="font-semibold mt-3">Jouan Alvarez</p>
							</div>
							<p className="mt-2 container text-justify">
								"Kamel Travel made our Morocco trip unforgettable! The guides
								were fantastic, and every detail was perfect. Can't wait to
								travel with them again!"
							</p>
						</motion.div>
						<motion.div
							className="shadow-lg p-3 rounded-lg"
							initial="hidden"
							animate={reviewsInView ? "visible" : "hidden"}
							variants={fadeIn}
							transition={{ duration: 1.6 }}>
							<div className="flex items-center gap-3">
								<Avatar src={Review2} size={50} />
								<p className="font-semibold mt-3">William W.</p>
							</div>
							<p className="mt-2 container text-justify">
								"Exceptional service and unforgettable experiences with Kamel
								Travel! From exploring ancient medinas to savoring local
								cuisine, every moment was magical. Highly recommend!"
							</p>
						</motion.div>
						<motion.div
							className="shadow-lg p-3 rounded-lg"
							initial="hidden"
							animate={reviewsInView ? "visible" : "hidden"}
							variants={fadeIn}
							transition={{ duration: 1.7 }}>
							<div className="flex items-center gap-3">
								<Avatar src={Review3} size={50} />
								<p className="font-semibold mt-3">Emily Tatum</p>
							</div>
							<p className="mt-2 container text-justify">
								"Choosing Kamel Travel was the best decision! Their expertise in
								showcasing Morocco's beauty and culture made our journey truly
								enriching. Can't wait for the next adventure!"
							</p>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
