<script lang="ts">
	export let type: 'white-blue' | 'blue-white';
</script>

{#if type === 'blue-white'}
	<div class="wave-container-blue-white" />
{/if}

{#if type === 'white-blue'}
	<div class="wave-container-white-blue" />
{/if}

<style>
	.wave-container-white-blue {
		height: 70px;
		background-color: #ffffff;
		position: relative;
	}

	.wave-container-white-blue::before {
		content: '';
		width: 100%;
		height: 44px;
		position: absolute;
		bottom: -0.3%;
		left: 0;
		background-size: auto;
		background-repeat: repeat no-repeat;
		background-position: 40vw bottom;
		background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200  134' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 98L50 92C100 86 200 74 300 50C400 26 500 -10 600 2C700 14 800 74 900 98C1000 122 1100 110 1150 104L1200 98V134H1150C1100 134 1000 134 900 134C800 134 700 134 600 134C500 134 400 134 300 134C200 134 100 134 50 134H0V98Z' fill='%233ea5ff'/></svg>");
	}

	.wave-container-blue-white {
		height: 70px;
		background-color: #3ea5ff;
		position: relative;
	}

	.wave-container-blue-white::before {
		content: '';
		width: 100%;
		height: 26px;
		position: absolute;
		bottom: -0.3%;
		left: 0;
		background-size: auto;
		background-repeat: repeat no-repeat;
		background-position: 30vw bottom;
		background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200  125' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 92L50 86C100 81 200 69 300 47C400 24 500 -10 600 2C700 13 800 69 900 92C1000 115 1100 103 1150 98L1200 92V126H1150C1100 126 1000 126 900 126C800 126 700 126 600 126C500 126 400 126 300 126C200 126 100 126 50 126H0V92Z' fill='%23ffffff'/></svg>");
	}
</style>
