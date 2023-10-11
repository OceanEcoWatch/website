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

<div class="w-full bg-primary-500 pt-20 pb-20 pl-10 pr-10 flex sm:flex-col justify-between">
	{#each sections as section}
		<div class="flex flex-col items-center p-5 sm:mb-10">
			<div class="py-10">
				<img src={section.icon} alt={section.altText} />
			</div>
			<div class="w-[380px] sm:w-[250px]">
				<h1 class="text-3xl text-center text-white py-3" style="font-weight: 500">
					{section.title}
				</h1>
				<p class="text-center mt-5 text-white">
					{section.description}
				</p>
			</div>
		</div>
	{/each}
</div>
