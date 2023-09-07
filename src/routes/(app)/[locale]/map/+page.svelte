<script lang="ts">
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import 'mapbox-gl/dist/mapbox-gl.css';
	//import type mapboxgl from 'mapbox-gl';
	import { env } from '$env/dynamic/public';
	import type { PageData } from './$types';
	import Legend from '$lib/components/Legend.svelte';
	import { theme } from '../../../../theme';

	console.log(theme.properties['--color-primary-50']);

	export let data: PageData;
	const geoJson = data.geoJson.testData as GeoJSON.FeatureCollection;

	let center: [number, number] = [0, 0];
	let interactive: boolean;
	let hash: boolean;

	let mapContainer: HTMLDivElement;
	let map: mapboxgl.Map;

	function convertToRGB(inputString: string): string {
		// Split the input string into an array of integers
		const rgbValues: number[] = inputString.split(' ').map(Number);

		// Check if there are exactly three values
		if (rgbValues.length !== 3) {
			throw new Error('Input string must contain three space-separated values.');
		}

		// Format the RGB values into the desired format
		const outputString: string = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;

		return outputString;
	}

	onMount(async () => {
		console.log(geoJson);
		interactive = true;
		hash = true;

		mapboxgl.accessToken = env.PUBLIC_MAPBOX_TOKEN;
		map = new mapboxgl.Map({
			container: 'map',
			//@ts-ignore
			projection: 'mercator',
			//style: env.PUBLIC_MAPBOX_STYLE,
			style: 'mapbox://styles/mapbox/streets-v12',
			attributionControl: false,
			interactive: interactive,
			zoom: 1
		});

		map.on('load', () => {
			map.addSource('plastic', {
				type: 'geojson',
				data: geoJson
				//cluster: true
			});

			map.addLayer(
				{
					id: 'earthquakes-heat',
					type: 'heatmap',
					source: 'plastic',
					maxzoom: 9,
					paint: {
						// Increase the heatmap weight based on frequency and property magnitude
						'heatmap-weight': ['interpolate', ['linear'], ['get', 'pixel_value'], 0, 0, 6, 1],
						// Increase the heatmap color weight weight by zoom level
						// heatmap-intensity is a multiplier on top of heatmap-weight
						'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 3],
						// Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
						// Begin color ramp at 0-stop with a 0-transparancy color
						// to create a blur-like effect.
						'heatmap-color': [
							'interpolate',
							['linear'],
							['heatmap-density'],
							0,
							'rgba(33,102,172,0)',
							1,
							convertToRGB(theme.properties['--color-primary-100']),
							18,
							convertToRGB(theme.properties['--color-primary-200']),
							24,
							convertToRGB(theme.properties['--color-primary-300']),
							32,
							convertToRGB(theme.properties['--color-primary-400']),
							40,
							convertToRGB(theme.properties['--color-primary-500']),
							48,
							convertToRGB(theme.properties['--color-primary-600']),
							56,
							convertToRGB(theme.properties['--color-primary-700']),
							64,
							convertToRGB(theme.properties['--color-primary-800']),
							72,
							convertToRGB(theme.properties['--color-primary-900'])
						],
						// Adjust the heatmap radius by zoom level
						'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 9, 20],
						// Transition from heatmap to circle layer by zoom level
						'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0]
					}
				},
				'waterway-label'
			);

			map.addLayer(
				{
					id: 'earthquakes-point',
					type: 'circle',
					source: 'plastic',
					minzoom: 7,
					paint: {
						// Size circle radius by earthquake magnitude and zoom level
						'circle-radius': [
							'interpolate',
							['linear'],
							['zoom'],
							7,
							['interpolate', ['linear'], ['get', 'pixel_value'], 1, 1, 6, 4],
							16,
							['interpolate', ['linear'], ['get', 'mpixel_valueag'], 1, 5, 6, 50]
						],
						// Color circle by earthquake magnitude
						'circle-color': [
							'interpolate',
							['linear'],
							['get', 'mag'],
							1,
							'rgba(33,102,172,0)',
							2,
							'rgb(103,169,207)',
							3,
							'rgb(209,229,240)',
							4,
							'rgb(253,219,199)',
							5,
							'rgb(239,138,98)',
							6,
							'rgb(178,24,43)'
						],
						'circle-stroke-color': 'white',
						'circle-stroke-width': 1,
						// Transition from heatmap to circle layer by zoom level
						'circle-opacity': ['interpolate', ['linear'], ['zoom'], 7, 0, 8, 1]
					}
				},
				'waterway-label'
			);
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
