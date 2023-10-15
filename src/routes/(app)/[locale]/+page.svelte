<script lang="ts">
	import Hero from '$lib/sections/Hero.svelte';
	import Prototype from '$lib/sections/Prototype.svelte';
	import Technology from '$lib/sections/Technology.svelte';
	import Roadmap from '$lib/sections/Roadmap.svelte';
	import Audience from '$lib/sections/Audience.svelte';
	import Team from '$lib/sections/Team.svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import Problem from '$lib/sections/Problem.svelte';
	import Mitigation from '$lib/sections/Mitigation.svelte';
</script>

<div class="w-full max-w-screen hide-scrollbar">
	<Hero />
	<Problem />
	<Mitigation />
	<Audience />
	<Roadmap />
	<Prototype />
	<Technology />
	<Team />
	<Contact />
</div>
