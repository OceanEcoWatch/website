<script lang="ts">
	import Joost from '$assets/people/Joost.png';
	import Emely from '$assets/people/Emely.png';
	import Marc from '$assets/people/Marc.png';
	import Tom from '$assets/people/Tom.png';
	import githubIcon from '$assets/icons/githubIcon.svg';
	import linkedinIcon from '$assets/icons/linkedinIcon.svg';
	import { onMount } from 'svelte';

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
	let width = 0;
	onMount(() => {
		width = window.innerWidth;
		console.log(width);
		const handleResize = () => {
			width = window.innerWidth;
			console.log(width);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

{#if width >= 1600}
	<div class="bg-white py-48">
		<div class="mx-auto px-40" style="max-width:2500px">
			<h1 class="font-bold text-black text-3xl mb-10 sm:text-center pb-20">SEA THE TEAM</h1>
			<div class="hide-scrollbar flex flex-row justify-between items-center">
				{#each teamMembers as member}
					<div class="flex flex-col">
						<div class="rounded-lg shadow-2xl w-[300px] h-[300px] relative bg-black">
							<img
								class="rounded-lg w-full h-full object-cover"
								src={member.image}
								alt={`portrait of ${member.name}`}
							/>
							<div class="space-x-2 absolute left-2 bottom-2">
								{#if member.links.github}
									<button type="button" class="btn-icon bg-white" on:click={() => redirect(member.links.github)}>
										<img alt="github" src={githubIcon} />
									</button>
								{/if}
								{#if member.links.linkedin}
									<button type="button" class="btn-icon bg-white" on:click={() => redirect(member.links.linkedin)}>
										<img alt="linkedin" src={linkedinIcon} />
									</button>
								{/if}
							</div>
						</div>

						<div class="mt-5">
							<h1 class="font-bold text-2xl text-center">{member.name}</h1>
							<p class="text-center">{member.role}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}

{#if width < 1600 && width >= 780}
	<div class="bg-white hide-scrollbar mx-auto py-40 px-20">
		<h1 class="font-bold text-black text-3xl mb-10 text-center pb-20">SEA THE TEAM</h1>
		<!-- Set max-width to contain 2 items with 300px each and gap -->
		<div class="grid grid-cols-2">
			<!-- Create a 2-column grid with some gap -->
			{#each teamMembers as member}
				<div class="flex justify-center pb-20">
					<div class="flex flex-col items-center">
						<!-- this is a new wrapper div -->
						<div class="rounded-lg shadow-2xl w-[300px] h-[300px] relative bg-black">
							<img
								class="rounded-lg w-full h-full object-cover object-center"
								src={member.image}
								alt={`portrait of ${member.name}`}
							/>
							<div class="space-x-2 absolute left-2 bottom-2">
								{#if member.links.github}
									<button type="button" class="btn-icon bg-white" on:click={() => redirect(member.links.github)}>
										<img alt="github" src={githubIcon} />
									</button>
								{/if}
								{#if member.links.linkedin}
									<button type="button" class="btn-icon bg-white" on:click={() => redirect(member.links.linkedin)}>
										<img alt="linkedin" src={linkedinIcon} />
									</button>
								{/if}
							</div>
						</div>

						<div class="mt-5 text-center">
							<!-- added text-center to this div -->
							<h1 class="font-bold text-2xl">{member.name}</h1>
							<p>{member.role}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}

{#if width < 780}
	<div class="bg-white hide-scrollbar mx-auto py-40 px-10">
		<h1 class="font-bold text-black text-3xl mb-10 text-center pb-20">SEA THE TEAM</h1>
		<!-- Set max-width to contain 2 items with 300px each and gap -->
		<!-- Create a 2-column grid with some gap -->
		<ul>
			{#each teamMembers as member}
				<li>
					<div class="flex flex-col items-center pb-40">
						<div class="rounded-lg shadow-2xl w-[300px] h-[300px] relative bg-black">
							<img
								class="rounded-lg w-full h-full object-cover object-center"
								src={member.image}
								alt={`portrait of ${member.name}`}
							/>
							<div class="space-x-2 absolute left-2 bottom-2">
								{#if member.links.github}
									<button type="button" class="btn-icon bg-white" on:click={() => redirect(member.links.github)}>
										<img alt="github" src={githubIcon} />
									</button>
								{/if}
								{#if member.links.linkedin}
									<button type="button" class="btn-icon bg-white" on:click={() => redirect(member.links.linkedin)}>
										<img alt="linkedin" src={linkedinIcon} />
									</button>
								{/if}
							</div>
							<div class="mt-5">
								<h1 class="font-bold text-2xl">{member.name}</h1>
								<p class="">{member.role}</p>
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
{/if}
