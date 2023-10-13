<script lang="ts">
	import LogoutButton from "./LogoutButton.svelte";
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
<LogoutButton />
<hanko-profile on:onUserLoggedOut={redirectAfterLogout} />
