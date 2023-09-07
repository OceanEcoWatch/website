import adapter from '@zugriff/adapter-sveltekit';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { SassAlias } from 'svelte-preprocess-sass-alias-import';
import path from 'path';

export const alias = new SassAlias({
	$styles: ['src', 'helpers', 'styles']
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess()],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$assets: path.join('src', 'assets'),
			$scripts: path.join('src', 'helpers', 'scripts'),
			$styles: path.join('src', 'helpers', 'styles'),
			$i18n: path.join('src', 'i18n'),
			$lib: path.join('src', 'lib'),
		},
	}
};
export default config;