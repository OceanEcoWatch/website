<script lang="ts">
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import 'mapbox-gl/dist/mapbox-gl.css';
	//import type mapboxgl from 'mapbox-gl';
	import { env } from '$env/dynamic/public';
	import type { PageData } from './$types';
	import Legend from '$lib/components/Legend.svelte';
	import { myCustomTheme } from '../../../../theme';
	import { RangeSlider } from '@skeletonlabs/skeleton';
	import { blur } from 'svelte/transition';

	export let data: PageData;
	const geoJson = data.geoJson.testData as GeoJSON.FeatureCollection;

	let dateIndex: number = 0;
	let dates: string[] = ['8. Sep', '12. Aug', '1. Aug', '20. Jun', '14. Jul'];

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
		interactive = true;
		hash = true;

		mapboxgl.accessToken = env.PUBLIC_MAPBOX_TOKEN;
		map = new mapboxgl.Map({
			container: 'map',
			//@ts-ignore
			projection: 'mercator',
			//style: env.PUBLIC_MAPBOX_STYLE,
			style: 'mapbox://styles/mapbox/satellite-v9',
			attributionControl: false,
			interactive: interactive,
			zoom: 12,
			center: [31.06918547476504, -29.88339810456575]
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
						convertToRGB(myCustomTheme.properties['--color-primary-100']),
						18,
						convertToRGB(myCustomTheme.properties['--color-primary-200']),
						24,
						convertToRGB(myCustomTheme.properties['--color-primary-300']),
						32,
						convertToRGB(myCustomTheme.properties['--color-primary-400']),
						40,
						convertToRGB(myCustomTheme.properties['--color-primary-500']),
						48,
						convertToRGB(myCustomTheme.properties['--color-primary-600']),
						56,
						convertToRGB(myCustomTheme.properties['--color-primary-700']),
						64,
						convertToRGB(myCustomTheme.properties['--color-primary-800']),
						72,
						convertToRGB(myCustomTheme.properties['--color-primary-900'])
					],
					// Adjust the heatmap radius by zoom level
					'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 9, 20],
					// Transition from heatmap to circle layer by zoom level
					'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0]
				}
			});

			map.addLayer({
				id: 'plastic-point',
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
						['interpolate', ['linear'], ['get', 'pixel_valuea'], 1, 5, 6, 50]
					],
					'circle-color': [
						'interpolate',
						['linear'],
						['get', 'pixel_value'],
						0,
						'rgba(33,102,172,0)',
						1,
						convertToRGB(myCustomTheme.properties['--color-primary-100']),
						18,
						convertToRGB(myCustomTheme.properties['--color-primary-200']),
						24,
						convertToRGB(myCustomTheme.properties['--color-primary-300']),
						32,
						convertToRGB(myCustomTheme.properties['--color-primary-400']),
						40,
						convertToRGB(myCustomTheme.properties['--color-primary-500']),
						48,
						convertToRGB(myCustomTheme.properties['--color-primary-600']),
						56,
						convertToRGB(myCustomTheme.properties['--color-primary-700']),
						64,
						convertToRGB(myCustomTheme.properties['--color-primary-800']),
						72,
						convertToRGB(myCustomTheme.properties['--color-primary-900'])
					],
					'circle-stroke-color': 'white',
					'circle-stroke-width': 1,
					'circle-opacity': ['interpolate', ['linear'], ['zoom'], 7, 0, 8, 1]
				}
			});
		});
	});
</script>

<div class="absolute bottom-0 right-0 z-10" in:blur={{ delay: 500, duration: 400 }}>
	<Legend />
</div>

<div
	class="absolute top-0 z-10 w-screen flex flex-col items-center"
	in:blur={{ delay: 500, duration: 400 }}
>
	<h1 class="text-white">{dates[dateIndex]}</h1>
	<RangeSlider name="range-slider" bind:value={dateIndex} max={4} step={1} />
</div>

<div class="relative h-full" in:blur={{ delay: 500, duration: 400 }}>
	<div class="h-full" id="map" bind:this={mapContainer} />
</div>
