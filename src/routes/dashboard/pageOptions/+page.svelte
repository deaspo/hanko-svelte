<svelte:head>
  <title>Page Options</title>
</svelte:head>

<main class="h-full pb-16 overflow-y-auto">
  <div class="container px-6 mx-auto grid">

    <!--Page Options -->
    <h3 class="text-xl font-bold dark:text-gray-300">Page Options</h3>
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Control how pages are rendered, pre-rendered, toggle trailing slashes in URLs and toggle interactive pages. Are applicable to individual or group of pages.
      </p>
    </div>

    <!--Options -->
    <h3 class="text-xl mb-4 font-bold dark:text-gray-300">Options</h3>
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <ul class="list-disc px-4 space-y-2">
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">ssr</span> -  whether or not pages should be server-rendered or SPA. i.e.  <samp>export const ssr = false;</samp> </li>
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">csr</span> - whether the page is interactive (JS is served). Great to check if page is usable for browsers without JS. i.e.  <samp>export const csr = false;</samp></li>
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">prerender</span> - Prerendering set to true means generating HTML for a page once, at build time, rather than dynamically for each request. The tradeoff is that the build process takes longer, and prerendered content can only be updated by building and deploying a new version of the application. i.e <samp>export const prerender = true;</samp></li>
        <li class="text-sm text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">trailingSlash</span> - By default, SvelteKit strips trailing slashes, meaning that a request for /foo/ will result in a redirect to /foo. Has potential to harm SEO.</li>
      </ul>
    </div>


    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        You can mix and match these options in different areas of your app — you could prerender your marketing pages, dynamically server-render your data-driven pages, and treat your admin pages as a client-rendered SPA.
      </p>
    </div>
  </div>
</main>