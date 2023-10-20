<script>
  import { tick } from "svelte";

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
</script>

<svelte:head>
	<title>Svelte</title>
</svelte:head>

<main class="h-full pb-16 overflow-y-auto">
	<div class="container px-6 mx-auto grid">


    <!-- Svelte -->
    <h3 class="text-xl font-bold dark:text-gray-300">Svelte</h3>
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <p class="text-sm text-gray-600 dark:text-gray-400"> Svelte is a <strong>component</strong> framework</p>
    </div>


    <!-- Reactivity -->
		<h4 class="mb-4 text-lg font-semibold dark:text-gray-300">Reactivity</h4>
    <div class="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <p class="text-sm text-gray-600 dark:text-gray-400"> Reactivity is triggered by <strong>assignment "="</strong></p>
    </div>
    <p class="text-sm mb-8 text-gray-600 dark:text-gray-400"> Rule of thumb: <span class="bg-green-800" ><strong> the name of the updated variable must appear on the left hand side of the assignment</strong></span></p>
    <p class="text-sm text-gray-600 dark:text-gray-400"> Using array methods like push and splice won't automatically cause updates</p>
    <div class="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <code>
      <samp> const foo = obj.foo; <br> foo.bar = 'bar';</samp>
      </code>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400"> Won't trigger reactivity on <samp>obj.foo.bar</samp> unless it is followed with <samp> obj=obj</samp></p>
    <div class="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <code>
        <samp> function addNumber () &#123 <br> numbers.push(numbers.length + 1); <br> <span class="bg-green-800" >numbers = numbers;</span> <br> &#125 </samp>
      </code>
    </div>

    <!-- DOM Events -->
    <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">DOM Events</h4>
    <div class="mb-8">
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-sm text-gray-600 dark:text-gray-400"> Supports listening to an DOM events on an element. DOM event handlers can have modifiers that alter their behaviour.</p>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400"> Example for button click</p>
      <div class="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <code>
          <samp>
            &#60button <span class="bg-green-800" >on:click|once|preventDefault|stopPropagation|<strong>trusted</strong></span>={() => alert('clicked')}
              Click me
            &#60/button>
          </samp>
        </code>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400"> There is also support for component events</p>
      <div class="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <code>
          <samp>
            &#60CustomComponent <span class="bg-green-800" >on:componentDefinedEvent</span>={() => alert('clicked')}
            Click me
            &#60/CustomComponent>
          </samp>
        </code>
      </div>
    </div>


    <!-- Data flow -->
    <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">Data flow</h4>
    <div class="mb-8">
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md space-y-2 dark:bg-gray-800">
        <p class="text-sm text-gray-600 dark:text-gray-400">As a general rule, data flow in Svelte is top down — a parent component can set props on a child component, and a component can set attributes on an element, but not the other way around</p>
        <p class="text-sm text-gray-600 dark:text-gray-400">The rule can be broken with use of <span class="bg-green-800" ><strong>binding</strong> directive</span></p>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400"> Example input value change</p>
      <div class="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <code>
          <samp>
            &#60input <span class="bg-green-800" >bind:value=&#123name&#125</span>>
          </samp>
        </code>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400"> This means that not only will changes to the value of name update the input value, but changes to the input value will update name.</p>
    </div>

    <!-- Life Cycle -->
    <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">Components Life cycle</h4>
    <div class="mb-8">
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md space-y-2 dark:bg-gray-800">
        <ol class="list-decimal px-4">
          <li>onMount</li>
          <li>beforeUpdate</li>
          <li>afterUpdate</li>
          <li>tick</li>
          <li>onDestroy</li>
        </ol>
      </div>
      <p class="text-md text-gray-600 dark:text-gray-400"> onMount (similar to React useEffect)</p>
      <div class="px-4 py-3 mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-sm text-gray-600 dark:text-gray-400">Runs after the component is first rendered to the DOM.</p>
      </div>
      <p class="text-md text-gray-600 dark:text-gray-400"> beforeUpdate and afterUpdate</p>
      <div class="px-4 py-3 mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-sm text-gray-600 dark:text-gray-400">BeforeUpdate function schedules work to happen immediately before the DOM is updated. afterUpdate is its counterpart, used for running code once the DOM is in sync with your data.</p>
      </div>
      <p class="text-md text-gray-600 dark:text-gray-400"> tick</p>
      <div class="px-4 py-3 mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <p class="text-sm text-gray-600 dark:text-gray-400">Can be called anytime, It returns a promise that resolves as soon as any pending state changes have been applied to the DOM (or immediately, if there are no pending state changes). </p>
      </div>
      <div class="px-4 py-3 mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <textarea
          class="w-full resize-none text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800"
          value={text}
          on:keydown|preventDefault={handleKeyDownBefore}
        />
        <p class="text-md text-gray-600 dark:text-gray-400"> After fix</p>
        <textarea
          class="w-full resize-none text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800"
          value={textFix}
          on:keydown|preventDefault={handleKeyDownAfterFix}
        />
      </div>
    </div>

    <!-- Stores -->
    <h4 class="mb-4 text-lg font-semibold dark:text-gray-300">Stores</h4>
    <p class="text-md text-gray-600 dark:text-gray-400"> An object with <i>subscribe</i> and <i>subscribe</i> method that allows interested parties to be notified whenever the store value changes. Has also <span class="bg-green-800" ><i>set</i></span> and <span class="bg-green-800" ><i>update</i></span> methods.</p>
    <div class="mb-8">
      <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md space-y-2 dark:bg-gray-800">
        <ol class="list-decimal px-4">
          <li><samp>writable</samp> store - has both <span class="bg-green-800" ><i>set</i></span> and <span class="bg-green-800" ><i>update</i></span> methods</li>
          <li><samp>read</samp> store - not writable but only for read values calculated internally</li>
          <li><samp>derived</samp> store -values based on another store</li>
          <li><samp>custom</samp> store - any object that implements <i>subscribe</i> method</li>
        </ol>
      </div>
    </div>
	</div>
</main>

