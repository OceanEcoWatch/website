<script lang="ts">
	import '../../app.postcss';

	import type { LayoutData } from './$types';

	import { setLocale } from '$i18n/i18n-svelte';
	import { loadLocale } from '$i18n/i18n-util.sync';

	export let data: LayoutData;

	loadLocale(data.locale);
	setLocale(data.locale);
</script>

<slot />
