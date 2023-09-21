<script lang="ts">
	import mapboxgl from 'mapbox-gl';
	import 'mapbox-gl/dist/mapbox-gl.css';
	//import type mapboxgl from 'mapbox-gl';
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	import LL from '$i18n/i18n-svelte';
	import { goto } from '$app/navigation';
	import Map from './Map.svelte';

	let prototypeView: boolean = false;
	let mapContainer: HTMLDivElement;
	let map: mapboxgl.Map;

	onMount(() => {
		mapboxgl.accessToken =
			'pk.eyJ1IjoiY3lwaGVyLWFkbWluIiwiYSI6ImNsamZ1OGo2NjA0anczcXRnbWI5ancyYm8ifQ.n7YJMwH9EdAWX90He87j-w';
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

<div class="relative w-screen h-screen flex flex-col items-center">
	{#if !prototypeView}
		<div class="absolute top-20 text-center text-white z-10">
			<h1 class="text-white text-3xl mb-5">Mapping the Plastic Threat</h1>
			<p>
				Leveraging satellite imagery for real-time insights, closing the marine pollution data gap
			</p>
		</div>
	{/if}
	<!-- <div class="h-full w-full" id="map" bind:this={mapContainer} /> -->

	<Map />

	{#if !prototypeView}
		<div class="absolute bottom-20 text-white w-screen flex flex-col items-center">
			<button class="btn bg-white" on:click={handleCheckoutPrototypeButton}>
				<h1 class="text-4xl text-primary-500 font-bold">PROTOTYPE</h1>
			</button>
		</div>
	{/if}
</div>
