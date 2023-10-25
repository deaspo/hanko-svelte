<script lang="ts">
	import { goto } from "$app/navigation";
	import { env } from "$env/dynamic/public";
	import { register } from "@teamhanko/hanko-elements?client";
	import { onMount } from "svelte";

	const hankoApi = env.PUBLIC_HANKO_API_URL

	const redirectAfterLogout = () => {
		goto('/login')
	}

	onMount(async () => {
		register(hankoApi).catch((error) => {
			// handle error
		})
	})
</script>

<main class="h-full overflow-y-auto">
	<div class="container grid px-6 mx-auto">
		<hanko-profile class="hankoProfile" on:onUserLoggedOut={redirectAfterLogout} />
	</div>
</main>


<style>
	hankoProfile {
		display: flex;
		flex-direction: column;
		min-width: 100%;
		}
	hanko-profile::part(container) {
		min-width: 100%;
		}
</style>