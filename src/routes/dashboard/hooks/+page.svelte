<svelte:head>
  <title>Hooks</title>
</svelte:head>

<main class="h-full pb-16 overflow-y-auto">
  <div class="container px-6 mx-auto grid">

    <!--Hooks -->
    <h3 class="text-xl font-bold dark:text-gray-300">Hooks</h3>
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Provide a way to intercept and override the framework default behavior. Defined under <span class="bg-gray-600">src/hook.server.ts</span>
      </p>
    </div>

    <!--Type of hooks -->
    <h3 class="text-xl mb-4 font-bold dark:text-gray-300">Available hooks</h3>
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <ul class="list-disc px-4 space-y-2">
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">handle</span> </li>
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">handleFetch</span> - modifies the fetch method behavior</li>
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">handleError</span> - for intercepting and handling all unexpected errors</li>
      </ul>
    </div>

    <!--Input -->
    <h3 class="text-xl mb-4 font-bold dark:text-gray-300">Input available</h3>
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <ul class="list-disc px-4 space-y-2">
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600"><samp>ServerLoadEvent</samp></span> - clientAddress, cookies, locale, platform, request functions</li>
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600"><samp>LoadEvent</samp></span> - data property</li>
        <li class="text-sm text-gray-600 dark:text-gray-400"> Shared functions - params, route, url, fetch, setHeaders, parent, depends, error</li>
      </ul>
    </div>
  </div>
</main>