<script lang="ts">
	import { register } from '@teamhanko/hanko-elements'
	import { onMount } from 'svelte'
	import { env } from '$env/dynamic/public'
	import { goto } from '$app/navigation'

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
		min-width: 100%;
		display: flex;
		flex-direction: column;
		}
	hanko-profile::part(container) {
		min-width: 100%;
		}
</style>