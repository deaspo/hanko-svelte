<script lang="ts" type="module">
  import { env } from "$env/dynamic/public";
  import Header from "$lib/templates/admin/Header.svelte";
  import { isDark, isSideMenuOpen } from "$stores/menus";
  import SideBar from "$lib/templates/admin/SideBar.svelte";
  import { browser } from "$app/environment";
  import HtmlHead from "$lib/templates/admin/html_head.svelte";
  import { onMount } from "svelte";

  if (browser && localStorage.theme === 'dark') {
    isDark.update(value => true);
  } else{
    isDark.update(value => false)
  }

  const hankoApi = env.PUBLIC_HANKO_API_URL;
  let currentUser = "Unknown user";
  let hanko;

  onMount(() => {
    import("@teamhanko/hanko-elements").then((result) => {
      hanko = new result.Hanko(hankoApi);

      hanko.user.getCurrent().then((user: any) => {
        currentUser = user.email;
      })
    })
  })

</script>

<HtmlHead {isDark} />

<section id="body">
  <div
    class="flex min-h-screen flex-grow bg-gray-50 dark:bg-gray-900"
    class:overflow-hidden={$isSideMenuOpen}
  >
    <!-- Desktop sidebar -->
    <aside
      class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0"
    >
      <SideBar />
    </aside>
    <div class="flex flex-col flex-1 w-full">
      <Header user="{currentUser}" />
      <slot />
    </div>
  </div>
</section>
