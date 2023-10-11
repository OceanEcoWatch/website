<script>
	import { goto } from '$app/navigation';
	import earth from '$assets/images/earth.png';
</script>

<div class="bg-black p-20 sm:p-10 min-h-screen w-full relative">
	<img
		class="object-cover sm:object-top absolute top-0 left-0 z-0 w-full h-full"
		src={earth}
		alt="globe from space"
	/>
	<div class="sm:w-5/6 w-1/2 h-full z-10 relative mt-20 sm:mt-0">
		<h1 class="text-5xl sm:text-4xl text-white">MAPPING THE PLASTIC THREAT</h1>

		<div class="w-2/3 h-[4px] bg-secondary-500 mt-20 sm:mt-10" />

		<h1 class="text-3xl sm:text-2xl sm:w-2/3 text-secondary-500 mt-20 sm:mt-5">
			REAL-TIME MAPPING OF PRESENT MARINE DEBRIS BY LEVERAGING SATELLITE IMAGERY
		</h1>

		<button class="btn h-[75px] w-[250px] bg-white mt-20" on:click={() => goto('/map')}>
			<h1 class="text-black text-2xl font-bold">VIEW PROTOTYPE</h1>
		</button>
	</div>
</div>
