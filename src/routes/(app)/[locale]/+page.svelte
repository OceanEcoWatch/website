<script lang="ts">
	import { goto } from '$app/navigation';
	import LL from '$i18n/i18n-svelte';
</script>

<p>{$LL.HI()}</p>

<button class="btn variant-filled-primary" on:click={() => goto('/map')}>map</button>
