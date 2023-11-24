/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		extend: {
			width: {
				1600: '100rem',
				500: '31rem',
			},
			padding: {
				'142px': '142px',
			},
			zIndex: {
				1: '1',
			},
			flex: {
				Footer: '0 0 auto',
			},
			fontFamily: {
				Cormorant: 'Cormorant Infant',
				Oswald: 'Oswald',
				Cormodant: 'Cormorant Garamond',
				Yeseva: 'Yeseva One',
				Prata: 'Prata',
			},
		},
	},
	plugins: [require('daisyui')],
};
