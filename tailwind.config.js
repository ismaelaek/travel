/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				customBrown: "#804d35",
				lightBrown: "#bfa69a",
			},
		},
	},
	plugins: [],
};

