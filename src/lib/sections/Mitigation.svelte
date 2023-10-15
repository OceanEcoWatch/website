<script lang="ts">
	import trashRiverIcon from '$assets/icons/trashRiver.png';
	import collectTrashIcon from '$assets/icons/collectTrash.png';
	import statistic from '$assets/images/statistic.png';
</script>

<div class="w-full h-full bg-white flex sm:flex-col sm:px-5 sm:pt-10 pt-40 pb-40 px-20">
	<div class="flex flex-col w-2/5 sm:w-full h-full">
		<h1 class="font-bold text-3xl mb-10">ACTIVE MITIGATION</h1>

		<ul class="list flex flex-col space-y-10">
			<li>
				<span
					><div
						class="rounded-full bg-primary-500 w-[60px] h-[60px] flex flex-col items-center justify-center"
					>
						<img src={trashRiverIcon} alt="trash in river icon" class="w-2/3 h-2/3" />
					</div></span
				>
				<span class="flex-auto"
					><p class="">
						Shocking as it may be, up to <span class="font-bold"
							>80% of all marine debris consists of plastic</span
						> an insidious invader of our planet’s most vital habitats.
					</p></span
				>
			</li>

			<li>
				<span
					><div
						class="rounded-full bg-primary-500 w-[60px] h-[60px] flex flex-col items-center justify-center"
					>
						<img src={collectTrashIcon} alt="trash in river icon" class="w-2/3 h-2/3" />
					</div></span
				>
				<span class="flex-auto"
					><p class="">
						Disturbingly, <span class="font-bold"
							>the bulk of this plastic threat (80%) lies in our coastal zones</span
						> endangering marine life and corroding the very essence of our oceans.
					</p></span
				>
			</li>

			<li>
				<span
					><div
						class="rounded-full bg-primary-500 w-[60px] h-[60px] flex flex-col items-center justify-center"
					>
						<img src={collectTrashIcon} alt="trash in river icon" class="w-2/3 h-2/3" />
					</div></span
				>
				<span class="flex-auto"
					><p>
						The time for change is now, we want to help cleanup NGOs to make their operations more
						effective with accurate, real-time data on floating plastic debris in coastal regions,
						and thus play a small part in the fight against plastic pollution.
					</p></span
				>
			</li>
		</ul>
	</div>
	<div>
		<div class="ml-40 sm:ml-0 sm:pt-20">
			<h1 class="font-bold text-3xl mb-10">NUMBER OF MICROPLASTIC PER CUBIC METER (N/m³)</h1>
			<img
				src={statistic}
				alt="statistic that shows the increase of plastic in our oceans by year and weight"
			/>
			<div class="flex space-x-3">
				<p>Source:</p>
				<a
					class="anchor"
					tabindex="0"
					href="https://www.iaea.org/newscenter/news/world-oceans-day-2020-new-iaea-research-records-dramatic-increase-in-microplastic-pollution-in-eastern-tropical-pacific-ocean"
				>
					Microplastics Abundance in Eastern Tropical Pacific
				</a>
			</div>
		</div>
	</div>
</div>
