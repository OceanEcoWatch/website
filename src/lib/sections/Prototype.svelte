<script lang="ts">
	import { goto } from '$app/navigation';
	import prototypeHorizontal from '$assets/images/prototypeHorizontal.png';
	import prototypeVertical from '$assets/images/prototypeVertical.png';
	import { onMount } from 'svelte';
	let width = 0;

	onMount(() => {
		width = window.innerWidth;

		const handleResize = () => {
			width = window.innerWidth;
			console.log(width);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

{#if width >= 0}
	<div class="w-full h-full relative bg-center bg-cover flex" style="background-image: url({prototypeHorizontal})">
		<div class="w-1/2" />
		<div class="lg:w-1/2 lg:py-72 md:py-52 sm:py-40">
			<div class="w-3/4 max-w-[1000px]">
				<h1 class="text-white text-3xl sm:text-3xl" style="font-weight: 500">OCEAN ECO WATCH PROTOTYPE</h1>
				<p class="text-white mt-10">
					We've built a small prototype to detect marine debris on the coast of Durban located in South Africa where a
					flood event on the 18th of April in 2019 washed out a lot of plastic. We are using data from the sentinel-2
					satellite taken six days post-event. Our prototype highlights potential locations of floating plastic. Each
					point on the map corresponds to the probability of present marine debris and represents an area spanning 10x10
					m².
				</p>

				<button class="btn btn-xl bg-white mt-20" on:click={() => goto('/map')} on:keypress={() => goto('/map')}>
					<h1 class="font-bold">VIEW PROTORYPE</h1>
				</button>
			</div>
		</div>
	</div>
{/if}
