/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			colors: {
				'ScissorsGradientStart': 'hsl(39, 89%, 49%)',
				'ScissorsGradientEnd': 'hsl(40, 84%, 53%)',
				'PaperGradientStart': 'hsl(230, 89%, 62%)',
				'PaperGradientEnd': 'hsl(230, 89%, 65%)',
				'RockGradientStart': 'hsl(349, 71%, 52%)',
				'RockGradientEnd': 'hsl(349, 70%, 56%)',
				'LizardGradientStart': 'hsl(261, 73%, 60%)',
				'LizardGradientEnd': 'hsl(261, 72%, 63%)',
				'SpockGradientStart': 'hsl(189, 59%, 53%)',
				'SpockGradientEnd': 'hsl(189, 58%, 57%)',
	
				'DarkText': 'hsl(229, 25%, 31%)',
				'ScoreText': 'hsl(229, 64%, 46%)',
				'HeaderOutline': 'hsl(217, 16%, 45%)',
	
				'BackgroundGradientStart': 'hsl(214, 47%, 23%)',
				'BackgroundGradientEnd': 'hsl(237, 49%, 15%)',
			},
			boxShadow: {
        'outer-down': '0 7px',
				"inner-top": "inset 0 7px rgb(0 0 0 / 0.1)",
				'outer-down-winner': '0px 0px 2px 30px hsl(231deg 34% 29% / 65%), 0px 0px 2px 70px hsl(231deg 34% 29% / 40%), 0px 0px 2px 115px hsl(231deg 34% 29% / 20%)'
      }
		}
	},
	plugins: [],
}
