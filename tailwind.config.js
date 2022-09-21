/** @type {import('tailwindcss').Config} */
// npx tailwindcss -i ./src/public/stylesheets/landing.css -o ./src/dist/output.css --watch
module.exports = {
	content: [ './src/**/*.{html,js}' ],
	theme: {
		extend: {}
	},
	plugins: []
};
