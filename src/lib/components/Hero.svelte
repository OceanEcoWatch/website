<script lang="ts">
	import mapboxgl from 'mapbox-gl';
	import 'mapbox-gl/dist/mapbox-gl.css';
	//import type mapboxgl from 'mapbox-gl';
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	import LL from '$i18n/i18n-svelte';
	import { goto } from '$app/navigation';
	import { blur } from 'svelte/transition';

	let mapContainer: HTMLDivElement;
	let map: mapboxgl.Map;

	onMount(() => {
		mapboxgl.accessToken = env.PUBLIC_MAPBOX_TOKEN;
		map = new mapboxgl.Map({
			container: 'map',
			//@ts-ignore
			projection: 'globe',
			//style: env.PUBLIC_MAPBOX_STYLE,
			style: 'mapbox://styles/mapbox/satellite-v9',
			interactive: false,
			attributionControl: false,
			zoom: 1
		});

		map.on('style.load', () => {
			map.setFog({
				//range: [0.8, 8],
				//color: '#dc9f9f',
				'horizon-blend': 0.1,
				'high-color': '#f2f2f2',
				'space-color': '#000000',
				'star-intensity': 0.7
			});
		});

		// When animation is complete, start spinning if there is no ongoing interaction
		map.on('moveend', () => {
			spinGlobe();
		});

		spinGlobe();
	});

	function spinGlobe() {
		const secondsPerRevolution = 120;
		const maxSpinZoom = 5;
		const slowSpinZoom = 3;
		const userInteracting = false;
		const spinEnabled = true;

		const zoom = map.getZoom();
		if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
			let distancePerSecond = 360 / secondsPerRevolution;
			if (zoom > slowSpinZoom) {
				// Slow spinning at higher zooms
				const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
				distancePerSecond *= zoomDif;
			}
			const center = map.getCenter();
			center.lng -= distancePerSecond;
			// Smoothly animate the map over one second.
			// When this animation is complete, it calls a 'moveend' event.
			map.easeTo({ center, duration: 1000, easing: (n) => n });
		}
	}

	function handleCheckoutPrototypeButton() {
		map.flyTo({
			center: [31.06918547476504, -29.88339810456575],
			essential: true,
			zoom: 12,
			speed: 1,
			curve: 1
		});

		map.on('moveend', () => {
			goto('/map');
		});
	}
</script>

<div class="relative h-full">
	<div class="h-full" id="map" bind:this={mapContainer} />
</div>

<div class="absolute top-20 w-screen">
	<h1 class="text-white text-center">{$LL.HI()}</h1>
</div>

<div class="absolute bottom-20 text-white w-screen flex flex-col items-center">
	<p>mission statement</p>

	<button class="btn variant-filled-primary" on:click={handleCheckoutPrototypeButton}
		>check out the prototype</button
	>
</div>
