import React from "react";
import Navbar from "./navbar";
import { Form, Input, Button, notification } from "antd";
import { motion } from "framer-motion";
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaLinkedinIn,
} from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const { TextArea } = Input;

export default function Contact() {
	const onFinish = (values) => {
		console.log("Success:", values);
		notification.success({
			message: "Message Sent",
			description: "Thank you for reaching out. We will get back to you soon!",
		});
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<>
			<div className="contact">
				<Navbar />
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="w-full mt-10 flex items-center h-1/2">
					<div className="w-full text-customBrown text-center mt-7">
						<h1>Contact Us</h1>
						<p>Your Moroccan Adventure Awaits - Get in Touch Today!</p>
					</div>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="p-10 bg-customBrown -mt-20">
				<h2 className="text-3xl text-white font-bold mb-6 text-center">
					Kamel Travel
				</h2>
				<div className="text-white grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="mb-8">
						<h3 className="text-xl font-semibold mb-4">Contact Information</h3>
						<div className="flex items-center mb-2">
							<MdLocationOn className="text-white text-2xl mr-3" />
							<p className="text-gray-300">
								<span className="font-semibold">Address:</span> 123 Moroccan
								Lane, Casablanca, Morocco
							</p>
						</div>
						<div className="flex items-center mb-2">
							<MdPhone className="text-white text-2xl mr-3" />
							<p className="text-gray-300">
								<span className="font-semibold">Phone:</span> +212 123 456 789
							</p>
						</div>
						<div className="flex items-center mb-2">
							<MdEmail className="text-white text-2xl mr-3" />
							<p className="text-gray-300">
								<span className="font-semibold">Email:</span>{" "}
								contact@kameltravel.com
							</p>
						</div>
					</div>

					<div className="mb-8">
						<h3 className="text-xl font-semibold mb-4">Business Hours</h3>
						<p className="text-gray-300 mb-1">
							<span className="font-semibold">Monday - Friday:</span> 9:00 AM -
							6:00 PM
						</p>
						<p className="text-gray-300 mb-1">
							<span className="font-semibold">Saturday:</span> 10:00 AM - 4:00
							PM
						</p>
						<p className="text-gray-300">
							<span className="font-semibold">Sunday:</span> Closed
						</p>
					</div>

					<div className="mb-8">
						<h3 className="text-xl font-semibold mb-4">Follow Us</h3>
						<div className="flex space-x-4 ">
							<a
								href="https://facebook.com/kameltravel"
								className="text-blue-600 hover:text-blue-700">
								<FaFacebookF size={24} />
							</a>
							<a
								href="https://instagram.com/kameltravel"
								className="text-pink-500 hover:text-pink-600">
								<FaInstagram size={24} />
							</a>
							<a
								href="https://twitter.com/kameltravel"
								className="text-blue-400 hover:text-blue-500">
								<FaTwitter size={24} />
							</a>
							<a
								href="https://linkedin.com/company/kameltravel"
								className="text-blue-700 hover:text-blue-800">
								<FaLinkedinIn size={24} />
							</a>
						</div>
					</div>

					<div className="mb-8">
						<h3 className="text-xl font-semibold mb-4">
							Additional Information
						</h3>
						<p className="text-gray-300 mb-1">
							<span className="font-semibold">Languages Spoken:</span> English,
							Arabic, French
						</p>
						<p className="text-gray-300 mb-1">
							<span className="font-semibold">Payment Methods:</span> Credit
							Card, PayPal, Bank Transfer
						</p>
						<p className="text-gray-300">
							<span className="font-semibold">Accessibility:</span> Wheelchair
							Accessible
						</p>
					</div>
				</div>
			</motion.div>
			<motion.main
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="py-12 bg-customBrown">
				<div className="max-w-4xl mx-auto px-6 py-8 bg-lightBrown rounded-lg shadow-lg">
					<h2 className="text-3xl font-extrabold text-white mb-6 text-center">
						Get in Touch
					</h2>
					<Form
						name="contact_form"
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						layout="vertical">
						<Form.Item
							label="Name"
							name="name"
							rules={[{ required: true, message: "Please enter your name!" }]}>
							<Input
								className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
								placeholder="John Doe"
							/>
						</Form.Item>
						<Form.Item
							label="Email"
							name="email"
							rules={[
								{
									required: true,
									type: "email",
									message: "Please enter a valid email!",
								},
							]}>
							<Input
								className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
								placeholder="example@example.com"
							/>
						</Form.Item>
						<Form.Item
							label="Message"
							name="message"
							rules={[
								{ required: true, message: "Please enter your message!" },
							]}>
							<TextArea
								className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
								rows={4}
								placeholder="Your message here..."
							/>
						</Form.Item>
						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								className="w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
								Send
							</Button>
						</Form.Item>
					</Form>
				</div>
			</motion.main>
		</>
	);
}
