<script lang="ts">
	import roadmapHorizontal from '$assets/images/roadmapHorizontal.png';
	import roadmapVertical from '$assets/images/roadmapVertical.png';
	import { onMount } from 'svelte';
	let isSmScreen: boolean;
	onMount(() => {
		if (window.screen.width) {
			if (window.screen.width > 767) {
				isSmScreen = false;
			} else {
				isSmScreen = true;
			}
		}
	});
</script>

<div class="w-full h-full bg-white md:p-10 py-28 flex flex-col items-center py-40">
	<h1 class="text-3xl text-primary-500 text-center pb-20 sm:px-5" style="font-weight: 500">WHAT WE ARE WORKING ON</h1>

	{#if isSmScreen}
		<img class="object-cover w-full" src={roadmapVertical} alt="our roadmap" />
	{/if}

	{#if !isSmScreen}
		<img class="mt-10 pl-20 pr-20 h-[350px]" src={roadmapHorizontal} alt="our roadmap" />
	{/if}
</div>
