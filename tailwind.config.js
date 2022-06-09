module.exports = {
	content: ['./templates/**/*.{html,twig}'],
	theme: {
		extend: {
			colors: {
				primary: '#20E7D6',
				primaryHover: '#16CABB',
				secondary: '#272727',
				circle: '#20e6d642',
			},
			fontSize: {
				'2xl': '1.75rem',
				'3xl': '2.125rem',
				'4xl': '3.89rem',
			},
			animation: {
				blob: 'blob 7s infinite',
			},
			keyframes: {
				blob: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.1)',
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9)',
					},
					'100%': {
						transform: 'tranlate(0px, 0px) scale(1)',
					},
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		// require("@tailwindcss/forms"),
	],
}
