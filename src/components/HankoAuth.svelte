<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { register } from "@teamhanko/hanko-elements";
  import { env } from "$env/dynamic/public";
  const hankoApi = env.PUBLIC_HANKO_API_URL;

  const redirectAfterLogin = () => {
    goto("/dashboard");
  };

  onMount(async () => {
    register(hankoApi).catch((error) => {
      // handle error
    });
  });
</script>
<div class="flex items-center justify-center m-auto min-w-xs max-w-xs h-full p-4">
    <hanko-auth on:onAuthFlowCompleted={redirectAfterLogin} />
</div>

<style>
    hanko-auth::part(container) {
        background-color: var(--background-color, white);
        padding: var(--container-padding, 0);
        max-width: var(--container-max-width, 410px);
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: flex-start;
        box-sizing: border-box;
        margin-top: 50%;
        }
</style>