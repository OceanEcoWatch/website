<script lang="ts">
	import Joost from '$assets/Joost.png';
	import Emely from '$assets/Emely.png';
	import Marc from '$assets/Marc.png';
	import Tom from '$assets/Tom.png';
	import githubIcon from '$assets/githubIcon.svg';
	import linkedinIcon from '$assets/linkedinIcon.svg';

	const links = {
		emely: {
			github: 'https://github.com/emely3h',
			linkedin: 'https://www.linkedin.com/in/emely-henninger-41a18a195/'
		},
		marc: { github: 'https://github.com/marcleerink', linkedin: '' },
		tom: { github: '', linkedin: '' },
		joost: {
			github: 'https://github.com/joostwmd',
			linkedin: 'https://www.linkedin.com/in/joost-windm%C3%B6ller/'
		}
	};

	function redirect(platform: 'github' | 'linkedin', person: 'emely' | 'marc' | 'tom' | 'joost') {
		const link = links[person][platform];
		if (link) {
			window.open(link, '_blank');
		}
	}
</script>

<div class="bg-white hide-scrollbar">
	<div class="w-full flex flex-col items-center mb-10">
		<h1 class="text-5xl font-bold text-primary-500 mt-10">SEA THE TEAM</h1>
	</div>

	<div class="flex sm:flex-col sm:items-center md:space-x-5 lg:space-x-10 pl-5 pr-5">
		<div class="card mb-5 w-[350px] h-[420px] relative mb-5 rounded-lg overflow-hidden">
			<img class="w-full h-full object-cover" src={Emely} alt="Emely Henninger" />
			<div class="absolute bottom-5 left-5">
				<h1 class="text-white text-4xl mb-1">Emely Henninger</h1>
				<p class="text-white mb-3">Plactic detection service</p>
				<div class="left-4 space-x-2">
					<button
						type="button"
						class="btn-icon variant-filled-primary"
						on:click={() => redirect('github', 'emely')}
						><img alt="github" src={githubIcon} /></button
					>
					<button
						type="button"
						class="btn-icon variant-filled-primary"
						on:click={() => redirect('linkedin', 'emely')}
						><img alt="github" src={linkedinIcon} /></button
					>
				</div>
			</div>
		</div>

		<div class="card mb-5 w-[350px] h-[420px] relative mb-5 rounded-lg overflow-hidden">
			<img class="w-full h-full object-cover" src={Marc} alt="Marc Leerink" />
			<div class="absolute bottom-5 left-5">
				<h1 class="text-primary-500 text-4xl mb-1">Marc Leerink</h1>
				<p class="text-primary-500 mb-3">Plactic detection service</p>
				<div class="left-4 space-x-2">
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
		</div>

		<div class="card mb-5 w-[350px] h-[420px] relative mb-5 rounded-lg overflow-hidden">
			<img class="w-full h-full object-cover" src={Tom} alt="Marc Leerink" />

			<div class="absolute bottom-5 left-5">
				<h1 class="text-white text-4xl mb-1">Tom-Perry Lustig</h1>
				<p class="text-white mb-3">Backend API</p>
				<div class="left-4 space-x-2">
					<button
						type="button"
						class="btn-icon variant-filled-primary"
						on:click={() => redirect('github', 'tom')}><img alt="github" src={githubIcon} /></button
					>
					<button
						type="button"
						class="btn-icon variant-filled-primary"
						on:click={() => redirect('linkedin', 'tom')}
						><img alt="github" src={linkedinIcon} /></button
					>
				</div>
			</div>
		</div>

		<div class="card mb-5 w-[350px] h-[420px] relative mb-5 rounded-lg overflow-hidden">
			<img class="w-full h-full object-cover" src={Joost} alt="Joost Windmöller" />

			<div class="absolute bottom-5 left-5">
				<h1 class="text-primary-500 text-4xl mb-1">Joost Windmöller</h1>
				<p class="text-primary-500 mb-3">Frontend & UI/UX Design</p>
				<div class="left-4 space-x-2">
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
		</div>
	</div>
</div>
