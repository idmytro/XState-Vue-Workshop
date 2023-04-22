import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import markdown from 'vite-plugin-md';

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [
		vue({
			include: [/\.vue$/, /\.md$/],
		}),
		markdown(),
	],
	server: {
		port: 3003,
	},
});
