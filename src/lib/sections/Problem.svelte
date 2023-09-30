<script lang="ts">
	import statistic from '$assets/images/statistic.png';
	import seaturtle from '$assets/images/seaturtle.png';
</script>

<div class="bg-primary-500 w-full min-h-screen p-20 sm:p-10">
	<div class="flex flex-col">
		<div class="w-full flex items-center sm:flex-col">
			<div class="w-1/2 sm:w-full">
				<img src={statistic} class="" alt="statistic" />
			</div>
			<div class="w-1/2 sm:w-full sm:mt-10">
				<h1 class="text-3xl text-white">TERRIFYING TRAJECTORY</h1>
				<p class="mt-10 text-white">
					By 2050, our oceans may harbor a startling reality: they could hold more plastic than fish
					by weight, a haunting prediction that demands our immediate attention. Consider this: a
					single plastic bag, seemingly insignificant, possesses a staying power that defies our
					comprehension, enduring for up to 1,000 years within the ocean's depths. The cost of our
					plastic obsession is steep, tallying a staggering $13 billion in damages to precious
					marine ecosystems annually.
				</p>
			</div>
		</div>
		<div class="w-full flex items-center justify-between sm:flex-col sm:mt-10">
			<div class="w-1/2 sm:w-full">
				<h1 class="text-3xl text-white">ACTIVE MITIGATION</h1>
				<p class="mt-10 text-white">
					Shocking as it may be, up to 80% of all marine debris consists of plastic, an insidious
					invader of our planet’s most vital habitats. Disturbingly, the bulk of this plastic threat
					(80 %) lies in our coastal zones, endangering marine life and corroding the very essence
					of our oceans. The time for change is now, we want to help cleanup NGOs to make their
					operations more effective with accurate, real-time data on floating plastic debris in
					coastal regions, and thus play a small part in the fight against plastic pollution.
				</p>
			</div>
			<div class="w-1/2 sm:w-full flex flex-col items-center">
				<img src={seaturtle} class="" alt="statistic" />
			</div>
		</div>
	</div>
</div>
