<script lang="ts">
	import { goto } from '$app/navigation';
	import prototypeHorizontal from '$assets/images/prototypeHorizontal.png';
	import prototypeVertical from '$assets/images/prototypeVertical.png';
	import { onMount } from 'svelte';
	let isSmScreen: boolean;
	onMount(() => {
		if (window.screen.width) {
			if (window.screen.width > 767) {
				isSmScreen = false;
			} else {
				isSmScreen = true;
			}
		}
	});
</script>

{#if !isSmScreen}
	<div class="bg-white w-full h-full relative">
		<div class="absolute w-1/2 top-1/2 right-0 mr-10 transform -translate-y-1/2">
			<div class="w-3/4 max-w-[1500px]">
				<h1 class="text-white text-3xl sm:text-3xl sm:mt-20" style="font-weight: 500">OCEAN ECO WATCH PROTOTYPE</h1>
				<p class="text-white mt-10">
					We've built a small prototype to detect marine debris on the coast of Durban located in South Africa where a
					flood event on the 18th of April in 2019 washed out a lot of plastic. We are using data from the sentinel-2
					satellite taken six days post-event. Our prototype highlights potential locations of floating plastic. Each
					point on the map corresponds to the probability of present marine debris and represents an area spanning 10x10
					m².
				</p>

				<button class="btn btn-xl bg-white mt-20" on:click={() => goto('/map')} on:keypress={() => goto('/map')}
					><h1 class="font-bold">VIEW PROTORYPE</h1></button
				>
			</div>
		</div>
		<div class="">
			<img
				src={prototypeHorizontal}
				class="object-cover object-left object-bottom w-full"
				alt="screenshot of our prototype"
			/>
		</div>
	</div>
{/if}

{#if isSmScreen}
	<div class="h-screen w-full relative">
		<div class="absolute top-0 left-0 z-50 px-5 pt-32">
			<h1 class="text-white text-3xl text-center" style="font-weight: 500">OCEAN ECO WATCH PROTOTYPE</h1>
			<p class="text-white mt-10 text-center">
				We've built a small prototype to detect marine debris on the coast of Durban located in South Africa where a
				flood event on the 18th of April in 2019 washed out a lot of plastic. We are using data from the sentinel-2
				satellite taken six days post-event. Our prototype highlights potential locations of floating plastic. Each
				point on the map corresponds to the probability of present marine debris and represents an area spanning 10x10
				m².
			</p>
			<div class="w-full flex flex-col items-center mt-10">
				<button class="btn btn-xl bg-white" on:click={() => goto('/map')} on:keypress={() => goto('/map')}
					><h1>VIEW PROTORYPE</h1></button
				>
			</div>
		</div>

		<img
			src={prototypeVertical}
			alt="screenshot of our prototype"
			class="absolute object-cover w-full h-full z-0 brightness-50"
		/>
	</div>
{/if}
