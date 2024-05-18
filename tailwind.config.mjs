/** @type {import('tailwindcss').Config} */
export default {
	content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './node_modules/flowbite/**/*.js'
    ],
	theme: {
		extend: {
            colors: {
                'brand-yellow': '#EAE200',
                'accent-green': '#74DD2F',
                'accent-blue': '#A3E7FC',
                'accent-orange': '#EA6D00',
                'dark-blue': '#27363D',
                'dark-red': '#9C2525',
                'tapa': {
                    50: '#f4f3f2',
                    100: '#e2e1df',
                    200: '#c7c4c1',
                    300: '#a7a29d',
                    400: '#8e8781',
                    500: '#78716c',
                    600: '#6d6561',
                    700: '#585250',
                    800: '#4d4846',
                    900: '#443f3f',
                    950: '#262322',
                },
            },
        },
		
	},
	plugins: [
        require('flowbite/plugin'),
        require('@tailwindcss/typography'),
    ],
}
