<script lang="ts">
	import Plastic from '$lib/components/Plastic.svelte';
	import Action from '$lib/components/Action.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Team from '$lib/components/Team.svelte';
	import Technology from '$lib/components/Technology.svelte';
	import WaveDivider from '$lib/components/WaveDivider.svelte';
</script>

<div class="max-w-full">
	<Hero />
	<Plastic />
	<WaveDivider type={'white-blue'} />
	<Technology />
	<WaveDivider type={'blue-white'} />
	<Action />
	<WaveDivider type={'white-blue'} />
	<Contact />
	<WaveDivider type={'blue-white'} />
	<Team />
</div>

<div class="flex flex-col items-center mt-20">
	<a class="anchor" href="/impressum"><p>impressum & datanschutz</p></a>
</div>
