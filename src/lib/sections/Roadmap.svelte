<script lang="ts">
	import roadmapHorizontal from '$assets/images/roadmapHorizontal.png';
	import roadmapVertical from '$assets/images/roadmapVertical.png';
	import { onMount } from 'svelte';
	let width = 0;

	onMount(() => {
		width = window.innerWidth;

		const handleResize = () => {
			width = window.innerWidth;
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<div class="w-full h-full bg-white flex flex-col items-center px-40 py-40 sm:px-10">
	<h1 class="text-3xl text-primary-500 text-center pb-20 sm:px-5" style="font-weight: 500">WHAT WE ARE WORKING ON</h1>

	{#if width <= 1700}
		<img class="max-h-[800px]" src={roadmapVertical} alt="our roadmap" />
	{/if}

	{#if width >= 1701}
		<img class="mt-10 pl-20 pr-20 h-[350px]" src={roadmapHorizontal} alt="our roadmap" />
	{/if}
</div>
