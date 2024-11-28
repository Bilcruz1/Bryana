/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				outfit: ['Outfit', 'sans-serif'], // Combined into a single `fontFamily` key
			},
			keyframes: {
				fadeSlideDown: {
					'0%': { opacity: '0', transform: 'translateY(-20%)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeSlideUp: {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(-20%)' },
				},
			},
			animation: {
				fadeSlideDown: 'fadeSlideDown 0.5s ease-in-out',
				fadeSlideUp: 'fadeSlideUp 0.5s ease-in-out',
			},
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')], // Added the plugin here
};
