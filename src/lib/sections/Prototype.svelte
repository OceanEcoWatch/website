<script lang="ts">
	import { goto } from '$app/navigation';
	import prototype from '$assets/images/prototype.png';
</script>

<div class="bg-white w-full h-screen relative">
	<div class="absolute w-1/3 top-40 right-20">
		<h1 class="text-white text-3xl sm:text-3xl" style="font-weight: 500">
			OCEAN ECO WATCH PROTOTYPE
		</h1>
		<p class="text-white mt-10">
			We've built a small prototype to detect marine debris on the coast of Durban located in South
			Africa where a flood event on the 18th of April in 2019 washed out a lot of plastic. We are
			using data from the sentinel-2 satellite taken six days post-event. Our prototype highlights
			potential locations of floating plastic. Each point on the map corresponds to the probability
			of present marine debris and represents an area spanning 10x10 m².
		</p>
		<button
			class="btn btn-xl bg-white mt-20"
			on:click={() => goto('/map')}
			on:keypress={() => goto('/map')}><h1>VIEW PROTORYPE</h1></button
		>
	</div>
	<img
		src={prototype}
		class="object-cover object-left w-full h-full"
		alt="screenshot of our prototype"
	/>
</div>
