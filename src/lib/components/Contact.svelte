<script lang="ts">
	function openMail() {
		window.location.href = 'mailto:contact@oceanecowatch.org';
	}
</script>

<div class="w-full bg-primary-500">
	<div class="flex flex-col items-center">
		<div class="w-4/5 md:w-3/5 lg:w-3/5 mb-10">
			<h1 class="text-5xl font-bold text-center">
				HELP US HELPING <span class="text-white">YOU</span>
			</h1>
			<p class="text-center">
				we know a lot about image processing and plastic recognition, but not about cleaning up the
				ocean. we would love the opportunity to talk to you to find out where we can support you
			</p>
		</div>
		<button class="btn bg-white" on:click={openMail}><p>contact</p></button>
	</div>
</div>
