import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$src: resolve('./src'),
			$stores: resolve('./src/stores'),
			$assets: resolve('./src/assets'),
			$icon: resolve('./node_modules/svelte-bootstrap-icons/lib')
		}
	},
	ssr: {
		noExternal: ['@teamhanko/hanko-elements']
	}
})
