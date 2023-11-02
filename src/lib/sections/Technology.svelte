<script lang="ts">
	import graph from '$assets/images/graph.png';
</script>

<div class="lg:bg-primary-500">
	<div class="flex sm:flex-col sm:px-5 sm:pt-320 py-40 mx-auto lg:px-44 md:px-20" style="max-width:3000px">
		<div class="flex flex-col w-2/5 sm:w-full h-full md:pr-0 lg:pr-20">
			<h1 class="font-bold text-white text-3xl mb-10 sm:text-center">HOW THE DETECTION WORKS</h1>

			<p class="text-white sm:text-center">
				We primarily leverage Sentinel-2 imagery, accessible through SentinelHub, as our core data source. This resource
				offers a remarkable spectral resolution, spanning 13 distinct bandwidths from visible to infrared. Our approach
				is grounded in the latest open-source scientific publications, which have shared their findings through
				open-source models. Within these models, neural networks, notably the Unet++ model, excel at discerning the
				unique reflection and absorption patterns of plastic and marine debris in contrast to water.
			</p>
		</div>
		<div>
			<div class="ml-40 sm:ml-0 sm:mt-20">
				<img
					class="max-h-[500px]"
					src={graph}
					alt="statistic that shows the increase of plastic in our oceans by year and weight"
				/>
				<div class="mt-5">
					<p class="text-white text-base">
						Variations in remote sensing reflectance across different materials at various wavelengths.
					</p>

					<div class="flex space-x-3 sm:mt-3">
						<a
							class="anchor text-white text-base"
							tabindex="0"
							href="https://www.nature.com/articles/s41598-020-62298-z"
						>
							Source: Finding Plastic Patches in Coastal Waters using Optical Satellite Data
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
