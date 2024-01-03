/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Montserrat Variable"', 'sans-serif'],
				serif: ['"Fraunces Variable"', 'sans-serif'],
			},
			colors: {
				'aurometal' : '#6C7289',
				'gunmetal' : '#1C232B',
				'deep-aquamarine' : '#3D8168',
			},
		},
	},
	plugins: [],
}
