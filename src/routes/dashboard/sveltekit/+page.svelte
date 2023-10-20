<svelte:head>
  <title>SvelteKit</title>
</svelte:head>

<main class="h-full pb-16 overflow-y-auto">
  <div class="container px-6 mx-auto grid">


    <!-- Svelte -->
    <h3 class="text-xl font-bold dark:text-gray-300">Sveltekit</h3>
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <p class="text-sm text-gray-600 dark:text-gray-400"> Svelte is a <strong>app</strong> framework that solves the problem of building production ready applications.</p>
    </div>

    <!-- Render mechanism -->
    <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">Render mechanism</h4>
    <div class="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <p class="text-sm text-gray-600 dark:text-gray-400"> Apps are server-rendered by default for excellent first load performance and SEO characteristics, but can then transition to client-side navigation (like SPAs) to avoid jankily reloading everything when the user navigates.</p>
    </div>

    <!-- Bundler -->
    <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">Bundler - Vite</h4>

    <!-- Note -->
    <h4 class="mb-4 text-xl font-semibold dark:text-gray-300"><span class="text-red-400">Note!</span></h4>
    <div class="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        It applies <samp>"type":"module"</samp> - means that .js files are treated as native JavaScript modules by default, rather than the legacy CommonJS format.
      </p>
    </div>
  </div>
</main>