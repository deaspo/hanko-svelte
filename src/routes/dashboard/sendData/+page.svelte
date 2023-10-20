<svelte:head>
	<title>Sending Data</title>
</svelte:head>

<main class="h-full pb-16 overflow-y-auto">
	<div class="container px-6 mx-auto grid">
		<!-- Form element -->
		<h3 class="text-xl font-bold dark:text-gray-300">The &#60;form&#62; element</h3>
		<div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
			<p class="text-sm text-gray-600 dark:text-gray-400">
				Platform way to submit data through <samp><code>action function</code></samp> which defined
				on <samp><code>+page(layout).server.ts(js)</code></samp> or
				<samp><code>+page(layout).ts(js)</code></samp> modules. Advantage is works with or without Javascript
			</p>
		</div>
		<p class="text-sm text-gray-600 dark:text-gray-400">Example for action function</p>
		<div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
			<code>
				&#60;form method="POST" action="?/create" <span class="bg-green-800">use:enhance=&#123;function(...)&#125;</span>&#62;<br />&#183;&#183;&#183;<br
				/>&#60;/form&#62<br />
				<samp>
					export const actions = &#123;<br />
					<span class="space-x-4">
						<span>create: async (&#123; cookies, request }) => &#123;<br /></span>
						<span>const data = await request.formData();<br /></span>
						<span>db.createTodo(cookies.get('userid'), data.get('description'));<br /></span>
						<span> &#125;,</span>
					</span>

					<br /><br />
					&#60;form method="POST" action="?/delete" <span class="bg-green-800">use:enhance=&#123;function(...)&#125;</span>&#62;<br />&#183;&#183;&#183;<br
					/>&#60;/form&#62<br />
					<span class="space-x-4">
						<span>delete: async (&#123; cookies, request &#125;) => &#123;<br /></span>
						<span>const data = await request.formData();<br /></span>
						<span>db.deleteTodo(cookies.get('userid'), data.get('id'));<br /></span>
						<span> &#125;,</span><br />
					</span>
					};
				</samp>
			</code>
		</div>

		<!-- use:enhance -->
		<h3 class="text-xl mb-4 font-bold dark:text-gray-300">use:enhance</h3>
		<div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
			<p class="text-sm text-gray-600 dark:text-gray-400"> When JS is enabled, <span class="bg-gray-600">use:enhance</span> will emulate the browser-native behaviour except for the full-page reloads. Can be used to cancel() submission, handle redirects, whether to reset the form or not</p>
		</div>
	</div>
</main>
