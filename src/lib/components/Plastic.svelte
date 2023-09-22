<script lang="ts">
	import seaturle from '$assets/seaturtle.jpg';

	function redirect() {
		window.open('https://www3.weforum.org/docs/WEF_The_New_Plastics_Economy.pdf', '_blank');
	}
</script>

<div class="flex flex-col items-center mb-10 mt-10">
	<div class="w-4/5 md:w-3/5 lg:w-3/5 mb-10">
		<h1 class="text-primary-500 text-5xl font-bold text-center mb-5">The Plastic Threat</h1>
	</div>

	<div class="flex sm:flex-col justify-between w-4/5">
		<div>
			<ul class="list space-y-3">
				<li>
					<span class="font-bold">-</span>
					<span class="flex-auto"
						><p class="anchor" on:click={redirect} on:keypress={redirect}>
							By 2050 the oceans could contain more plastic than fish by weight!
						</p></span
					>
				</li>

				<li>
					<span class="font-bold">-</span>
					<span class="flex-auto"
						>A single plastic bag can take up to 1,000 years to degrade in the ocean</span
					>
				</li>

				<li>
					<span class="font-bold">-</span>
					<span class="flex-auto"
						>Plastic pollution costs $13 billion in damages to marine ecosystems each year</span
					>
				</li>

				<li>
					<span class="font-bold">-</span>
					<span class="flex-auto">Up to 80% of all marine debris is composed of plastic</span>
				</li>

				<li>
					<span class="font-bold">-</span>
					<span class="flex-auto">The majority of marine plastic is trapped in coastal areas</span>
				</li>
			</ul>
		</div>

		<div class="sm:mt-10">
			<img class="sm:" src={seaturle} alt="angry seaturle swimming through plastic" />
		</div>
	</div>
</div>
