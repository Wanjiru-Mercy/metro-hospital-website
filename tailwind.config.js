/** @type {import('tailwindcss').Config} */


export default {
    darkMode: ['selector', '[data-mode="dark"]'],
	content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],
	theme: {
		extend: {
            colors:{
                primary: '#1e1d56',
                secondary: '#ed1c24',

            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'], 
              },

            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },
        },
	},
	plugins: [],
};
