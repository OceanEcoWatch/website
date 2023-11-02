<script lang="ts">
	import seaturtle from '$assets/images/seaturtle.png';
</script>

<div class="bg-primary-500">
	<div class="w-full sm:px-10 pt-32 pb-10 mx-auto lg:px-40 md:px-20" style="max-width:3000px">
		<div class="flex sm:flex-col">
			<div class="w-1/2 sm:w-full">
				<h1 class="text-3xl text-white pb-20 sm:text-center" style="font-weight: 500">
					Get our marine debris analysis of any coastal region
				</h1>
				<p class="text-white mt-5 sm:text-center" style="max-width:1000px">
					Interested in our data? We can provide you with a detailed analysis of any coastal region in the world from
					2014 to the present.
				</p>

				<p class="text-tertiary-500 mt-20 sm:text-center" style="font-weight: 500">contact@oceanecowatch.org</p>
			</div>

			<div class="w-1/2 sm:w-full flex flex-col items-center mt-10">
				<img class="" src={seaturtle} alt="a seaturle" />
			</div>
		</div>

		<div class="flex flex-col items-center mt-20 sm:mt-10">
			<a class="anchor text-white" href="/impressum"><p class="font-bold">Imprint</p></a>
		</div>
	</div>
</div>
