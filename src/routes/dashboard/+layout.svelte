<script lang="ts">
  import { env } from "$env/dynamic/public";
  import Header from "$lib/templates/admin/Header.svelte";
  import { isSideMenuOpen } from "$stores/menus";
  import SideBar from "$lib/templates/admin/SideBar.svelte";
  import { Hanko } from "@teamhanko/hanko-elements";

  const hankoApi = env.PUBLIC_HANKO_API_URL

  const hanko = new Hanko(hankoApi);

  let currentUser = "Unknown user";
  function updateLoggedUserEmail() {
    hanko.user.getCurrent().then((user: any) => {
      currentUser = user.email;
    })
  }

  $:if (hanko) {
    updateLoggedUserEmail();
  }
</script>

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
