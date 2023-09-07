<script lang="ts">
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import 'mapbox-gl/dist/mapbox-gl.css';
	//import type mapboxgl from 'mapbox-gl';
	import { env } from '$env/dynamic/public';
	import type { PageData } from './$types';
	import Legend from '$lib/components/Legend.svelte';

	export let data: PageData;

	let center: [number, number] = [0, 0];
	let interactive: boolean;
	let hash: boolean;

	let mapContainer: HTMLDivElement;
	let map: mapboxgl.Map;

	onMount(async () => {
		interactive = true;
		hash = true;

		mapboxgl.accessToken = env.PUBLIC_MAPBOX_TOKEN;
		map = new mapboxgl.Map({
			container: 'map',
			//@ts-ignore
			projection: 'mercator',
			style: env.PUBLIC_MAPBOX_STYLE,
			attributionControl: false,
			interactive: interactive,
			center: center
			//maxBounds: bounds
		});
	});
</script>

<!-- <Legend /> -->

<div class="absolute bottom-0 right-0 z-10">
	<Legend />
</div>

<div class="relative h-full">
	<div class="h-full" id="map" bind:this={mapContainer} />
</div>
