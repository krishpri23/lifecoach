/** @type {import('tailwindcss').Config} */
const {fontFamily} = require("tailwindcss/defaultTheme")
module.exports = {
    darkMode: ['class'],
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
		extend: {
			fontFamily: {
lora: ["Lora", ...fontFamily.sans]
			}
,  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
	plugins: [require("tailwindcss-animate"), 
		require("@tailwindcss/typography")
	],
};
