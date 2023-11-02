<script lang="ts">
	import ngoIcon from '$assets/icons/ngo.png';
	import lupeIcon from '$assets/icons/lupe.png';
	import database from '$assets/icons/database.png';

	const sections = [
		{
			icon: lupeIcon,
			altText: 'Magnifying Glass',
			title: 'For The Public',
			description:
				'We visualise plastic pollution across the oceans, make abstract numbers easier to grasp and educate the public about the marine pollution threat.'
		},
		{
			icon: ngoIcon,
			altText: 'NGO Icon',
			title: 'For Cleanup NGOs',
			description:
				'We equip NGOs with up-to-date data on areas with the highest plastic concentrations, enabling more focused and effective cleanup operations.'
		},
		{
			icon: database,
			altText: 'Database Icon',
			title: 'For Researchers',
			description:
				'We offer in-depth data insights to dissect the origins, trajectories, and destinations of marine plastics laying the foundation for predictive analytics on future plastic accumulations.'
		}
	];
</script>

<div class="bg-primary-500">
	<div
		class="w-full flex flex-col items-center lg:py-32 md:py-48 sm:py-24 md:p-30 sm:px-5 mx-auto"
		style="max-width:3000px"
	>
		<div
			class="sm:w-full md2:w-full lg:w-4/5 bg-primary-500 pl-20 pr-20 flex lg:flex-row md2:flex-col sm:flex-col justify-between"
		>
			{#each sections as section}
				<div class="flex flex-col items-center p-5 sm:mb-20 md2:py-20">
					<div class="py-10">
						<img src={section.icon} alt={section.altText} />
					</div>
					<div class="w-[360px] sm:w-[250px] md2:w-[550px]">
						<h1 class="text-3xl text-center text-tertiary-500 font-bold py-3">
							{section.title}
						</h1>
						<p class="text-center mt-5 text-white">
							{section.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
