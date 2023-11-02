<script lang="ts">
	import graph from '$assets/images/graph.png';
</script>

<div class="bg-primary-500">
	<div
		class="h-full flex sm:flex-col md:flex-col sm:px-10 sm:pt-32 pt-40 pb-40 mx-auto lg:px-40 md:px-10"
		style="max-width:2500px"
	>
		<div class="flex flex-col w-4/5 sm:w-full md:w-4/5 h-full md:pb-32 md:mx-auto">
			<div class="">
				<h1 class="font-bold text-3xl mb-10 text-white">HOW THE DETECTION WORKS</h1>
			</div>

			<div class="infotext flex items-start sm:pb-32">
				<p class="text-white">
					We primarily leverage Sentinel-2 imagery, accessible through SentinelHub, as our core data source. This
					resource offers a remarkable spectral resolution, spanning 13 distinct bandwidths from visible to infrared.
					Our approach is grounded in the latest open-source scientific publications, sharing their findings through
					open-source models. Within these models, neural networks, notably the Unet++ model, excel at discerning the
					unique reflection and absorption patterns of plastic and marine debris in contrast to water.
				</p>
			</div>
		</div>

		<div class="graph h-full w-full flex flex-col lg:items-center md:w-4/5 mx-auto">
			<h1 class="font-bold text-3xl mb-16 text-white">NUMBER OF MICROPLASTIC PER CUBIC METER (N/m³)</h1>
			<img
				class="w-[500px] md:w-[700px] lg:w-[700px]"
				src={graph}
				alt="statistic that shows the increase of plastic in our oceans by year and weight"
			/>
			<div class="mt-5 items-end" style="text-align: left;">
				<a class="anchor text-white text-base" tabindex="0" href="https://www.nature.com/articles/s41598-020-62298-z">
					Source: Finding Plastic Patches in Coastal Waters using Optical Satellite Data
				</a>
			</div>
		</div>
	</div>
</div>
