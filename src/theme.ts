import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #112337
		'--color-primary-50': '219 222 225', // #dbdee1
		'--color-primary-100': '207 211 215', // #cfd3d7
		'--color-primary-200': '196 200 205', // #c4c8cd
		'--color-primary-300': '160 167 175', // #a0a7af
		'--color-primary-400': '88 101 115', // #586573
		'--color-primary-500': '17 35 55', // #112337
		'--color-primary-600': '15 32 50', // #0f2032
		'--color-primary-700': '13 26 41', // #0d1a29
		'--color-primary-800': '10 21 33', // #0a1521
		'--color-primary-900': '8 17 27', // #08111b
		// secondary | #5BA3CB
		'--color-secondary-50': '230 241 247', // #e6f1f7
		'--color-secondary-100': '222 237 245', // #deedf5
		'--color-secondary-200': '214 232 242', // #d6e8f2
		'--color-secondary-300': '189 218 234', // #bddaea
		'--color-secondary-400': '140 191 219', // #8cbfdb
		'--color-secondary-500': '91 163 203', // #5BA3CB
		'--color-secondary-600': '82 147 183', // #5293b7
		'--color-secondary-700': '68 122 152', // #447a98
		'--color-secondary-800': '55 98 122', // #37627a
		'--color-secondary-900': '45 80 99', // #2d5063
		// tertiary | #FF8845
		'--color-tertiary-50': '255 237 227', // #ffede3
		'--color-tertiary-100': '255 231 218', // #ffe7da
		'--color-tertiary-200': '255 225 209', // #ffe1d1
		'--color-tertiary-300': '255 207 181', // #ffcfb5
		'--color-tertiary-400': '255 172 125', // #ffac7d
		'--color-tertiary-500': '255 136 69', // #FF8845
		'--color-tertiary-600': '230 122 62', // #e67a3e
		'--color-tertiary-700': '191 102 52', // #bf6634
		'--color-tertiary-800': '153 82 41', // #995229
		'--color-tertiary-900': '125 67 34', // #7d4322
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #495a8f
		'--color-surface-50': '228 230 238', // #e4e6ee
		'--color-surface-100': '219 222 233', // #dbdee9
		'--color-surface-200': '210 214 227', // #d2d6e3
		'--color-surface-300': '182 189 210', // #b6bdd2
		'--color-surface-400': '128 140 177', // #808cb1
		'--color-surface-500': '73 90 143', // #495a8f
		'--color-surface-600': '66 81 129', // #425181
		'--color-surface-700': '55 68 107', // #37446b
		'--color-surface-800': '44 54 86', // #2c3656
		'--color-surface-900': '36 44 70' // #242c46
	}
};
