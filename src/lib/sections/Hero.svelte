<script>
	import { goto } from '$app/navigation';
	import earth from '$assets/images/earth.png';
</script>

<div class="bg-black lg:p-40 sm:p-0 min-h-screen w-full relative flex items-center">
	<img
		class="object-cover sm:object-top absolute top-0 left-0 z-0 w-full h-full sm:brightness-50 md:brightness-50"
		src={earth}
		alt="globe from space"
	/>
	<div class="sm:w-5/6 w-1/2 h-full z-20 sm:ml-5 md:ml-10">
		<h1 class="text-5xl sm:text-4xl text-white">MAPPING THE PLASTIC THREAT</h1>

		<div class="w-2/3 h-[4px] bg-secondary-500 mt-20" />

		<h1 class="text-4xl sm:text-2xl sm:w-2/5 max-w-[700px] text-secondary-500 mt-20 sm:mt-5" style="font-weight: 500">
			REAL-TIME MAPPING OF PRESENT MARINE DEBRIS BY LEVERAGING SATELLITE IMAGERY
		</h1>

		<button
			class="btn h-[90px] w-[320px] sm:btn h-[75px] sm:w-[270px] bg-white mt-20 sm:mt-20"
			style="border-radius: 28px;"
			on:click={() => goto('/map')}
		>
			<h1 class="text-black text-3xl sm:text-2xl font-bold">VIEW PROTOTYPE</h1>
		</button>
	</div>
</div>
