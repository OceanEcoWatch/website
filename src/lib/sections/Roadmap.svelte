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
		console.log(isSmScreen);
	});
</script>

<div class="w-full bg-white p-10">
	{#if isSmScreen}
		<h1 class="text-3xl text-primary-500 text-center">WHAT WE ARE WORKING ON</h1>
		<img class="object-cover w-full h-full mt-10" src={roadmapVertical} alt="our roadmap" />
	{/if}

	{#if !isSmScreen}
		<h1 class="text-5xl text-primary-500 text-center">WHAT WE ARE WORKING ON</h1>
		<img class="object-cover w-full h-full mt-10" src={roadmapHorizontal} alt="our roadmap" />
	{/if}
</div>
