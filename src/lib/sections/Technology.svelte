<script lang="ts">
	import graph from '$assets/images/graph.png';
</script>

<div class="w-full bg-primary-500 flex sm:flex-col pl-10 pr-10 pt-20 pb-20">
	<div class="w-1/2 sm:w-full">
		<img class="" src={graph} alt="graphs showing different refelction patterns of plastic" />
	</div>
	<div class="w-1/2 sm:w-full sm:mt-10">
		<h1 class="text-3xl text-white"  style="font-weight: 500">HOW THE DETECTION WORKS</h1>
		<p class="mt-10 w-5/6 sm:w-full sm:mt-10 text-white">
			We primarily leverage Sentinel-2 imagery, accessible through SentinelHub, as our core data
			source. This resource offers a remarkable spectral resolution, spanning 13 distinct bandwidths
			from visible to infrared. Our approach is grounded in the latest open-source scientific
			publications, which have shared their findings through open-source models. Within these
			models, neural networks, notably the Unet++ model, excel at discerning the unique reflection
			and absorption patterns of plastic and marine debris in contrast to water.
		</p>
	</div>
</div>
