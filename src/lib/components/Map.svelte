<script lang="ts">
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import 'mapbox-gl/dist/mapbox-gl.css';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	let dateIndex: number = 0;
	let dates: string[] = ['8. Sep', '12. Aug', '1. Aug', '20. Jun', '14. Jul'];

	let mapContainer: HTMLDivElement;
	let map: mapboxgl.Map;

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

	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'top'
	};

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
</script>

<div class="relative h-full w-full">
	<div class="h-full w-full" id="map" bind:this={mapContainer} />
</div>
