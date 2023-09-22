<div class="bg-primary-500 flex flex-col items-center">
	<div class="mb-10">
		<h1 class="text-5xl text-center font-bold mb-20 mt-5 text-white">How it works</h1>
		<div class="flex sm:flex-col md:space-x-5 lg:space-x-10 pl-5 pr-5">
			<div class="card mb-5 mb-5 rounded-lg w-4/5 sm:w-full relative h-[275px]">
				<h1 class="text-primary-700 font-bold text-4xl text-center mt-5">1. Satellite imagery</h1>
				<p class="p-3 text-center text-lg">
					We are fetching Sentinel-2 images from Sentinel Hub. <br /> The Sentinel-2 satellite features
					a multispectral sensor delivering 13 bands, ranging from visible to infrared, with pixel sizes
					between 10-60 meters.
				</p>
			</div>
			<div class="card mb-5 mb-5 rounded-lg w-4/5 sm:w-full relative h-[275px]">
				<h1 class="text-primary-700 font-bold text-4xl text-center mt-5">2. Detection Model</h1>
				<p class="p-3 text-center text-lg">
					We use convolutional neural networks that learn absorption and reflection patterns across
					the Sentinel-2 bands and calculates the probability of where plastic floats in the ocean
				</p>
			</div>
			<div class="card mb-5 mb-5 rounded-lg w-4/5 sm:w-full relative h-[275px]">
				<h1 class="text-primary-700 font-bold text-4xl text-center mt-5">3. Visualization</h1>
				<p class="p-3 text-center text-lg">
					We visualize the detected plastic on a heatmap and offer further features to help you
					extract even more insights about the movement of plastic in our oceans.
				</p>
			</div>
		</div>
	</div>
</div>
