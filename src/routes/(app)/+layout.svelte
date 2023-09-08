<script lang="ts">
	import '../../app.postcss';

	import type { LayoutData } from './$types';

	import { setLocale } from '$i18n/i18n-svelte';
	import { loadLocale } from '$i18n/i18n-util.sync';

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	export let data: LayoutData;

	loadLocale(data.locale);
	setLocale(data.locale);
</script>

<slot />
