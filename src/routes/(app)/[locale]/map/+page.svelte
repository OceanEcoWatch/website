<script lang="ts">
	import arrowBackIcon from '$assets/icons/arrowBack.svg';
	import infoIcon from '$assets/icons/infoIcon.svg';
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import 'mapbox-gl/dist/mapbox-gl.css';
	//import type mapboxgl from 'mapbox-gl';
	import { env } from '$env/dynamic/public';
	import type { PageData } from './$types';
	import Legend from '$lib/components/Legend.svelte';
	import { type PopupSettings, popup } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { pollutionColors } from '$assets/pollutionColorPalette';

	export let data: PageData;
	const geoJson = data.geoJson.testData as GeoJSON.FeatureCollection;

	let state: 'start' | 'discover' = 'start';

	let dateIndex: number = 0;
	let dates: string[] = ['8. Sep', '12. Aug', '1. Aug', '20. Jun', '14. Jul'];

	let center: [number, number] = [0, 0];
	let interactive: boolean = false;
	let hash: boolean;

	let mapContainer: HTMLDivElement;
	let map: mapboxgl.Map;

	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'left'
	};

	function toggleMapInteractions(map: mapboxgl.Map) {
		if (state === 'discover') {
			map.scrollZoom.enable();
			map.boxZoom.enable();
			map.dragRotate.enable();
			map.dragPan.enable();
			map.keyboard.enable();
			map.doubleClickZoom.enable();
			map.touchZoomRotate.enable();
		} else if (state === 'start') {
			map.scrollZoom.disable();
			map.boxZoom.disable();
			map.dragRotate.disable();
			map.dragPan.disable();
			map.keyboard.disable();
			map.doubleClickZoom.disable();
			map.touchZoomRotate.disable();
		}
	}

	function startPrototype() {
		setTimeout(() => {
			map.flyTo({
				center: [31.06918547476504, -29.88339810456575],
				essential: true,
				zoom: 12,
				speed: 1,
				curve: 1
			});
			state = 'discover';
			map.on('moveend', () => {
				toggleMapInteractions(map);
			});
		}, 1000);
	}

	onMount(async () => {
		console.log(env.PUBLIC_MAPBOX_TOKEN);
		hash = true;

		mapboxgl.accessToken =
			'pk.eyJ1IjoiY3lwaGVyLWFkbWluIiwiYSI6ImNsamZ1OGo2NjA0anczcXRnbWI5ancyYm8ifQ.n7YJMwH9EdAWX90He87j-w';

		map = new mapboxgl.Map({
			container: 'map',
			//@ts-ignore
			projection: 'globe',
			//style: env.PUBLIC_MAPBOX_STYLE,
			style: 'mapbox://styles/mapbox/satellite-v9',
			attributionControl: false,
			logoPosition: 'bottom-left',
			interactive: true,
			zoom: 1,
			center: [0, 0]
		});

		toggleMapInteractions(map);
		startPrototype();

		map.on('style.load', () => {
			map.setFog({
				color: 'rgb(186, 210, 235)', // Lower atmosphere
				'high-color': 'rgb(36, 92, 223)', // Upper atmosphere
				'horizon-blend': 0.02, // Atmosphere thickness (default 0.2 at low zooms)
				'space-color': 'rgb(11, 11, 25)', // Background color
				'star-intensity': 0.6 // Background star brightness (default 0.35 at low zoooms )
			});
		});

		map.on('load', () => {
			map.addSource('plastic', {
				type: 'geojson',
				data: geoJson
				//cluster: true
			});

			map.addLayer({
				id: 'plastic-heat',
				type: 'heatmap',
				source: 'plastic',
				//maxzoom: 9,
				paint: {
					// increase weight as diameter breast height increases
					'heatmap-weight': {
						property: 'pixel_value',
						type: 'exponential',
						stops: [
							[1, 0],
							[62, 1]
						]
					},
					// increase intensity as zoom level increases
					'heatmap-intensity': {
						stops: [
							[11, 1],
							[15, 3]
						]
					},
					// use sequential color palette to use exponentially as the weight increases
					'heatmap-color': [
						'interpolate',
						['linear'],
						['heatmap-density'],

						0,
						'rgba(255, 255, 0, 0)',
						0.1,
						pollutionColors['pollution-100'],
						0.2,
						pollutionColors['pollution-200'],
						// 0.3,
						// pollutionColors['pollution-300'],
						// 0.4,
						// pollutionColors['pollution-400'],
						0.5,
						pollutionColors['pollution-500'],
						0.6,
						pollutionColors['pollution-600']
						// 0.7,
						// pollutionColors['pollution-700'],
						// 0.8,
						// pollutionColors['pollution-800'],
						// 0.9,
						// pollutionColors['pollution-900']
					],
					// increase radius as zoom increases
					'heatmap-radius': {
						stops: [
							[11, 15],
							[15, 20]
						]
					},
					// decrease opacity to transition into the circle layer
					'heatmap-opacity': {
						default: 1,
						stops: [
							[14, 1],
							[15, 0]
						]
					}
				}
			});

			map.addLayer({
				id: 'plastic-point',
				type: 'circle',
				source: 'plastic',
				minzoom: 7,

				paint: {
					'circle-radius': {
						property: 'pixel_value',
						type: 'exponential',
						stops: [
							[{ zoom: 15, value: 1 }, 2],
							[{ zoom: 15, value: 100 }, 5],
							[{ zoom: 22, value: 1 }, 15],
							[{ zoom: 22, value: 100 }, 20]
						]
					},
					'circle-color': {
						property: 'pixel_value',
						type: 'exponential',
						stops: [
							[0, pollutionColors['pollution-100']],
							[1, pollutionColors['pollution-200']],
							[2, pollutionColors['pollution-300']],
							[3, pollutionColors['pollution-400']],
							[5, pollutionColors['pollution-500']],
							[10, pollutionColors['pollution-600']],
							[25, pollutionColors['pollution-700']],
							[50, pollutionColors['pollution-800']],
							[100, pollutionColors['pollution-900']]
						]
					},
					// 'circle-stroke-color': 'white',
					// 'circle-stroke-width': 0.1,
					'circle-opacity': {
						stops: [
							[14, 0],
							[15, 1]
						]
					}
				}
			});
		});
	});
</script>

<div class="absolute bottom-5 right-2 flex flex-col items-center z-10">
	<Legend />
</div>

<div class="absolute top-2 right-2 z-10">
	<button class="btn-icon btn-xl bg-white" use:popup={popupClick}
		><img src={infoIcon} alt="info icon" class="w-[25px] h-[25px]" /></button
	>
</div>

<div class="card p-4 bg-white z-10 w-3/5" data-popup="popupClick">
	<p>
		This is a prototype of the <span
			on:click={() => goto('/')}
			on:keypress={() => goto('/')}
			role="link"
			tabindex="0"
			class="anchor font-bold">Ocean Eco Watch</span
		>. The prototype detects marine debris on the coast of Durban located in South Africa where a
		flood event on the 18th of April in 2019 washed out a lot of plastic. We are using data from the
		sentinel-2 satellite taken six days post-event. Our prototype highlights potential locations of
		floating plastic. Each point on the map corresponds to the probability of present marine debris
		and represents an area spanning 10x10 m².
	</p>
	<div class="arrow variant-primary-500" />
</div>

<!-- <div
	class="absolute top-0 z-10 w-screen flex flex-col items-center"
	in:blur={{ delay: 500, duration: 400 }}
>
	<h1 class="text-white">{dates[dateIndex]}</h1>
	<RangeSlider name="range-slider" bind:value={dateIndex} max={4} step={1} />
</div> -->

<div class="absolute top-2 left-2 z-10">
	<button class="btn-icon bg-white" on:click={() => goto('/')}
		><img alt="arrow back icon" src={arrowBackIcon} /></button
	>
</div>

<div class="relative h-full">
	<div class="h-full" id="map" bind:this={mapContainer} />
</div>
