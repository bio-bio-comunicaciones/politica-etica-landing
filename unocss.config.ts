import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import { defineConfig, presetIcons, presetTypography, presetUno, presetWebFonts, transformerVariantGroup } from 'unocss'

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons(),
		presetWebFonts({
			fonts: {
				sans: {
					name: 'Lato',
					weights: [400, 700, 900]
				},
				serif: {
					name: 'Martel',
					weights: [900]
				}
			},
			processors: createLocalFontProcessor({
				cacheDir: 'node_modules/.cache/unocss/fonts',
				fontAssetsDir: 'public/assets/fonts',
				fontServeBaseUrl: '/assets/fonts'
			})
		}),
		presetTypography({
			cssExtend: {
				h2: {
					'font-size': '1.25rem',
					'font-weight': '900',
					'margin-bottom': '48px'
				},
				h3: {
					'font-size': '1rem',
					'font-weight': '900',
					'margin-bottom': '24px'
				},
				ol: {
					'list-style-type': 'lower-alpha'
				},
				li: {
					'margin-bottom': '32px'
				},
				strong: {
					'font-weight': '900'
				}
			}
		})
	],
	transformers: [transformerVariantGroup()],
	theme: {
		container: {
			center: true
		},
		breakpoints: {
			sm: '640px',
			md: '768px',
			lg: '1092px'
		},
		colors: {
			blue: '#243C68'
		}
	}
})
