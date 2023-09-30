<script lang="ts">
	import Joost from '$assets/people/Joost.png';
	import Emely from '$assets/people/Emely.png';
	import Marc from '$assets/people/Marc.png';
	import Tom from '$assets/people/Tom.png';
	import githubIcon from '$assets/icons/githubIcon.svg';
	import linkedinIcon from '$assets/icons/linkedinIcon.svg';

	const links = {
		emely: {
			github: 'https://github.com/emely3h',
			linkedin: 'https://www.linkedin.com/in/emely-henninger-41a18a195/'
		},
		marc: {
			github: 'https://github.com/marcleerink',
			linkedin: 'https://www.linkedin.com/in/marc-leerink-82b83b121'
		},
		tom: { github: 'https://github.com/tomADC443', linkedin: undefined },
		joost: {
			github: 'https://github.com/joostwmd',
			linkedin: 'https://www.linkedin.com/in/joost-windm%C3%B6ller/'
		}
	};

	function redirect(platform: 'github' | 'linkedin', person: 'emely' | 'marc' | 'tom' | 'joost') {
		const link: string | undefined = links[person][platform];
		if (link) {
			window.open(link, '_blank');
		}
	}
</script>

<div class="bg-white hide-scrollbar flex flex-col items-center pb-10">
	<div class="w-full flex flex-col items-center mb-10">
		<h1 class="text-5xl text-primary-500 mt-10">SEA THE TEAM</h1>
	</div>

	<div class="flex sm:flex-col sm:items-center sm:space-y-5 md:space-x-5 lg:space-x-10 pl-5 pr-5">
		<div class="flec flex-col">
			<div class="bg-team-card card w-[300px] h-[300px] relative overflow-hidden">
				<img class="w-full h-full object-cover" src={Emely} alt="portrait of emely" />
				<div class="left-4 space-x-2 absolute left-2 bottom-2">
					<button
						type="button"
						class="btn-icon bg-white"
						on:click={() => redirect('github', 'emely')}
						><img alt="github" src={githubIcon} /></button
					>
					<button
						type="button"
						class="btn-icon bg-white"
						on:click={() => redirect('linkedin', 'emely')}
						><img alt="github" src={linkedinIcon} /></button
					>
				</div>
			</div>
			<div class="mt-5">
				<h1 class="font-bold text-2xl">Ememly Henninger</h1>
				<p>Plastic Detection Service</p>
			</div>
		</div>

		<div class="flec flex-col">
			<div class="bg-team-card card w-[300px] h-[300px] relative">
				<img class="w-full h-full object-cover" src={Marc} alt="portrait of Marc" />
				<div class="left-4 space-x-2 absolute left-2 bottom-2">
					<button
						type="button"
						class="btn-icon bg-white"
						on:click={() => redirect('github', 'marc')}
						><img alt="github" src={githubIcon} /></button
					>
					<button
						type="button"
						class="btn-icon bg-white"
						on:click={() => redirect('linkedin', 'marc')}
						><img alt="github" src={linkedinIcon} /></button
					>
				</div>
			</div>
			<div class="mt-5">
				<h1 class="font-bold text-2xl">Marc Leerink</h1>
				<p>Plastic Detection Service</p>
			</div>
		</div>

		<div class="flec flex-col">
			<div class="bg-team-card card w-[300px] h-[300px] relative overflow-hidden">
				<img class="w-full h-full object-cover" src={Tom} alt="portrait of Tom" />
				<div class="left-4 space-x-2 absolute left-2 bottom-2">
					<button type="button" class="btn-icon bg-white" on:click={() => redirect('github', 'tom')}
						><img alt="github" src={githubIcon} /></button
					>
				</div>
			</div>
			<div class="mt-5">
				<h1 class="font-bold text-2xl">Tom-Perry Lustig</h1>
				<p>Backend API</p>
			</div>
		</div>

		<div class="flec flex-col">
			<div class="bg-team-card card w-[300px] h-[300px] relative">
				<img class="w-full h-full object-cover" src={Joost} alt="portrait of Marc" />
				<div class="left-4 space-x-2 absolute left-2 bottom-2">
					<button
						type="button"
						class="btn-icon bg-white"
						on:click={() => redirect('github', 'joost')}
						><img alt="github" src={githubIcon} /></button
					>
					<button
						type="button"
						class="btn-icon bg-white"
						on:click={() => redirect('linkedin', 'joost')}
						><img alt="github" src={linkedinIcon} /></button
					>
				</div>
			</div>
			<div class="mt-5">
				<h1 class="font-bold text-2xl">Joost Windmöller</h1>
				<p>Frontend</p>
			</div>
		</div>
	</div>
</div>
