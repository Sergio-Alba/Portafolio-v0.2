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
				},
				tiritar:{
					"0%": {
						transform: "translateY(0px)"
					},
					"50%": {
						transform: "translateY(10px)"	
					},
					"100%": {
						transform: "translateY(0px)"
					}
				},
				rotate360Background: {
					"0%": {
						transform: "rotate(0deg)"
					},
					"100%": {
					  transform: "rotate(360deg)"
					}
				},
				rotate360Item: {
					"0%": {
						transform: "rotate(0deg)"
					},
					"100%": {
					  transform: "rotate(-360deg)"
					}
				}
			},
			fontFamily:{
				jetBrains:["JetBrains Mono", "serif "],
				protestRiot:["Protest Riot", "serif"]

			},
			animation:{
				bg_slow:'bg 4s linear infinite',
				infiniteScroll: "infinite-scroll 4s linear infinite",
				tiritar: "tiritar 1.5s ease-in-out infinite",
				rotate360: "rotate360Background 8s linear infinite",
				rotate360Item: "rotate360Item 8s linear infinite"
			},
			backgroundImage:{
				circles:"url('./src/icons/fondo-5.png')"
			},

		},
	},
	plugins: [],
}
