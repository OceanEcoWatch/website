<script lang="ts">
	import { Accordion, AccordionItem, Avatar } from '@skeletonlabs/skeleton';
	import examplePortrait from '$assets/exmaple-portrait.jpg';
</script>

<div class="w-screen flex flex-col items-center mb-10">
	<h1 class="text-5xl font-bold text-primary-500">SEA THE TEAM</h1>
</div>

<div class="flex sm:flex-col md:space-x-5 lg:space-x-10 pl-5 pr-5">
	<div class="card mb-5 relative mb-5 rounded-lg overflow-hidden">
		<img class="w-full h-full object-cover" src={examplePortrait} alt="Emely Henninger" />
		<h1 class="text-white text-4xl absolute bottom-20 left-4">Emely Henninger</h1>
		<p class="text-white absolute bottom-10 left-4">Frontend & UI/UX Design</p>
	</div>

	<div class="card mb-5 relative mb-5 rounded-lg overflow-hidden">
		<img class="w-full h-full object-cover" src={examplePortrait} alt="Marc Leerink" />
		<h1 class="text-white text-4xl absolute bottom-20 left-4">Marc Leerink</h1>
		<p class="text-white absolute bottom-10 left-4">Frontend & UI/UX Design</p>
	</div>

	<div class="card mb-5 relative mb-5 rounded-lg overflow-hidden">
		<img class="w-full h-full object-cover" src={examplePortrait} alt="Marc Leerink" />
		<h1 class="text-white text-4xl absolute bottom-20 left-4">Tom-Perry Lustig</h1>
		<p class="text-white absolute bottom-10 left-4">Frontend & UI/UX Design</p>
	</div>

	<div class="card mb-5 relative mb-5 rounded-lg overflow-hidden">
		<img class="w-full h-full object-cover" src={examplePortrait} alt="Joost Windmöller" />
		<h1 class="text-white text-4xl absolute bottom-20 left-4">Joost Windmöller</h1>
		<p class="text-white absolute bottom-10 left-4">Frontend & UI/UX Design</p>
	</div>
</div>
