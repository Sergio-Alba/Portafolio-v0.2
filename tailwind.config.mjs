/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['class'],
	theme: {
		extend: {
			fontFamily:{
				jetBrains:["JetBrains Mono", "monospace"]
			},
			animation:{
				bg_slow:'bg 4s linear infinite',
			},
			backgroundImage:{
				circles:"url('./src/icons/fondo-5.png')"
			}
		},
	},
	plugins: [],
}
