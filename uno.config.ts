import { defineConfig, presetMini, transformerDirectives } from 'unocss'

export default defineConfig({
	// https://unocss.dev/presets/mini
	presets: [
		presetMini({
			preflight: false,
		}),
	],
	// https://unocss.dev/transformers/directives
	transformers: [transformerDirectives()],
})
