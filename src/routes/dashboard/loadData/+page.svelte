<svelte:head>
  <title>Loading Data</title>
</svelte:head>

<main class="h-full pb-16 overflow-y-auto">
  <div class="container px-6 mx-auto grid">


    <!-- Loading -->
    <h3 class="text-xl font-bold dark:text-gray-300">Loading data</h3>
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <p class="text-sm text-gray-600 dark:text-gray-400"> Get data needed by the route through the <samp><code>load function</code></samp> which defined on <samp><code>+page(layout).server.ts(js)</code></samp> or <samp><code>+page(layout).ts(js)</code></samp> modules. <strong>*.server</strong> module only runs on the server</p>
    </div>

    <!-- Universal vs Server -->
    <h3 class="text-xl mb-4 font-bold dark:text-gray-300">Universal vs server</h3>
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <ul class="list-disc px-4 space-y-2">
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600"><samp>+page.ts(js)</samp></span> and <span class="bg-gray-600"><samp>+layout.ts(js)</samp></span> export universal load function that runs on the server and browser</li>
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600"><samp>+page.server.ts(js)</samp></span> and <span class="bg-gray-600"><samp>+layout.server.ts(js)</samp></span> export universal load function that runs on the server-side</li>
      </ul>
    </div>

    <!-- Inputr -->
    <h3 class="text-xl mb-4 font-bold dark:text-gray-300">Input available</h3>
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <code>
        <samp>// For server load related events</samp>
        <br>
        <samp> function load (&#123params&#125:<span class="bg-green-800">ServerLoadEvent</span>) &#123 <br>...<br> &#125 </samp>

        <br><br>
        <samp>// For universal load related events</samp>
        <br>
        <samp> function load (&#123params&#125:<span class="bg-green-800">LoadEvent</span>) &#123 <br>...<br> &#125 </samp>
      </code>
    </div>

    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <ul class="list-disc px-4 space-y-2">
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600"><samp>ServerLoadEvent</samp></span> - clientAddress, cookies, locale, platform, request functions</li>
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600"><samp>LoadEvent</samp></span> - data property</li>
        <li class="text-sm text-gray-600 dark:text-gray-400"> Shared functions - params, route, url, fetch, setHeaders, parent, depends</li>
      </ul>
    </div>


  </div>
</main>