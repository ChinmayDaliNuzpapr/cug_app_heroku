module.exports = {
	purge: ['./pages/*.{js,jsx}', './components/*.{js,jsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		width: {
			100: '100px',
			50: '50px',
			400: '400px',
		},

		height: {
			300: '300px',
			50: '50px',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
