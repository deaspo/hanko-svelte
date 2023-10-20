<script>
  import HankoAuth from "../../components/HankoAuth.svelte";
  import { isDark } from "$stores/menus";
  import HtmlHead from '$lib/templates/admin/html_head.svelte';
  import { onMount } from "svelte";
  import { invalidateAll } from '$app/navigation';

  onMount( () => {
    document.documentElement.classList.remove('dark');
    localStorage.theme = '';
    isDark.update(value => false)
    invalidateAll();
  })
</script>

<HtmlHead {isDark} />

<HankoAuth />