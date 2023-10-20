<svelte:head>
  <title>Shipped Stores</title>
</svelte:head>

<main class="h-full pb-16 overflow-y-auto">
  <div class="container px-6 mx-auto grid">

    <!--Shipped stores -->
    <h3 class="text-xl font-bold dark:text-gray-300">Shipped stores</h3>
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        There are three readonly stores available via the $app/stores module — page, navigating and updated.
      </p>
    </div>

    <!--pages -->

    <h3 class="text-xl mb-4 font-bold dark:text-gray-300">page</h3>
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <ul class="list-disc px-4 space-y-2">
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">url</span> - current page url</li>
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">params</span> - current page params</li>
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">route</span> - object with id property for current page</li>
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">status</span> - HTTP status code for current page</li>
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">error</span> - error object for current page</li>
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">data</span> - data for current page from all load functions</li>
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">form</span> - data from form actions</li>
      </ul>
    </div>
  </div>
</main>