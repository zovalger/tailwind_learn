/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			colors: { danger: "#f00" },
			fontFamily: {
				comic: ["Comic Neue"],
			},
		},
	},
	plugins: [],
};
