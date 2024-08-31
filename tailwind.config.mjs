import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			},
			fontFamily: {
			},
			fontSize: {
			},
			keyframes: {
				"kenburns-left": {
					"0%": { 
						transform: "scale(1) translate(0, 0)",
						"transform-origin": "16% 50%"
					},
					"100%": { 
						transform: "scale(2) translate(-20px, 15px)",
						"transform-origin": "left"
					},
				},
				"kenburns-right-invert": {
					"0%": { 
						transform: "scale(2) translate(0, 0)",
						"transform-origin": "left"
					},
					"100%": { 
						transform: "scale(1) translate(0, 0)",
						"transform-origin": "16% 50%"
					},
				},
				wobble: {
					"0%, 50%": {
						transform: "translateX(0%)",
						"transform-origin": "50% 50%"
					},
					"7%": {
						transform: "translateX(-7px) rotate(-3deg)"
					},
					"15%": {
						transform: "translateX(3px) rotate(3deg)"
					},
					"22%": {
						transform: "translateX(-3px) rotate(-1.8deg)"
					},
					"30%": {
						transform: "translateX(2px) rotate(1.2deg)"
					},
					"38%": {
						transform: "translateX(-1px) rotate(-0.6deg)"
					}
				}
			},
			animation: {
				"kenburns-left": "kenburns-left 15s 3s linear both",
				"kenburns-right-invert": "kenburns-right-invert 15s linear both",
				wobble : "wobble 3s both infinite"
			},
		},
	},

	plugins: [require("daisyui")],

	daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
        },
      },
    ],
  }
}
