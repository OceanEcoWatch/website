<script lang="ts">
	import trashRiverIcon from '$assets/icons/trashRiver.png';
	import collectTrashIcon from '$assets/icons/collectTrash.png';
	import statistic from '$assets/images/statistic.png';
</script>

<div class="w-full bg-white">
	<div
		class="h-full flex sm:flex-col md:flex-col sm:px-5 sm:pt-32 pt-40 pb-40 mx-auto lg:px-40 md:px-10"
		style="max-width:2500px"
	>
		<div class="flex flex-col w-4/5 sm:w-full md:w-4/5 h-full md:pb-32 md:mx-auto">
			<div class="pl-24">
				<h1 class="font-bold text-3xl mb-10">ACTIVE MITIGATION</h1>
			</div>

			<div class="infotext flex items-start sm:pb-32">
				<ul class="list flex flex-col space-y-10">
					<li class="pt-10">
						<span>
							<div class="rounded-full bg-primary-500 w-[75px] h-[75px] flex flex-col items-center justify-center">
								<img src={trashRiverIcon} alt="trash in river icon" class="w-2/3 h-2/3" />
							</div>
						</span>
						<span class="flex-auto">
							<p class="">
								Shocking as it may be, up to <span class="font-bold">80% of all marine debris consists of plastic,</span
								>
								an insidious invader of our planet’s most vital habitats.
							</p>
						</span>
					</li>

					<li class="pt-10">
						<span
							><div class="rounded-full bg-primary-500 w-[75px] h-[75px] flex flex-col items-center justify-center">
								<img src={collectTrashIcon} alt="trash in river icon" class="w-2/3 h-2/3" />
							</div></span
						>
						<span class="flex-auto"
							><p class="">
								Disturbingly, <span class="font-bold"
									>the bulk of this plastic threat (80%) lies in our coastal zones,</span
								>
								endangering marine life and corrupting the very essence of our oceans.
							</p></span
						>
					</li>

					<li class="pt-10">
						<span
							><div class="rounded-full bg-primary-500 w-[75px] h-[75px] flex flex-col items-center justify-center">
								<img src={collectTrashIcon} alt="trash in river icon" class="w-2/3 h-2/3" />
							</div></span
						>
						<span class="flex-auto"
							><p class="">
								The time for change is now. We want to help cleanup NGOs to make their operations more effective with
								accurate, real-time data on floating plastic debris in coastal regions and thus play a small part in the
								fight against plastic pollution.
							</p></span
						>
					</li>
				</ul>
			</div>
		</div>

		<div class="graph h-full w-full flex flex-col lg:items-center md:w-4/5 mx-auto">
			<h1 class="font-bold text-3xl mb-16">NUMBER OF MICROPLASTIC PER CUBIC METER (N/m³)</h1>
			<img
				class="w-[500px] md:w-[600px] lg:w-[700px]"
				src={statistic}
				alt="statistic that shows the increase of plastic in our oceans by year and weight"
			/>
			<div class="mt-5 items-end" style="text-align: left;">
				<a
					class="anchor"
					tabindex="0"
					href="https://www.iaea.org/newscenter/news/world-oceans-day-2020-new-iaea-research-records-dramatic-increase-in-microplastic-pollution-in-eastern-tropical-pacific-ocean"
				>
					Source: Microplastics Abundance in Eastern Tropical Pacific
				</a>
			</div>
		</div>
	</div>
</div>
