/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-color": "#C3073F",
				"primary-dark-color": "#1A1A1D",
				"success-color": "#0197F6",
				"info-color": "#0197F6",
				"warning-color": "#F2AF29",
				"error-color": "#F2AF29",
				"container-color": "#fff",
			},
		},
	},
	plugins: [],
};
