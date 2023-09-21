<script lang="ts">
	//@ts-ignore
	import Countup from 'svelte-countup';
</script>

<div class="w-screen mb-20">
	<div class="flex flex-col items-center">
		<div class="w-4/5 md:w-3/5 lg:w-3/5 mb-10">
			<h1 class="text-5xl font-bold text-center">
				HELP US HELPING <span class="text-primary-500">YOU</span>
			</h1>
			<p class="text-center">
				we know a lot about image processing and plastic recognition, but not about cleaning up the
				ocean. we would love the opportunity to talk to you to find out where we can support you
			</p>
		</div>
		<button class="btn variant-filled-primary">contact</button>
		<!-- <Countup initial={0} value={100} duration={3000} step={1} roundto={1} format={true} /> -->
	</div>
</div>
