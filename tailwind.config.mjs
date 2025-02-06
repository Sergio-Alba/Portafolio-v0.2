import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['class'],
	theme: {
		extend: {
			keyframes:{
				infiniteScroll: {
					"0%": { transform: "translateX(0)"},
					"100%": { transform: "translateX(calc(-50% - 20px))"},
				}
			},
			fontFamily:{
				jetBrains:["JetBrains Mono", "monospace"]
			},
			animation:{
				bg_slow:'bg 4s linear infinite',
				infiniteScroll: "infinite-scroll 4s linear infinite"
			},
			backgroundImage:{
				circles:"url('./src/icons/fondo-5.png')"
			},
		},
	},
	plugins: [],
}
