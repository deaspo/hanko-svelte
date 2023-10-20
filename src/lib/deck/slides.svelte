<script lang="ts">
	import Reveal from "reveal.js";

	import "reveal.js/dist/reveal.css";
	import "reveal.js/dist/theme/dracula.css";
	import Highlight from "reveal.js/plugin/highlight/highlight";
	import "reveal.js/plugin/highlight/monokai.css";
	import Markdown from "reveal.js/plugin/markdown/markdown";
	import Notes from "reveal.js/plugin/notes/notes";
	import { onMount } from "svelte";

	onMount(() => {
		const deck = new Reveal({
			plugins: [Markdown, Highlight, Notes],
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			hash: true,
			// controls: false,
			// progress: false
		})

		deck.initialize()
	})
</script>

<div class="reveal">
	<div class="slides">
		<slot />
	</div>
</div>
