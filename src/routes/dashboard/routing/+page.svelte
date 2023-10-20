<svelte:head>
  <title>Routing</title>
</svelte:head>

<main class="h-full pb-16 overflow-y-auto">
  <div class="container px-6 mx-auto grid">


    <!-- Svelte -->
    <h3 class="text-xl font-bold dark:text-gray-300">Routing</h3>
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <p class="text-sm text-gray-600 dark:text-gray-400"> Uses filesystem-based routing</p>
    </div>

    <!-- Pages -->
    <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">Pages</h4>
    <div class="px-4 py-3 mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <p class="text-sm text-gray-600 dark:text-gray-400"> The url resolves to a <span class="bg-green-800"><samp>+page.svelte</samp></span> component</p>
    </div>

    <!-- Note -->
    <h4 class="mb-4 text-md font-semibold dark:text-gray-300"><span class="text-red-400">Note!</span></h4>
    <div class="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Unlike traditional multi-page apps, navigating to and from updates the contents of the current page, like a single-page app. This gives us the best of both worlds — fast server-rendered startup, then instant navigation
      </p>
    </div>

    <!-- Layout -->
    <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">Layout</h4>
    <div class="px-4 py-3 mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <p class="text-sm text-gray-600 dark:text-gray-400"> Common UI are placed in <span class="bg-green-800"><samp>+layout.svelte</samp></span> component</p>
      <samp>
        src/routes/ <br> ├ about/ <br> │ └ +page.svelte <br> ├ <span class="bg-green-800">+layout.svelte</span> <br> └ +page.svelte
      </samp>
    </div>
  </div>
</main>