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

<div class="w-full bg-white p-10 py-28">
	<h1 class="text-3xl text-primary-500 text-center pb-20" style="font-weight: 500">
		WHAT WE ARE WORKING ON
	</h1>
	{#if isSmScreen}
		<img class="object-cover w-full h-full mt-10" src={roadmapVertical} alt="our roadmap" />
	{/if}

	{#if !isSmScreen}
		<img class="h-full mt-10 pl-20 pr-20" src={roadmapHorizontal} alt="our roadmap" />
	{/if}
</div>
