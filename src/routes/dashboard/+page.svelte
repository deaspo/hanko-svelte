<script lang="ts">
  import Code from "$lib/deck/code.svelte";
  import Slide from "$lib/deck/slide.svelte";
  import Slides from "$lib/deck/slides.svelte";
  import { toggleSideMenu } from "$stores/menus";
  import { onMount, tick } from "svelte";

  let text = `Select some text and hit the tab key to toggle uppercase`;
  let textFix = `Select some text and hit the tab key to toggle uppercase`;
  async function handleKeyDownBefore(event) {
    const { selectionStart, selectionEnd, value } = this;
    const selection = value.slice(selectionStart, selectionEnd);

    const replacement = /[a-z]/.test(selection)
      ? selection.toUpperCase()
      : selection.toLowerCase();

    text =
      value.slice(0, selectionStart) +
      replacement +
      value.slice(selectionEnd);

    // this has no effect, because the DOM hasn't updated yet
    this.selectionStart = selectionStart;
    this.selectionEnd = selectionEnd;
  }
  async function handleKeyDownAfterFix(event) {
    const { selectionStart, selectionEnd, value } = this;
    const selection = value.slice(selectionStart, selectionEnd);

    const replacement = /[a-z]/.test(selection)
      ? selection.toUpperCase()
      : selection.toLowerCase();

    textFix =
      value.slice(0, selectionStart) +
      replacement +
      value.slice(selectionEnd);

    await tick();
    this.selectionStart = selectionStart;
    this.selectionEnd = selectionEnd;
  }

  onMount(() => {
    toggleSideMenu()
  })
</script>

<svelte:head>
  <title>Svelte Presentation</title>
</svelte:head>

<Slides>

  <!-- Introduction Svelte -->
  <Slide animate id="animate">
    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300 capitalize">Svelte Presentation🔥</h3>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300 capitalize">Svelte</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-sm text-gray-600 dark:text-gray-400"> Svelte is a <strong>component</strong> framework</p>
      </div>
    </Slide>
  </Slide>

  <!-- Reactivity -->
  <Slide animate id="animate">
    <Slide animate id="animate">
      <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">Reactivity</h4>
    </Slide>

    <Slide animate id="animate">
      <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">Reactivity</h4>
      <div class="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-sm text-gray-600 dark:text-gray-400"> Reactivity is triggered by <strong>assignment "="</strong></p>
      </div>
      <p class="text-sm mb-8 text-gray-600 dark:text-gray-400"> Rule of thumb: <span class="bg-green-800" ><strong> the name of the updated variable must appear on the left hand side of the assignment</strong></span></p>
      <p class="text-sm text-gray-600 dark:text-gray-400"> Using array methods like push and splice won't automatically cause updates</p>
      <div class="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Code>
          {`
          const foo = obj.foo;
          foo.bar = 'bar';
           `}
        </Code>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400"> Won't trigger reactivity on <samp>obj.foo.bar</samp> unless it is followed with <samp> obj=obj</samp></p>
      <div class="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Code>
          {`
          function addNumber () {
              numbers.push(numbers.length + 1);
              numbers = numbers;
            }
`}
        </Code>
      </div>
    </Slide>
  </Slide>

  <!-- DOM Events -->
  <Slide animate id="animate">
    <Slide animate id="animate">
      <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">DOM Events</h4>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-md text-gray-600 dark:text-gray-400"> Supports listening to an DOM events on an element. DOM event handlers can have modifiers that alter their behaviour.</p>
      </div>
    </Slide>

    <Slide animate id="animate">
      <p class="text-md text-gray-600 dark:text-gray-400"> E.g. button click</p>
      <div class="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Code>
          {`
            <button
              on:click|once|preventDefault|stopPropagation|trusted={
                  () => alert('clicked')
              }
            >
                Click me
            </button>
          `}
        </Code>
      </div>
    </Slide>

    <Slide animate id="animate">
      <p class="text-md text-gray-600 dark:text-gray-400"> There is also support for component events</p>
      <div class="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Code>
          {`
            <CustomComponent
               on:componentDefinedEvent={() => doEvent('prop')}
            >
              Click me
            </CustomComponent>
          `}
        </Code>
      </div>
    </Slide>

  </Slide>


  <!-- Data Flow -->
  <Slide animate id="animate">

    <Slide animate id="animate">
      <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">Data Flow</h4>
    </Slide>

    <Slide animate id="animate">
      <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">Data Flow</h4>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md space-y-2 dark:bg-gray-800">
        <p class="text-gray-600 dark:text-gray-400">As a general rule, data flow in Svelte is top down — a parent component can set props on a child component, and a component can set attributes on an element, but not the other way around</p>
      </div>
    </Slide>

    <Slide animate id="animate">
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md space-y-2 dark:bg-gray-800">
        <p class="text-gray-600 dark:text-gray-400">The rule can be broken with use of <span class="bg-green-800" ><strong>binding</strong> directive</span></p>
      </div>
    </Slide>

    <Slide animate id="animate">
      <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">Data Flow</h4>
      <p class="text-md text-gray-600 dark:text-gray-400"> Example button click</p>
      <div class="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Code>
          {`
            <input bind:value={name} />
          `}
        </Code>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400"> This means that not only will changes to the value of name update the input value, but changes to the input value will update name.</p>
    </Slide>
  </Slide>

  <!-- Life Cycle -->
  <Slide animate id="animate">
    <Slide animate id="animate">
      <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">Components Life cycle</h4>
    </Slide>

    <Slide animate id="animate">
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md space-y-2 dark:bg-gray-800">
        <ol class="list-decimal px-4">
          <li>onMount</li>
          <li>beforeUpdate</li>
          <li>afterUpdate</li>
          <li>tick</li>
          <li>onDestroy</li>
        </ol>
      </div>
    </Slide>

    <Slide animate id="animate">
      <p class="text-md text-gray-600 dark:text-gray-400"> onMount (similar to React useEffect)</p>
      <div class="px-4 py-3 mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-gray-600 dark:text-gray-400">Runs after the component is first rendered to the DOM.</p>
      </div>
    </Slide>

    <Slide animate id="animate">
      <p class="text-md text-gray-600 dark:text-gray-400"> beforeUpdate and afterUpdate</p>
      <div class="px-4 py-3 mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-gray-600 dark:text-gray-400">BeforeUpdate function schedules work to happen immediately before the DOM is updated. afterUpdate is its counterpart, used for running code once the DOM is in sync with your data.</p>
      </div>
    </Slide>

    <Slide animate id="animate">
      <p class="text-md text-gray-600 dark:text-gray-400"> tick</p>
      <div class="px-4 py-3 mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-gray-600 dark:text-gray-400">Can be called anytime, It returns a promise that resolves as soon as any pending state changes have been applied to the DOM (or immediately, if there are no pending state changes). </p>
      </div>
    </Slide>

    <Slide animate id="animate">
      <p class="text-md text-gray-600 dark:text-gray-400"> Example for tick()</p>
      <div class="px-4 py-3 mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <textarea
          class="w-full resize-none text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800"
          on:keydown|preventDefault={handleKeyDownBefore}
          value={text}
        />
        <p class="text-md text-gray-600 dark:text-gray-400"> After fix</p>
        <textarea
          class="w-full resize-none text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800"
          on:keydown|preventDefault={handleKeyDownAfterFix}
          value={textFix}
        />
      </div>
    </Slide>
  </Slide>

  <!-- Stores -->
  <Slide animate id="animate">
    <Slide animate id="animate">
      <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">Stores</h4>
    </Slide>

    <Slide animate id="animate">
      <p class="text-md text-gray-600 dark:text-gray-400"> An object with <i>subscribe</i> and <i>subscribe</i> method that allows interested parties to be notified whenever the store value changes. Has also <span class="bg-green-800" ><i>set</i></span> and <span class="bg-green-800" ><i>update</i></span> methods.</p>
    </Slide>

    <Slide animate id="animate">
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md space-y-2 dark:bg-gray-800">
        <ol class="list-decimal px-4">
          <li><samp>writable</samp> store - has both <span class="bg-green-800" ><i>set</i></span> and <span class="bg-green-800" ><i>update</i></span> methods</li>
          <li><samp>read</samp> store - not writable but only for read values calculated internally</li>
          <li><samp>derived</samp> store -values based on another store</li>
          <li><samp>custom</samp> store - any object that implements <i>subscribe</i> method</li>
        </ol>
      </div>
    </Slide>
  </Slide>

  <!-- Svelte kit -->
  <Slide animate id="animate">
    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300 capitalize">SvelteKit</h3>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300 capitalize">SvelteKit</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-md text-gray-600 dark:text-gray-400"> Svelte is a <strong>app</strong> framework that solves the problem of building production ready applications.</p>
      </div>

      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Code>
          {`
          npm create svelte@latest
          `}
        </Code>
      </div>
    </Slide>

    <Slide animate id="animate">
      <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">Render mechanism</h4>
      <div class="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-md text-gray-600 dark:text-gray-400"> Apps are server-rendered by default for excellent first load performance and SEO characteristics, but can then transition to client-side navigation (like SPAs) to avoid jankily reloading everything when the user navigates.</p>
      </div>
    </Slide>

    <Slide animate id="animate">
      <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">Bundler - Vite</h4>
    </Slide>

    <Slide animate id="animate">
      <h4 class="mb-4 text-xl font-semibold dark:text-gray-300"><span class="text-red-400">Note!</span></h4>
      <div class="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-md text-gray-600 dark:text-gray-400">
          It applies <samp>"type":"module"</samp> - means that .js files are treated as native JavaScript modules by default, rather than the legacy CommonJS format.
        </p>
      </div>
    </Slide>

  </Slide>


  <!-- Routing -->
  <Slide animate id="animate">
    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300 capitalize">Routing</h3>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300 capitalize">Routng</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-md text-gray-600 dark:text-gray-400">Uses filesystem-based routing</p>
      </div>
    </Slide>

    <Slide animate id="animate">
      <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">Pages</h4>
      <div class="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-md text-gray-600 dark:text-gray-400">The url resolves to a <span class="bg-green-800"><samp>+page.svelte</samp></span> component</p>
      </div>
    </Slide>

    <Slide animate id="animate">
      <h4 class="mb-4 text-xl font-semibold dark:text-gray-300"><span class="text-red-400">Note!</span></h4>
      <div class="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-md text-gray-600 dark:text-gray-400">
          Unlike traditional multi-page apps, navigating to and from updates the contents of the current page, like a single-page app. This gives us the best of both worlds — fast server-rendered startup, then instant navigation
        </p>
      </div>
    </Slide>

    <Slide animate id="animate">
      <h4 class="mb-4 text-md font-semibold dark:text-gray-300">Folder structure example</h4>
      <div class="text-left px-4 py-3 mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-sm text-gray-600 dark:text-gray-400"> Common UI are placed in <span class="bg-green-800"><samp>+layout.svelte</samp></span> component</p>
        <samp>
          src/routes/ <br> ├ about/ <br> │ └ +page.svelte <br> ├ <span class="bg-green-800">+layout.svelte</span> <br> └ +page.svelte
        </samp>
      </div>
    </Slide>
  </Slide>

  <!-- Loading Data -->
  <Slide animate id="animate">
    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300 capitalize">Loading data from the server</h3>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300 capitalize">Loading data</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-gray-600 dark:text-gray-400">Get data needed by the route through the <samp><code>load function</code></samp> defined on <samp><code>+page(layout).server.ts(js)</code></samp> or <samp><code>+page(layout).ts(js)</code></samp> modules. <strong>*.server</strong> module only runs on the server.</p>
      </div>
    </Slide>

    <Slide animate id="animate">
      <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">Universal vs. Server</h4>
      <div class="text-left px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <ul class="list-disc px-4 space-y-2">
          <li class="text-gray-600 dark:text-gray-400"> <span class="bg-gray-600"><samp>+page.ts(js)</samp></span> and <span class="bg-gray-600"><samp>+layout.ts(js)</samp></span> export universal load function that runs on the server and browser</li>
          <li class="text-gray-600 dark:text-gray-400"> <span class="bg-gray-600"><samp>+page.server.ts(js)</samp></span> and <span class="bg-gray-600"><samp>+layout.server.ts(js)</samp></span> export universal load function that runs on the server-side</li>
        </ul>
      </div>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl mb-4 font-bold dark:text-gray-300">Input available</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Code>
          {`
          // For server load related events
          function load ({params}:ServerLoadEvent){
              ...
          }

          // For universal load related events
          function load ({params}: LoadEvent) {
              ...
          }
          `}
        </Code>
      </div>
    </Slide>

    <Slide animate id="animate">
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <ul class="list-disc px-4">
          <li class="text-gray-600 dark:text-gray-400"> <span class="bg-gray-600"><samp>ServerLoadEvent</samp></span> - clientAddress, cookies, locale, platform, request functions</li>
          <li class="text-gray-600 dark:text-gray-400"> <span class="bg-gray-600"><samp>LoadEvent</samp></span> - data property</li>
          <li class="text-gray-600 dark:text-gray-400"> Shared functions - params, route, url, fetch, setHeaders, parent, depends</li>
        </ul>
      </div>
    </Slide>
  </Slide>

  <!-- Sending Data -->
  <Slide animate id="animate">
    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300 capitalize">Sending data to the server</h3>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300">The &#60;form&#62; element</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-gray-600 dark:text-gray-400">
          Platform way to submit data through <samp><code>action function</code></samp> which defined
          on <samp><code>+page(layout).server.ts(js)</code></samp> or
          <samp><code>+page(layout).ts(js)</code></samp> modules. Advantage is works with or without Javascript
        </p>
      </div>
    </Slide>

    <Slide animate id="animate">
      <p class="text-sm text-gray-600 dark:text-gray-400">Example for action function</p>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Code>
          {`
          <form method="POST" action="?/create" use:enhance={function(...)}>
              ...
          </form>
          // Delete action
          <form method="POST" action="?/delete" use:enhance={function(...)}>
                ...
          </form>
          `}
        </Code>
      </div>
    </Slide>

    <Slide animate id="animate">
      <p class="text-sm text-gray-600 dark:text-gray-400">Example for action function</p>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Code>
          {`
          export const actions = {
              create: async ({ cookies, request }) => {
                const data = await request.formData();
                db.createTodo(cookies.get('id'), data.get('desc'));
              }

              delete: async ({ cookies, request }) => {
                const data = await request.formData();
                db.deleteTodo(cookies.get('id'), data.get('id'));
              }
            };
          `}
        </Code>
      </div>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl mb-4 font-bold dark:text-gray-300">use:enhance</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-gray-600 dark:text-gray-400"> When JS is enabled, <span class="bg-gray-600">use:enhance</span> will emulate the browser-native behaviour except for the full-page reloads. Can be used to cancel() submission, handle redirects, whether to reset the form or not</p>
      </div>
    </Slide>

    <Slide animate id="animate">
      <p class="text-sm text-gray-600 dark:text-gray-400">Validation</p>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-gray-600 dark:text-gray-400"> Support both server validation and external validation from package like Zod</p>
      </div>
    </Slide>
  </Slide>


  <!-- API Routes -->
  <Slide animate id="animate">
    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300 capitalize">API Routes</h3>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300 capitalize">API Routes</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-md text-gray-600 dark:text-gray-400">
          Allows to create API routes by adding a <span class="bg-green-800">+server.js</span> file that exports functions corresponding to HTTP methods: GET, PUT, POST, PATCH and DELETE.
        </p>
      </div>
    </Slide>
  </Slide>


  <!-- Stores -->
  <Slide animate id="animate">
    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300">Shipped stores</h3>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300">Shipped stores</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-md text-gray-600 dark:text-gray-400">
          There are three readonly stores available via the $app/stores module — page, navigating and updated.
        </p>
      </div>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl mb-4 font-bold dark:text-gray-300">page</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <ul class="list-disc px-4 space-y-2">
          <li class="text-md text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">url</span> - current page url</li>
          <li class="text-md text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">params</span> - current page params</li>
          <li class="text-md text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">route</span> - object with id property for current page</li>
          <li class="text-md text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">status</span> - HTTP status code for current page</li>
          <li class="text-md text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">error</span> - error object for current page</li>
          <li class="text-md text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">data</span> - data for current page from all load functions</li>
          <li class="text-md text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">form</span> - data from form actions</li>
        </ul>
      </div>
    </Slide>
  </Slide>


  <!-- Hooks -->
  <Slide animate id="animate">
    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300">Hooks</h3>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300">Hooks</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-gray-600 dark:text-gray-400">
          Provide a way to intercept and override the framework default behavior. Defined under <span class="bg-gray-600">src/hook.server.ts</span>
        </p>
      </div>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl mb-4 font-bold dark:text-gray-300">Available hooks</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <ul class="list-disc px-4 space-y-2">
          <li class="text-md text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">handle</span> </li>
          <li class="text-md text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">handleFetch</span> - modifies the fetch method behavior</li>
          <li class="text-md text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">handleError</span> - for intercepting and handling all unexpected errors</li>
        </ul>
      </div>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl mb-4 font-bold dark:text-gray-300">Input available</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <ul class="list-disc px-4 space-y-2">
          <li class="text-md text-gray-600 dark:text-gray-400"> <span class="bg-gray-600"><samp>ServerLoadEvent</samp></span> - clientAddress, cookies, locale, platform, request functions</li>
          <li class="text-md text-gray-600 dark:text-gray-400"> <span class="bg-gray-600"><samp>LoadEvent</samp></span> - data property</li>
          <li class="text-md text-gray-600 dark:text-gray-400"> Shared functions - params, route, url, fetch, setHeaders, parent, depends, error</li>
        </ul>
      </div>
    </Slide>

  </Slide>

  <!-- Page options -->
  <Slide animate id="animate">
    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300">Page Options</h3>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300">Page Options</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-gray-600 dark:text-gray-400">
          Control how pages are rendered, pre-rendered, toggle trailing slashes in URLs and toggle interactive pages. Are applicable to individual or group of pages.
        </p>
      </div>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300">Options</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <ul class="list-disc px-4 space-y-2">
          <li class="text-md text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">ssr</span> -  whether or not pages should be server-rendered or SPA. i.e.  <samp>export const ssr = false;</samp> </li>
        </ul>
      </div>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300">Options</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <ul class="list-disc px-4 space-y-2">
          <li class="text-md text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">csr</span> - whether the page is interactive (JS is served). Great to check if page is usable for browsers without JS. i.e.  <samp>export const csr = false;</samp></li>
        </ul>
      </div>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300">Options</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <ul class="list-disc px-4 space-y-2">
          <li class="text-md text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">prerender</span> - Prerendering set to true means generating HTML for a page once, at build time, rather than dynamically for each request. The tradeoff is that the build process takes longer, and prerendered content can only be updated by building and deploying a new version of the application. i.e <samp>export const prerender = true;</samp></li>
        </ul>
      </div>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300">Options</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <ul class="list-disc px-4 space-y-2">
          <li class="text-md text-gray-600 dark:text-gray-400"> <span class="bg-gray-600">trailingSlash</span> - By default, SvelteKit strips trailing slashes, meaning that a request for /foo/ will result in a redirect to /foo. Has potential to harm SEO.</li>
        </ul>
      </div>
    </Slide>

    <Slide animate id="animate">
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-md text-gray-600 dark:text-gray-400">
          You can mix and match these options in different areas of your app — you could prerender your marketing pages, dynamically server-render your data-driven pages, and treat your admin pages as a client-rendered SPA.
        </p>
      </div>

      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-md text-gray-600 dark:text-gray-400">
          🥳🥳🥳
        </p>
      </div>
    </Slide>
  </Slide>

  <!-- Drawbacks -->
  <Slide animate id="animate">
    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300">Drawbacks</h3>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300">Draw</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-md text-gray-600 dark:text-gray-400">
          Like every other frameworks, it has it own drawbacks. These are from my own experience and also from the <a href="https://github.com/sveltejs/kit/issues/2712" target="_blank"> GitHub issues page</a>
        </p>
      </div>
    </Slide>

    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300">TypeScript</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-md text-gray-600 dark:text-gray-400">
          Typescript support comes out of the box but documentation is mostly JS for shipped methods. IDE errors
        </p>
      </div>
    </Slide>

    <!-- External packages -->
    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300">Installing packages (support)</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-md text-gray-600 dark:text-gray-400">
          It applies <samp>"type":"module"</samp> - means that .js files are treated as native JavaScript modules by default, rather than the legacy CommonJS format.
        </p>
      </div>
    </Slide>

    <!-- IDE issues -->
    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300">WebStorm (IDE) issues</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-md text-gray-600 dark:text-gray-400">
          Svelte LS tries to parse TS files as Svelte files and subsequently the <a href="https://youtrack.jetbrains.com/issue/WEB-62710/Svelte-Language-Server-Svelte-File-path-to-file-is-not-a-module.error-shown-when-importing-a-.ts-file-in-.svelte">errors appear in Svelte files</a> because parsing error is not a module.
        </p>
      </div>
    </Slide>

    <!-- ssr issues -->
    <Slide animate id="animate">
      <h3 class="text-xl font-bold dark:text-gray-300">SSR issues</h3>
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-md text-gray-600 dark:text-gray-400">
          With ssr off, <span class="bg-green-9800">(some* )imports and variable definitions</span> have to performed differently i.e. onMount since they cannot be evaluated on the server-side. Resulting errors are unpredictable and hard to fix. No full documentation yet about this issue.
        </p>
      </div>
    </Slide>
  </Slide>

</Slides>