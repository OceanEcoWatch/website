import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { myCustomTheme } from './src/theme';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		screens: {
			sm: { min: '0px', max: '767px' },
			// => @media (min-width: 640px and max-width: 767px) { ... }

			md: { min: '768px', max: '1750px' },
			// => @media (min-width: 768px and max-width: 1023px) { ... }
			
			md2: { min: '768px', max: '1250px' },

			lg: { min: '1750px', max: '10000px' },
			// => @media (min-width: 1024px and max-width: 1279px) { ... }
		},

		extend: {
			colors: {
				'pollution-100': '#FFF323',
				'pollution-200': '#FFE81F',
				'pollution-300': '#FFDB0C',
				'pollution-400': '#FFB800',
				'pollution-500': '#FE9400',
				'pollution-600': '#FD7104',
				'pollution-700': '#FC4E09',
				'pollution-800': '#FB2B0F',
				'pollution-900': '#F90716',
				'team-card': '#1A1F21'
			},

			shadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)'
			},
			fontSize: {
				'lg-p': '1.5rem', // Adjust the font size value as needed
				'small': '0.8rem'
			  },
		}
	},
	plugins: [
		forms,
		skeleton({
			themes: {
				custom: [myCustomTheme]
			}
		})
	]
} satisfies Config;
