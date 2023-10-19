<script lang="ts">
	import Joost from '$assets/people/Joost.png';
	import Emely from '$assets/people/Emely.png';
	import Marc from '$assets/people/Marc.png';
	import Tom from '$assets/people/Tom.png';
	import githubIcon from '$assets/icons/githubIcon.svg';
	import linkedinIcon from '$assets/icons/linkedinIcon.svg';

	const teamMembers = [
		{
			name: 'Emely Henninger',
			image: Emely,
			role: 'Plastic Detection Service',
			links: {
				github: 'https://github.com/emely3h',
				linkedin: 'https://www.linkedin.com/in/emely-henninger-41a18a195/'
			}
		},
		{
			name: 'Marc Leerink',
			image: Marc,
			role: 'Plastic Detection Service',
			links: {
				github: 'https://github.com/marcleerink',
				linkedin: 'https://www.linkedin.com/in/marc-leerink-82b83b121'
			}
		},
		{
			name: 'Tom-Perry Lustig',
			image: Tom,
			role: 'Backend API',
			links: {
				github: 'https://github.com/tomADC443'
			}
		},
		{
			name: 'Joost Windmöller',
			image: Joost,
			role: 'Frontend',
			links: {
				github: 'https://github.com/joostwmd',
				linkedin: 'https://www.linkedin.com/in/joost-windm%C3%B6ller/'
			}
		}
	];

	function redirect(link: string | undefined) {
		if (link) {
			window.open(link, '_blank');
		}
	}
</script>

<div class="bg-white hide-scrollbar flex flex-col items-center p-20 sm:px-5">
	<div class="w-full flex flex-col items-center mb-10">
		<h1 class="text-3xl text-primary-500 pb-20" style="font-weight: 500">SEA THE TEAM</h1>
	</div>

	<div class="flex sm:flex-col sm:items-center sm:space-y-10 md:space-x-10 lg:space-x-20 pl-5 pr-5">
		{#each teamMembers as member}
			<div class="flex flex-col">
				<div class="bg-team-card card w-[250px] h-[250px] relative overflow-hidden">
					<img class="w-full h-full object-cover" src={member.image} alt={`portrait of ${member.name}`} />
					<div class="left-4 space-x-2 absolute left-2 bottom-2">
						{#if member.links.github}
							<button type="button" class="btn-icon bg-white" on:click={() => redirect(member.links.github)}
								><img alt="github" src={githubIcon} /></button
							>
						{/if}
						{#if member.links.linkedin}
							<button type="button" class="btn-icon bg-white" on:click={() => redirect(member.links.linkedin)}
								><img alt="linkedin" src={linkedinIcon} /></button
							>
						{/if}
					</div>
				</div>
				<div class="mt-5">
					<h1 class="font-bold text-2xl">{member.name}</h1>
					<p>{member.role}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
